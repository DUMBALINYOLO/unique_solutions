import axios from 'axios';
import {
  GET_PAYMENTS,
  GET_PAYMENT,
  ADD_PAYMENT,
  GET_QUOTATIONS,
  GET_QUOTATION,
  ADD_QUOTATION,
  EDIT_QUOTATION,
  GET_INVOICES,
  GET_INVOICE,
  ADD_INVOICE,
  GET_INVOICE_LINES,
  PAY,
  GET_PAYMENT_REPORTS,
  GET_CUSTOMER_PRODUCT_LINES,
  ADD_CUSTOMER_PRODUCT_LINE,
  GET_CUSTOMER_PRODUCT_LINE,
  GET_CUSTOMER_SERVICE_LINES,
  ADD_CUSTOMER_SERVICE_LINE,
  GET_CUSTOMER_SERVICE_LINE,
  MAKE_INVOICE,
  GET_CUSTOMER_INVOICES,
  GET_CUSTOMER_INVOICE,
  GET_CUSTOMER_QUOTATIONS,
  GET_CUSTOMER_QUOTATION,
  ACCEPT_INVOICE,
  REJECT_INVOICE,
  GET_CUSTOMER_PAYMENTS,
  GET_CUSTOMER_CART,


} from '../types/salesTypes';
import {
    paymentsURL,
    invoicelinesURL,
    invoicesURL,
    quotationsURL,
    paymentreportsURL,
    customerproductlinesURL,
    customerservicelinesURL,
    customerinvoicesURL,
    customerquotationsURL,
    customerpaymentsURL,
    customercartURL

} from '../constants';


import { createMessage, returnErrors } from './messages';



export const getCustomerCart = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(customercartURL, headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_CART,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const getCustomerPayments = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(customerpaymentsURL, headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_PAYMENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



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


export const getCustomerInvoices = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(customerinvoicesURL, headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_INVOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}





export const getCustomerInvoice = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`${customerinvoicesURL}${id}`)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_INVOICE,
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


export const getQuotations = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(quotationsURL, headers)
        .then(res => {
            dispatch({
                type: GET_QUOTATIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getQuotation = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`${quotationsURL}${id}`)
        .then(res => {
            dispatch({
                type: GET_QUOTATION,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const getCustomerQuotations = (token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(customerquotationsURL, headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_QUOTATIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}



export const getCustomerQuotation = (id, token) => dispatch =>{
      let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`${customerquotationsURL}${id}`)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_QUOTATION,
                payload: res.data
            });
        }).catch(err => console.log(err))

}


export const addQuotation= (quotation, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(quotationsURL, quotation, headers)
        .then(res => {
            dispatch({
                type: ADD_QUOTATION,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
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


export const addPayment= (invoice, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(paymentsURL, invoice, headers)
        .then(res => {
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}


export const makeInvoice = (id,quotation, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(`${quotationsURL}${id}/make_invoice/`,quotation, headers)
        .then(res => {
            dispatch({
                type: MAKE_INVOICE,
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



export const acceptInvoice = (id,invoice, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(`${invoicesURL}${id}/accept/`,invoice, headers)
        .then(res => {
            dispatch({
                type: ACCEPT_INVOICE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const rejectInvoice = (id,invoice, token) => dispatch => {
    let headers = axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        'Accept': 'application/json',
      };
    axios.post(`${invoicesURL}${id}/reject/`,invoice, headers)
        .then(res => {
            dispatch({
                type: REJECT_INVOICE,
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




export const getCustomerProductLines = (id, token) => dispatch => {

    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${customerproductlinesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_PRODUCT_LINES ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const addCustomerProductLine = (line, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(customerproductlinesURL, line, headers)
        .then(res => {
            dispatch({
                type: ADD_CUSTOMER_PRODUCT_LINE,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}



export const getCustomerServiceLines = (id, token) => dispatch => {

    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`${customerservicelinesURL}?id=${id}`, headers)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_SERVICE_LINES ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}




export const addCustomerServiceLine = (line, token) => dispatch => {
    let headers = axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    axios.post(customerservicelinesURL, line, headers)
        .then(res => {
            dispatch({
                type: ADD_CUSTOMER_SERVICE_LINE,
                payload: res.data
            });
        }).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
        });
}
