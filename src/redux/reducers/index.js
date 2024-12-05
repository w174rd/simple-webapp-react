
import { combineReducers } from 'redux';
import utilityReducer from './utility';

export default combineReducers({
    utility: utilityReducer,
});