
import { ToastNotification } from "../../../components/toast";
import { showLoading } from "../../../redux/actions/utility"
import { storageKey } from "../../../util/Config";
import api from "../../API";
import { LOGIN } from "../../../redux/reducers/auth";


export const servicesAuth = () => {

    const login = (requestBody, navigate) => {

        return async (dispatch) => {
            dispatch( showLoading({ button: true }));

            api.login(requestBody)
            .then((response) => {
                dispatch({
                    type: LOGIN,
                    payload: {
                        code: response.code,
                        message: response.message,
                        status: response.status,
                        data: response.data
                    }
                })
                ToastNotification('success', response?.message || "berhasil login")
                localStorage.setItem(storageKey.USER_TOKEN, response?.data?.token)

                // redirect to users page
                setTimeout(() => {
                    navigate('/users', { replace: true });
                    dispatch( showLoading({ button: false }))
                }, [1000]);

            }).catch((error) => {
                dispatch( showLoading({ button: false }))
                console.error('Error:', error)
                ToastNotification('error', error.message || "Login gagal");
            })
        }
    }

    return {
        login
    }
}