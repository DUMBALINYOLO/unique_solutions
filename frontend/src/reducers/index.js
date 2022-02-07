import { combineReducers } from 'redux';
import uiReducer from './ui';
import auth from './auth';
import errors from './errors'
import fees from './fees'
import users from './users/users';



export default combineReducers({
    errors,
    ui: uiReducer,
    auth,
    fees,
    users,
});
