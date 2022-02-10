
import { updateObject } from "../utility";
import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAIL,
  AUTH_START,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  FORGOT_START,
  FORGOT_SUCCESS,
  FORGOT_FAIL,
  RESET_START,
  RESET_SUCCESS,
  RESET_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAIL,

} from '../types/authTypes';






const initialState = {
  token: null,
  email: null,
  userRole: null,
  userName: null,
  error: null,
  loading: false,
  user: null,
  isAuthenticated:null,
  isLoading: null,
  person: {},
  people: [],
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.user.token,
    email: action.user.email,
    userRole: action.user.userRole,
    userName: action.user.userName,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};



export const forgotStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export const forgotSuccess = (state, action) => {
  return updateObject(state, {
    error: action.error,
    msg: action.msg,
    loading: false
  });
};


export const forgotFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


export const resetStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export const resetSuccess = (state, action) => {
  return updateObject(state, {
    msg: action.msg,
    error: action.error,
    loading: false,
  });
};


export const resetFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



export const getUserListStart = (state, action)  => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export const getUserListSuccess = (state, action)  => {
  return updateObject(state, {
    people: action.people,
    error: action.error,
    loading: false
  });
};


export const getUserListFail = (state, action)  => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};


export const getUserDetailStart = (state, action)  => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export const getUserDetailSuccess = (state, action)  => {
  return updateObject(state, {
    person: action.person,
    error: action.error,
    loading: false
  });
};


export const getUserDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case FORGOT_START:
      return forgotStart(state, action);
    case FORGOT_SUCCESS:
      return forgotSuccess(state, action);
    case FORGOT_FAIL:
      return forgotFail(state, action);
    case RESET_START:
      return resetStart(state, action);
    case RESET_SUCCESS:
      return resetSuccess(state, action);
    case RESET_FAIL:
      return resetFail(state, action);
    case GET_USERS_START:
      return getUserListStart(state, action);
    case GET_USERS_SUCCESS:
      return getUserListSuccess(state, action);
    case GET_USERS_FAIL:
      return getUserListFail(state, action);
    case GET_USER_START:
      return getUserDetailStart(state, action);
    case GET_USER_SUCCESS:
      return getUserDetailSuccess(state, action);
    case GET_USER_FAIL:
      return getUserDetailFail(state, action);
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
