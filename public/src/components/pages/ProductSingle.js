import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ProductSingle = () => {


    return (
        <div>
            <Helmet>
                <title>Chemise | eBaaba Gambia</title>
            </Helmet>

            <div className="breadcrumb">
               <div className="breadcrumb-container">
                   <h2>Chemise</h2>
               </div>
            </div>

            <div className="product-single">
                <div className="product-single-info">
                   <div className="row">
                       <div className="col-md-4">
                       <div className="product-slider">
                            <div className="img-container">
                                <img src={require('../../media/images/chemise0.jpg')} style={{ width: '100%', height : '100%'}} />
                            </div>
                            <div className="img-container">
                                <img src={require('../../media/images/chemise2.jpg')} style={{ width: '100%', height : '100%'}} />
                            </div>
                            <div className="img-container">
                                <img src={require('../../media/images/chemise3.jpg')} style={{ width: '100%', height : '100%'}} />
                            </div>
                        </div>
                       </div>
                       <div className="col-md-8">
                            <div className="product-details">
                                <h2>Chemise</h2>
                                <h3>D600 <sup><del>D700</del> <span>You saved D100</span></sup></h3>
                                <h3><Link to="/cart" className="add-to-cart">Buy Now</Link></h3>
                                <h3>
                                    <ul>
                                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </h3>
                                <h3>
                                    <ul>
                                        <li><i className="fa fa-truck"></i></li>
                                        <li>Fast & Reliable Delivery</li>
                                    </ul>
                                </h3>
                            </div>
                       </div>
                   </div>
                </div>

                <div className="single-product-description">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Description</h3>
                            <h5>
                                <ul>
                                    <li>Quality 100% Cotton</li>
                                    <li>Best Quality</li>
                                    <li>Long Lasting</li>
                                </ul>
                            </h5>
                            <h3>Return Policy</h3>
                            <p><i className="fa fa-repeat"></i> 7 Days Return Guarantee</p>
                            <h3>Delivery</h3>
                            <p><i className="fa fa-truck"></i> 2 - 9 Hours</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductSingle;