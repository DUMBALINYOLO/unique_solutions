// const localhost = "http://192.168.1.105:8000"
const localhost = "http://localhost:8000"
export const mocalhost = "http://192.168.1.107:8000"

const apiURL = "/api"

const endpoint = `${localhost}${apiURL}`


export const loginURL = `${endpoint}/users/login/`

export const createuserURL = `${endpoint}/users/register-user/`
export const activateuserURL = `${endpoint}/users/activate-user/`
export const usersURL = `${endpoint}/users/users/`
export const resetpasswordURL = `${endpoint}/users/reset-password/`
export const forgotpasswordURL = `${endpoint}/users/forgot-password/`



export const paymentsURL = `${endpoint}/sales/payments/`
export const invoicelinesURL = `${endpoint}/sales/invoice-lines/`
export const invoicesURL = `${endpoint}/sales/invoices/`
export const quotationsURL = `${endpoint}/sales/quotations/`
export const customerinvoicesURL = `${endpoint}/sales/customer-invoices/`
export const customerquotationsURL = `${endpoint}/sales/customer-quotations/`
export const paymentreportsURL = `${endpoint}/sales/payment-reports/`
export const customerproductlinesURL = `${endpoint}/sales/customer-product-lines/`
export const customerservicelinesURL = `${endpoint}/sales/customer-service-lines/`
export const customerpaymentsURL = `${endpoint}/sales/customer-payments/`
export const customercartURL = `${endpoint}/sales/customer-cart/`

export const productsURL = `${endpoint}/products/products/`
export const productimagesURL = `${endpoint}/products/product-images/`

export const servicesURL = `${endpoint}/services/services/`
export const serviceimagesURL = `${endpoint}/services/service-images/`
