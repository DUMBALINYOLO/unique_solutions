import axios from 'axios';
import {
    GET_SERVICES,
    GET_SERVICE,
    ADD_SERVICE,
    EDIT_SERVICE,
    GET_SERVICE_IMAGES,
    ADD_SERVICE_IMAGE,
    EDIT_SERVICE_IMAGE,

} from '../types/serviceTypes';
import {
    servicesURL,
    serviceimagesURL
} from '../constants';


import { createMessage, returnErrors } from './messages';




export const getServices = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(servicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_SERVICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





export const getService = (id, token) => dispatch =>{

      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`${servicesURL}${id}`)
        .then(res => {
            dispatch({
                type: GET_SERVICE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const addService = (product, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(servicesURL, product, headers)
        .then(res => {
            dispatch({
                type: ADD_SERVICE,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}



export const editService = (id, product, token) => dispatch => {

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    JSON.stringify(id, null, 3)

    axios.patch(`${servicesURL}${id}/`, product)
        .then(res => {
            dispatch({
                type: EDIT_SERVICE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getServiceImages = (id, token) => dispatch => {

    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${serviceimagesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_SERVICE_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addServiceImage = (image, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(serviceimagesURL, image, headers)
        .then(res => {
            dispatch({
                type: ADD_SERVICE_IMAGE,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}



export const editServiceImage = (id, image, token) => dispatch => {

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    JSON.stringify(id, null, 3)

    axios.patch(`${serviceimagesURL}${id}/`, image)
        .then(res => {
            dispatch({
                type: EDIT_SERVICE_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
