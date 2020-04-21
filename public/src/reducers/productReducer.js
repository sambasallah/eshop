import { GET_PRODUCTS, GET_PRODUCT, GET_PRODUCT_BY_ID, ADD_SINGLE_PRODUCT, UPDATE_ITEM_STATE } from '../actions/types';

let initialState = {
    items :[],
    item: {}    
};

export default function( state = initialState, action) {
    switch(action.type) {
            case GET_PRODUCTS: 
                return {
                    ...state,
                    items: action.payload
                }
            case GET_PRODUCT_BY_ID: 
                return {
                    ...state,
                    item: action.payload
                }
            default:
                return state;
    }
}
