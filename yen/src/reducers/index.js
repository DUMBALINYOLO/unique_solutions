import { combineReducers } from 'redux';
import uiReducer from './ui';
import auth from './auth';
import errors from './errors';
import sales from './sales';
import users from './users';
import products from './products';
import services from './services';



export default combineReducers({
    errors,
    ui: uiReducer,
    auth,
    sales,
    users,
    services,
    products
});
