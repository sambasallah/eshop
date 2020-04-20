import React, { useState, createContext, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const products =  [];

    // Products State
    const [allProducts,setProduct] = useState({
        products :[]    
    });

    // Single Product State
    const [single, setSingle] = useState({
        single : {}
    });


  
    const getProducts = async () => {
        const url = "http://localhost:8000/api/v1/products/p/1?page=1";
    
         await fetch(url)
         .then((resp) => resp.json() )
         .then((data) => {
            data.data.map((value, index) => {
                products.push(value);
            });
            setProduct({products : products});
         })
         .catch((error) => {
             console.log(error);            
         })       
    }


    // Get a single product by id
    const getProduct = (id) => {
        return allProducts.products.find(item => item.id === id);
    }

    // Add product to single product state
    const addProduct = (id) => {
        const product = getProduct(id);
        localStorage.setItem('single', JSON.stringify(product));
        setSingle({single: product});
    }

    // Update single prdouct state 
    const updateSingleState = () => {
        let single = localStorage.getItem('single'); 
        setSingle({single: JSON.parse(single)});
    }

    // // Load products 
    // const loadProducts = () => {
    //     setProduct({products : products});
    //     console.log(allProducts)
    // }

   useEffect(() => {
        // loadProducts();
        getProducts();
        updateSingleState();
    },[]);
   
    return (
        <ProductContext.Provider value={{...allProducts, ...single, handleProduct : addProduct }}>
              { props.children }
        </ProductContext.Provider>
    );
}

