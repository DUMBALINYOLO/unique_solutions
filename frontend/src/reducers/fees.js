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


const initialState = {
    invoicelines: [],
    payments: [],
    fees: [],
    paymentreports: [],
    fee: {},
    invoices: [],
    invoice: {},
    loading: false
}

export default function fees(state = initialState, action){
    switch(action.type){
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


        case GET_FEES:
            return {
                ...state,
                fees : action.payload
            };

        case ADD_FEE:
            return {
                ...state,
                fee: [...state.fees, action.payload]
            }


        case EDIT_FEE:
            const feearrayList = state.fees;
            feearrayList.splice(feearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                fees: feearrayList ,
            };


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

        default:
            return state;
    }
}
