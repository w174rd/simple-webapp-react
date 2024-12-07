import { CLEAR_USER } from "../../reducers/users";
import { LOADING } from "../../reducers/utility";

export const showLoading = (loading) => {
    return (dispatch) => {
        dispatch({
            type: LOADING,
            payload: {
                table: loading.table || false,
                screen: loading.screen || false,
                button: loading.button || false,
                form: loading.form || false
            }
        });
    };
};

export const stopLoading = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING,
            payload: {
                table: false,
                screen: false,
                button: false,
                form: false
            }
        });
    };
};

export const clearUserState = () => {
    return async (dispatch) => {
        dispatch({
            type: CLEAR_USER
        })
    }
}