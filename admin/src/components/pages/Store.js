import React, { useState, useEffect } from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import StoreList from './StoreList';

const Store = () => {
       const [allProducts, setProducts] = useState({products: [] });
       const [search, setSearch] = useState({});

    const getAllProducts = async () => {
    
        if(search.searchBox === undefined) {
            let url = 'http://localhost:8000/api/v1/products/';
        let response = await fetch(url);
        let data = await response.json();
        if(data) {
            let arr = [];
            data.map((value, index) => {        
            let product =  {
                        name: value.name,
                        description: value.description,
                        regular_price: value.regular_price,
                        sale_price: value.sale_price,
                        quantity: value.quantity,
                        slug: value.slug,
                        category_name: value.slug,
                        url: JSON.parse(value.url) 
                }      
                arr.push(product);
            });
            setProducts({products : arr });
            }
        } else {
            let url = 'http://localhost:8000/api/v1/products/search/' + search.searchBox;
            let response = await fetch(url);
            let data = await response.json();
            if(data) {
                let arr = [];
                data.map((value, index) => {        
                let product =  {
                            name: value.name,
                            description: value.description,
                            regular_price: value.regular_price,
                            sale_price: value.sale_price,
                            quantity: value.quantity,
                            slug: value.slug,
                            category_name: value.slug,
                            url: JSON.parse(value.url) 
                    }      
                    arr.push(product);
                });
                setProducts({products : arr });
            }
        }

      
    }

    const handleChange = (event) => {
        setSearch(Object.assign({}, search, { [event.target.id]: event.target.value }));

        console.log(search);
    }

    useEffect(() => {
        getAllProducts();
    },[search]);

    return (
        <div>
             <Helmet>
                <title>Store | eBaaba Dashboard</title>
            </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Store</h2>
                </div>
            </div>
           <div className="store">
               <div className="store-inner">
                   <div className="row">
                       <div className="col-md-4 left">
                         <SideNav />
                       </div>
                       <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
                                    <h2>Products -  <Link style={{ padding: '8px 20px', fontSize: '17px', backgroundColor : '#33b27b', color: '#fff', borderRadius: '5px'}} to='/add-product'>Add Product</Link></h2>
                                </div>
                                <div className="col-md-4">
                                    <form> 
                                        <div className="form-group">
                                            <input type="text" placeholder="Search" id="searchBox" onChange={ handleChange } className="form-control" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <StoreList allProducts={ allProducts } />
                         
                        </div>
                    </div>
                

                            <nav aria-label="Products Navigation">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                       </div>
                   </div>
               </div>
        

    );
}

export default Store
