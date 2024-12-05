

export const GET_USERS = "GET_USERS";

const initialState = {
    getUsers: {
        code: 1,
        status: "",
        message: "",
        data: []
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
        default:
            return state;
    }
}