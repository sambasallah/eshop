import { GET_PRODUCTS, ORDER_COMPLETED, GET_PRODUCT_BY_ID, 
    ADD_TO_CART, DELETE_ITEM_FROM_CART, FILTER_BY_PRICE, 
    FILTER_BY_CATEGORY,  
    FILTER_BY_PRICE_CATEGORY} from '../actions/types';

let initialState = {
    items : {},
    item: {},
    cart: [],
    completedOrder: {} 
};

export default function( state = initialState, action) {
    switch(action.type) {
            case GET_PRODUCTS: 
                return {
                    ...state,
                    items: action.payload
                }
            case FILTER_BY_PRICE:
                    return {
                        ...state,
                        items: action.payload
                    }
            case FILTER_BY_CATEGORY:
                return {
                        ...state,
                        items: action.payload
                    }
            case FILTER_BY_PRICE_CATEGORY:
                return {
                        ...state,
                        items: action.payload
                    }
            case GET_PRODUCT_BY_ID: 
                return {
                    ...state,
                    item: action.payload
                }
            case ADD_TO_CART:
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    cartLoading: true
                }
            case DELETE_ITEM_FROM_CART:
                return {
                    ...state,
                    cart: action.payload
                }
            case ORDER_COMPLETED: 
                return {
                    ...state,
                    completedOrder: action.payload
                }
            default:
                return state;
    }
}
