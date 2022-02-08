import {
    GET_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    GET_PRODUCT_IMAGES,
    ADD_PRODUCT_IMAGE,
    EDIT_PRODUCT_IMAGE,

} from '../types/productTypes';


const initialState = {
    products: [],
    product: {},
    productimages: [],
    productimage: {},

}


export default function sales(state = initialState, action){

    switch(action.type){

        case GET_PRODUCTS:
            return {
                ...state,
                products : action.payload
            };

        case GET_PRODUCT:
            return {
                ...state,
                product : action.payload
            };

        case ADD_PRODUCT:
            return {
                ...state,
                product: [...state.products, action.payload]
            }

        case EDIT_PRODUCT:
            const feearrayList = state.products;
            feearrayList.splice(feearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                products: feearrayList ,
            };


        case GET_PRODUCT_IMAGES:
            return {
                ...state,
                productimages : action.payload
            };

        case ADD_PRODUCT_IMAGE:
            return {
                ...state,
                productimage: [...state.products, action.payload]
            }

        case EDIT_PRODUCT_IMAGE:
            const prodarrayList = state.productimages;
            prodarrayList.splice(prodarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                productimages: prodarrayList ,
            };


        default:
            return state;
    }
}
