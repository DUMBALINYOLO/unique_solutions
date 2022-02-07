import axios from 'axios';
import {
  ACTIVATE_USER_START,
  ACTIVATE_USER_FAIL,
  ACTIVATE_USER_SUCCESS,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  GET_USERS,
  GET_USER

} from '../../types/userTypes';

import {
  createuserURL,
  activateuserURL,
  usersURL,
} from '../../constants';

import { returnErrors } from '../messages';





const createUserStart = () => {
  return {
    type: CREATE_USER_START
  };
};


const createUserSuccess = user => {
  return {
    type: CREATE_USER_SUCCESS,
    user
  };
};


const createUserFail = error => {
  return {
    type: CREATE_USER_FAIL,
    error: error
  };
};


const activateUserStart = () => {
  return {
    type: ACTIVATE_USER_START
  };
};


const activateUserSuccess = user => {
  return {
    type: ACTIVATE_USER_SUCCESS,
    user
  };
};


const activateUserFail = error => {
  return {
    type: ACTIVATE_USER_FAIL,
    error: error
  };
};



export const addUser = (user, token) => {
  return dispatch => {
      dispatch(createUserStart());
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
      axios
        .post(createuserURL, user, headers)
        .then(res => {
          dispatch(createUserSuccess(user));
        })
        .catch(err => {
          dispatch(createUserFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};


export const activateUser = (user, token) => {
  return dispatch => {
      dispatch(activateUserStart());
      axios
        .post(activateuserURL, user)
        .then(res => {
          dispatch(activateUserSuccess(user));
        })
        .catch(err => {
          dispatch(activateUserFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
        });
    };
};

export const getUsers = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(usersURL, headers)
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getUser = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${usersURL}${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_USER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
