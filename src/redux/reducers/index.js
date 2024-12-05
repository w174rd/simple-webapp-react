
import { combineReducers } from 'redux';
import utilityReducer from './utility';
import { authReducer } from './auth';

export default combineReducers({
    utility: utilityReducer,
    auth: authReducer
});