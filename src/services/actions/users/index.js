import { showLoading } from "../../../redux/actions/utility"
import { GET_USERS } from "../../../redux/reducers/users"
import api from "../../API"
import { ToastNotification } from "../../../components/toast"



export const serviceUsers = () => {

    const getUsers = () => {
        return async (dispatch) => {
            dispatch( showLoading({ table: true }));

            api.getUsers()
            .then((response) => {
                dispatch({
                    type: GET_USERS,
                    payload: {
                        code: response?.code,
                        status: response?.status,
                        message: response?.message,
                        data: response?.data
                    }
                })
                dispatch( showLoading({ table: false }));
            })
            .catch((error) => {
                dispatch({
                    type: GET_USERS,
                    payload: {
                        code: error?.code,
                        status: error?.status,
                        message: error?.message,
                        data: []
                    }
                });
                dispatch( showLoading({ table: false }));
            });
        }
    }

    const createUser = (bodyRequest, navigate) => {
        return async (dispatch) => {
            dispatch( showLoading({ button: true }));

            api.register(bodyRequest)
            .then((response) => {
                ToastNotification('success', response.message);
                setTimeout(()=>{
                    navigate('/users', { replace: true })
                    dispatch( showLoading({ button: false }));
                }, [1000]);
            })
            .catch((error) => {
                dispatch( showLoading({ button: false }));
                ToastNotification('error', error.message);
            });
        }
    }

    return {
        getUsers,
        createUser
    }
}