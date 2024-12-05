import { ToastNotification } from "../../../components/toast"
import { showLoading } from "../../../redux/actions/utility"
import { GET_USERS } from "../../../redux/reducers/users"
import api from "../../API"



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

    return {
        getUsers
    }
}