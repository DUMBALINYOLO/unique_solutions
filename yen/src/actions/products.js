import axios from 'axios';
import {
    GET_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    GET_PRODUCT_IMAGES,
    ADD_PRODUCT_IMAGE,
    EDIT_PRODUCT_IMAGE,

} from '../types/productTypes';
import {
    productsURL,
    productimagesURL
} from '../constants';


import { createMessage, returnErrors } from './messages';




export const getProducts = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(productsURL, headers)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





export const getProduct = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`${productsURL}${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const addProduct = (product, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(productsURL, product, headers)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
        
}



export const editProduct = (id, product, token) => dispatch => {

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    JSON.stringify(id, null, 3)

    axios.patch(`${productsURL}${id}/`, product)
        .then(res => {
            dispatch({
                type: EDIT_PRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getProductImages = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${productimagesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addProductImage = (image, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(productimagesURL, image, headers)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT_IMAGE,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}



export const editProductImage = (id, image, token) => dispatch => {

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    JSON.stringify(id, null, 3)

    axios.patch(`${productimagesURL}${id}/`, image)
        .then(res => {
            dispatch({
                type: EDIT_PRODUCT_IMAGE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
