import React, { useState, useEffect } from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const Store = () => {
    let originalState = {
        name: "",
        description: "",
        regular_price: "",
        sale_price: "",
        quantity: "",
        slug: "",
        category_name: "",
        url: []
    };

    const [allProducts, setProducts] = useState({products: [originalState] });

    const getAllProducts = async () => {
        let url = 'http://localhost:8000/api/v1/products';
        let response = await fetch(url);
        let data = await response.json();
        if(data) {
            data.map((value, index) => {
                setProducts(Object.assign({}, allProducts, { products: [
                    {
                        name: data[index].name,
                        description: data[index].description,
                        regular_price: data[index].regular_price,
                        sale_price: data[index].sale_price,
                        quantity: data[index].quantity,
                        slug: data[index].slug,
                        category_name: data[index].slug,
                        url: JSON.parse(data[index].url) 
                    }
                ]}))
            });
        }
    }

    useEffect(() => {
        getAllProducts();
    },[]);

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
                                            <input type="text" placeholder="Search" className="form-control" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                          <img src={ allProducts.products[0].url[0] } width="100%" />
                                        </div>
                                        <div className="card-footer">
                                            { allProducts.products[0].name + " - " + allProducts.products[0].regular_price + " " } <span style={{textDecoration: 'line-through'}}> { allProducts.products[0].sale_price } </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b6.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b7.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b8.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b5.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b6.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b7.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b8.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
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
           </div>
        </div>
    )
}

export default Store
