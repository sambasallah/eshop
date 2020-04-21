import { GET_PRODUCTS, GET_PRODUCT, GET_PRODUCT_BY_ID, ADD_SINGLE_PRODUCT, UPDATE_ITEM_STATE } from './types';

// Returns array of products
export const getProducts =  () => async (dispatch) => {
        const url = "http://localhost:8000/api/v1/products/p/1?page=1";
        let reponse = await fetch(url);
        let data = await reponse.json();
        let products = [];
        data.data.map((value, index) => {
            products.push(value);
        });
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        });
}

// Get product by id
export const getProductByID = (state, id) => dispatch =>  {
    let item = state.filter((item) => id === item.id);
    dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: item
    });
}



