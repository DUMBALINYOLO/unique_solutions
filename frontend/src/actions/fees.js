import axios from 'axios';
import {
    GET_PAYMENTS,
    PAY,
    GET_FEES,
    ADD_FEE,
    EDIT_FEE,
    GET_INVOICES,
    GET_INVOICE,
    GET_INVOICE_LINES,
    ADD_INVOICE,
    GET_PAYMENT_REPORTS

} from '../types/feeTypes';
import {
    paymentsURL,
    feesURL,
    invoicesURL,
    invoicelinesURL,
    paymentreportsURL
} from '../constants';
import { createMessage, returnErrors } from './messages';


export const getPaymentReports = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(paymentreportsURL, headers)
        .then(res => {
            dispatch({
                type: GET_PAYMENT_REPORTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getInvoices = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(invoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_INVOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





export const getInvoice = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`${invoicesURL}${id}`)
        .then(res => {
            dispatch({
                type: GET_INVOICE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

export const addInvoice= (invoice, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(invoicesURL, invoice, headers)
        .then(res => {
            dispatch({
                type: ADD_INVOICE,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}






export const getFees = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(feesURL, headers)
        .then(res => {
            dispatch({
                type: GET_FEES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const addFee= (fee, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(feesURL, fee, headers)
        .then(res => {
            dispatch({
                type: ADD_FEE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}







export const getPayments = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${paymentsURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_PAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const editFee = (id, payment, token) => dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    JSON.stringify(id, null, 3)
    axios.patch(`${feesURL}${id}/`, payment)
        .then(res => {
            dispatch({
                type: EDIT_FEE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const pay = (id,payment, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(`${invoicesURL}${id}/pay/`,payment, headers)
        .then(res => {
            dispatch({
                type: PAY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInvoiceLines = (id, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${invoicelinesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_INVOICE_LINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
