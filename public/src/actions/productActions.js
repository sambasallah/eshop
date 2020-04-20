import { GET_PRODUCTS, GET_PRODUCT, GET_PRODUCTS_BY_ID, ADD_SINGLE_PRODUCT } from './types';

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