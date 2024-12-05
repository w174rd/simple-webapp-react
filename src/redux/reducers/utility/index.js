
export const LOADING = "LOADING";

const initialState = {
    loading: {
        screen: false,
        button: false,
        table: false,
        form: false
    }
}

const utilityReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state, 
                loading: action.payload
            }        
        default: 
            return state;
    }
}

export default utilityReducer;