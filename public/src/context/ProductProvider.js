import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const [products,setProduct] = useState([
        {
            "product_name" : "Iphone Charger",
            "product_price" : "D4,000",
            "product_qty" : "3",
            "slug" : "iphone-charger"
        },
        {
            "product_name" : "Iphone",
            "product_price" : "D8,000",
            "product_qty" : "1",
            "slug" : "iphone"
        },
        {
            "product_name" : "Android Phone",
            "product_price" : "D3,000",
            "product_qty" : "1",
            "slug" : "android-phone"
        }            
    ]);

    const [singleProduct,setSingleProduct] = useState([

    ]);

    const getProduct = (id) => {
        setSingleProduct(products.find(products => products.id == id ));
    }

    return (
        <ProductContext.Provider value={products}>
              { props.children }
        </ProductContext.Provider>
    );
}

