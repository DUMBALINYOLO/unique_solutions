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


const initialState = {
    invoicelines: [],
    payments: [],
    quotations: [],
    quotation: {},
    paymentreports: [],
    invoices: [],
    invoice: {},
    loading: false,
    customerservicelines: [],
    customerproductlines: [],
    customerquotations: [],
    customerquotation: {},
    customerinvoices: [],
    customerinvoice: {},
    customerpayments: [],
    customercart: {},
}



export default function sales(state = initialState, action){

    switch(action.type){
        case GET_CUSTOMER_CART:
            return {
                ...state,
                customercart : action.payload
            };

        case GET_CUSTOMER_PAYMENTS:
            return {
                ...state,
                customerpayments : action.payload
            };


        case GET_INVOICE_LINES:
            return {
                ...state,
                invoicelines : action.payload
            };

        case GET_INVOICES:
            return {
                ...state,
                invoices : action.payload
            };


        case GET_INVOICE:
            return {
                ...state,
                invoice : action.payload
            };

        case GET_CUSTOMER_INVOICES:
            return {
                ...state,
                customerinvoices : action.payload
            };


        case GET_CUSTOMER_INVOICE:
            return {
                ...state,
                customerinvoice : action.payload
            };


        case GET_QUOTATIONS:
            return {
                ...state,
                quotations : action.payload
            };

        case GET_QUOTATION:
            return {
                ...state,
                quotation : action.payload
            };

        case GET_CUSTOMER_QUOTATIONS:
            return {
                ...state,
                customerquotations : action.payload
            };

        case GET_CUSTOMER_QUOTATION:
            return {
                ...state,
                customerquotation : action.payload
            };

        case ADD_QUOTATION:
            return {
                ...state,
                quotation: [...state.quotations, action.payload]
            }

        case GET_PAYMENTS:
            return {
                ...state,
                payments : action.payload
            };
        case GET_PAYMENT_REPORTS:
            return {
                ...state,
                paymentreports : action.payload
            };

        case PAY:
            return {
                ...state,
                payment: [...state.payments, action.payload]
            }
        case ACCEPT_INVOICE:
            return {
                ...state,
                invoice: [...state.invoices, action.payload]
            }
        case REJECT_INVOICE:
            return {
                ...state,
                invoice: [...state.invoices, action.payload]
            }
        case MAKE_INVOICE:
            return {
                ...state,
                invoice: [...state.invoices, action.payload]
            }

        case ADD_CUSTOMER_PRODUCT_LINE:
            return {
                ...state,
                line: [...state.customerproductlines, action.payload]
            }

        case GET_CUSTOMER_PRODUCT_LINES:
            return {
                ...state,
                customerproductlines : action.payload
            };


        case ADD_CUSTOMER_SERVICE_LINE:
            return {
                ...state,
                line: [...state.customerservicelines, action.payload]
            }

        case GET_CUSTOMER_SERVICE_LINES:
            return {
                ...state,
                customerservicelines : action.payload
            };

        default:
            return state;
    }
}
