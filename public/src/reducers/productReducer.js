import { GET_PRODUCTS, GET_PRODUCT, GET_PRODUCTS_BY_ID, ADD_SINGLE_PRODUCT } from '../actions/types';


let initialState = {
    items :[]    
};

export default function( state = initialState, action) {
    switch(action.type) {
            case GET_PRODUCTS: 
                return {
                    ...state,
                    items: action.payload
                }
            default:
                return state;
    }
}
