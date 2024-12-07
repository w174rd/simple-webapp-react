

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";

const initialState = {
    getUsers: {
        code: 1,
        status: "",
        message: "",
        data: []
    },
    getUser: {
        code: 1,
        status: "",
        message: "",
        data: {}
    }
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return { 
                ...state, 
                getUsers: {
                    code: action.payload.code,
                    status: action.payload.status,
                    message: action.payload.message,
                    data: action.payload.data
                }
            };
        case GET_USER:
            return { 
                ...state, 
                getUser: {
                    code: action.payload.code,
                    status: action.payload.status,
                    message: action.payload.message,
                    data: action.payload.data
                }
            };
        case CLEAR_USER:
            return {
                ...initialState.getUser
            }
        default:
            return state;
    }
}