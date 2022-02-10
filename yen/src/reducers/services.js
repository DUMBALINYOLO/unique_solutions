import {
    GET_SERVICES,
    GET_SERVICE,
    ADD_SERVICE,
    EDIT_SERVICE,
    GET_SERVICE_IMAGES,
    ADD_SERVICE_IMAGE,
    EDIT_SERVICE_IMAGE,

} from '../types/serviceTypes';


const initialState = {
    
    services: [],
    service: {},
    serviceimages: [],
    serviceimage: {},

}


export default function services(state = initialState, action){

    switch(action.type){

        case GET_SERVICES:
            return {
                ...state,
                services : action.payload
            };

        case GET_SERVICE:
            return {
                ...state,
                service : action.payload
            };

        case ADD_SERVICE:
            return {
                ...state,
                service: [...state.services, action.payload]
            }

        case EDIT_SERVICE:
            const feearrayList = state.services;
            feearrayList.splice(feearrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                services: feearrayList ,
            };


        case GET_SERVICE_IMAGES:
            return {
                ...state,
                serviceimages : action.payload
            };

        case ADD_SERVICE_IMAGE:
            return {
                ...state,
                serviceimage: [...state.services, action.payload]
            }

        case EDIT_SERVICE_IMAGE:
            const prodarrayList = state.serviceimages;
            prodarrayList.splice(prodarrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                serviceimages: prodarrayList ,
            };


        default:
            return state;
    }
}
