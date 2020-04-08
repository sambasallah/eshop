import React, { useState, useEffect } from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Store = () => {   
    const [allProducts, setProducts] = useState({products: null });

    const getAllProducts = async () => {
        let url = 'http://localhost:8000/api/v1/products';
        let response = await fetch(url);
        let data = await response.json();
        if(data) {
            console.log(data[0].regular_price);
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
                                            <img src={require('../../media/b5.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            {/* { allProducts.products.name - allProducts.products.regular_price } */}
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
