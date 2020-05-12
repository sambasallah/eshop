import { GET_PRODUCTS,GET_PRODUCT_BY_ID, ADD_TO_CART, DELETE_ITEM_FROM_CART, 
    ORDER_COMPLETED, FILTER_BY_PRICE, FILTER_BY_CATEGORY, 
    FILTER_BY_PRICE_CATEGORY } from './types';

export const getProducts =  (pageNo) => async dispatch => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
           url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/products/p/1?page=' + pageNo;
        } else {
           url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/products/p/1?page=' + pageNo;;
        }
        let reponse = await fetch(url);
        let data = await reponse.json();
        let allData = {};
        let products = [];
        data.data.map((value, index) => {
            products.push(value);
        });
        allData.last_page = data.last_page;
        allData.current_page = data.current_page;
        allData.products = products;
        dispatch({
            type: GET_PRODUCTS,
            payload: allData
        });
}

export const getProductByID = (state, id) => dispatch =>  {
    let item = state.filter((item) => id === item.id);
    dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: item
    });
}

export const addToCart = (item, cartItems) => dispatch => {
    if(!inCart(item,cartItems)) {
        dispatch({
            type: ADD_TO_CART,
            payload: item
        });
    }
}

const inCart = (item, cartItems) => {
    let result = cartItems.filter((i) => i.id === item.id);
    if(result.length === 0) {
        return false;
    }
    return true;
}

export const deleteItemFromCart = (item, cartItems) => dispatch => {
    let updatedCart = cartItems.filter((i) => i.id !== item.id);
    dispatch({
        type: DELETE_ITEM_FROM_CART,
        payload: updatedCart
    })
}

export const filterByPrice = (page, priceRange) => async dispatch => {
    let url = '';
        if(process.env.NODE_ENV === 'development') {
           url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/filter-by-price/' + priceRange + '?page=' + page;
        } else {
           url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/filter-by-price/' + priceRange + '?page=' + page;
        }
    let response = await fetch(url);
    let data = await response.json();
    let allData = {};
    let products = [];
    data.data.map((value) => {
         products.push(value);
    });
    allData.last_page = data.last_page;
    allData.current_page = data.current_page;
    allData.products = products;
    dispatch({
        type: FILTER_BY_PRICE,
        payload: allData
    });
}

export const filterByCategory = (page, categoryID) => async dispatch => {
    let url = '';
    if(process.env.NODE_ENV === 'development') {
       url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/filter-by-category/' + categoryID + '?page=' + page;
    } else {
       url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/filter-by-category/' + categoryID + '?page=' + page;
    }
    let response = await fetch(url);
    let data = await response.json();
    let allData = {};
    let products = [];
    data.data.map((value) => {
         products.push(value);
    });
    allData.last_page = data.last_page;
    allData.current_page = data.current_page;
    allData.products = products;
    dispatch({
        type: FILTER_BY_CATEGORY,
        payload: allData
    });
}

export const filterByPriceCategory = (page, priceRange, categoryID) => async dispatch => {
    let url = '';
    if(process.env.NODE_ENV === 'development') {
       url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/filter-by-price-category/' + priceRange + '/' + categoryID + '?page=' + page;
    } else {
       url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/filter-by-price-category/' + priceRange + '/' + categoryID + '?page=' + page;
    }
    let response = await fetch(url);
    let data = await response.json();
    let allData = {};
    let products = [];
    data.data.map((value) => {
         products.push(value);
    });
    allData.last_page = data.last_page;
    allData.current_page = data.current_page;
    allData.products = products;
    dispatch({
        type: FILTER_BY_PRICE_CATEGORY,
        payload: allData
    });
}

export const orderCompleted = (orderDetails) => dispatch => {
    dispatch({
        type: ORDER_COMPLETED,
        payload: orderDetails
    });
}



