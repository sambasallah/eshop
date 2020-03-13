import React, { useState, createContext, useEffect, useReducer } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const products =  [
        {
            "id": 1,
            "product_name" : "Iphone Charger",
            "product_price" : "D4,000",
            "product_qty" : "3",
            "slug" : "iphone-charger"
        },
        {
            "id" : 2,
            "product_name" : "Iphone",
            "product_price" : "D8,000",
            "product_qty" : "1",
            "slug" : "iphone"
        },
        {
            "id" : 3,
            "product_name" : "Android Phone",
            "product_price" : "D3,000",
            "product_qty" : "1",
            "slug" : "android-phone"
        }
    ];

    // Products State
    const [allProducts,setProduct] = useState({
        products :[]    
    });

    // Single Product State
    const [single, setSingle] = useState({
        single : {}
    });


  
    const getProducts = async () => {
        const url = "http://localhost:8000/api/v1/products";
    
         await fetch(url)
         .then((resp) => resp.json() )
         .then((data) => {
            //  setProduct({ products : data.products });
             console.log(data.products);
         })
         .catch((error) => {
             console.log(error);            
         })       
    }


    // Get a single product by id
    const getProduct = (id) => {
        const product = allProducts.products.find(item => item.id === id);
        return product;
    }

    // Add product to single product state
    const addProduct = (id) => {
        const product = getProduct(id);
        localStorage.setItem('single', JSON.stringify(product));
        setSingle({single: product});
    }

    // Update single prdouct state 
    const updateSingleState = () => {
        const single = localStorage.getItem('single');
        setSingle({single : JSON.parse(single)});
    }

    // Load products 
    const loadProducts = () => {
        setProduct({products : products});
    }

   useEffect(() => {
        loadProducts();
        getProducts();
        updateSingleState();
    },[]);
   
    return (
        <ProductContext.Provider value={{...allProducts, ...single, handleProduct : addProduct }}>
              { props.children }
        </ProductContext.Provider>
    );
}

