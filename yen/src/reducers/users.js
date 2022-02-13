import {
  ACTIVATE_USER_START,
  ACTIVATE_USER_FAIL,
  ACTIVATE_USER_SUCCESS,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,



} from '.././types/userTypes';
import { updateObject } from "./utility";

const initialState = {
    loading: false,
    error: null,

}



const createUserStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const createUserSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const createUserFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const activateUserStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const activateUserSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const activateUserFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


export default function users(state = initialState, action){
    switch(action.type){
        case CREATE_USER_START:
            return createUserStart(state, action);
        case CREATE_USER_SUCCESS:
            return createUserSuccess(state, action);
        case CREATE_USER_FAIL:
            return createUserFail(state, action);
        case ACTIVATE_USER_START:
            return createUserStart(state, action);
        case ACTIVATE_USER_SUCCESS:
            return createUserSuccess(state, action);
        case ACTIVATE_USER_FAIL:
            return createUserFail(state, action);
        default:
            return state;
    }
}
