
import { combineReducers } from 'redux';
import utilityReducer from './utility';
import { authReducer } from './auth';
import { userReducer } from './users';

export default combineReducers({
    utility: utilityReducer,
    auth: authReducer,
    user: userReducer
});