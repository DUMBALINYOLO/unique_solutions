// const localhost = "http://192.168.1.107:8000"
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


export const paymentsURL = `${endpoint}/fees/payments/`
export const invoicelinesURL = `${endpoint}/fees/invoice-lines/`
export const invoicesURL = `${endpoint}/fees/invoices/`
export const feesURL = `${endpoint}/fees/fees/`
export const paymentreportsURL = `${endpoint}/fees/payment-reports/`
