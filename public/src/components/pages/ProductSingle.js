import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Slider  from 'react-slick';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';

const ProductSingle = (props) => {

    const product = props.product[0];

    const isJson = (str) => {
        try {
            JSON.parse(str);
        } catch(e) {
            return false;
        }
        return true;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    };

  
    return (
       
        <div>
            <Helmet title={ product.name + " | eBaaba Gambia"  }>
                {/* <title> eBaaba Gambia </title> */}
            </Helmet>

            <div className="breadcrumb">
               <div className="breadcrumb-container">
                    <h2>{ product.name }</h2>
               </div>
            </div>

            <div className="product-single">
                <div className="product-single-info">
                   <div className="row">
                       <div className="col-md-4">
                       <div className="product-slider" >
                           <Slider {...settings} >
                                { isJson(product.url)?
                                    JSON.parse(product.url).map((value, index) => {
                                        return(
                                            <div className="img-container">
                                                <img src={ value } style={{maxWidth: '100%', maxHeight:'100%'}} />
                                             </div>
                                        );
                                   }) : (<></>)  
                                } 
                           </Slider>
                        </div>
                       </div>
                       <div className="col-md-8">
                            <div className="product-details">
                                <h2> { product.name } </h2>
                                <h3>{ new Intl.NumberFormat('en-GM', { style: 'currency', currency: 'GMD' }).format( product.sale_price ) } 
                                 <sup style={{paddingLeft: '5px'}}><del>{ new Intl.NumberFormat().format(product.regular_price) }</del> 
                                <span> You Saved { new Intl.NumberFormat().format( Number(product.regular_price) - Number(product.sale_price)) }</span></sup></h3>
                                <h3><Link to="/cart" className="add-to-cart">Add To Cart</Link> </h3>
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
                        <div className="col-md-12" style={{ padding: '0px 30px'}}>
                            <h3>Description</h3>
                            { ReactHtmlParser(product.description) }
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

const mapStateToProps = state => (
    {product: state.products.item }
);

export default connect(mapStateToProps)(ProductSingle);