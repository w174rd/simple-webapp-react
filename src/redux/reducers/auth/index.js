
export const LOGIN = "LOGIN";

const initialState = {
    login: {
        code: 1,
        status: "",
        message: "",
        data: {}
    }
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return { 
                ...state,
                login: {
                    code: action.payload.code,
                    status: action.payload.status,
                    message: action.payload.message,
                    data: action.payload.data
                }
            };
        default:
            return state
    }
}