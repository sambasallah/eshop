import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Slider  from 'react-slick';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/productActions';
import { inCart, isJson } from '../utils/utils';
import Swiper from 'react-id-swiper';

const ProductSingle = (props) => {

    const [qty, setQty] = useState({qty: 1});

    const product = props.product[0];
    const addedToCart = inCart(product, props.cartItems);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    };

    const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
      }

    const increment = () => {
        let currentQty = qty.qty;
        setQty({...qty, qty: currentQty + 1});
    }
    
    const decrement = () => {
        let currentQty = qty.qty;
        if(currentQty <= 1) {
            setQty({...qty, qty: 1 });
            return;
        }
        setQty({...qty, qty: currentQty - 1 });
    }
    
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
                           <Swiper {...params} >
                                { isJson(product.url)?
                                    JSON.parse(product.url).map((value, index) => {
                                        return(
                                           <div className="swiper-slide" key={index}>
                                                <div className="img-container">
                                                    <img src={ value } style={{maxWidth: '100%', maxHeight:'100%'}} />
                                                </div>
                                           </div>
                                        );
                                   }) : ('Loading')  
                                } 
                           </Swiper>
                        </div>
                       </div>
                       <div className="col-md-8">
                            <div className="product-details">
                                <h2> { product.name } </h2>
                                <h3>{ new Intl.NumberFormat('en-GM', { style: 'currency', currency: 'GMD' }).format( product.sale_price ) } 
                                 <sup style={{paddingLeft: '5px'}}><del>{ new Intl.NumberFormat().format(product.regular_price) }</del> 
                                <span> You Saved { new Intl.NumberFormat().format( Number(product.regular_price) - Number(product.sale_price)) }</span></sup></h3>
                                 <h3>
                                     <div className="item-qty">
                                        <i className="fa fa-minus" onClick={() => decrement(qty)}></i>
                                        <span className="qty">{ qty.qty }</span>
                                        <i className="fa fa-plus" onClick={() => increment(qty)}></i>
                                     </div>
                                 </h3>
                                    <h3><button  className="add-to-cart" onClick={
                                    () => {
                                        let updateProduct = {...product, qty: qty.qty};
                                        props.addToCart(updateProduct, props.cartItems)  
                                    } 
                                    } 
                                    disabled={addedToCart}>{ addedToCart? 'Added' : 'Add To Cart' }</button> 
                                 </h3>
                                <h3>
                                    <div className="icon-circle">
                                        <i className="fa fa-facebook"></i>
                                        <i className="fa fa-instagram"></i>
                                        <i className="fa fa-twitter"></i>
                                    </div>
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
    {product: state.products.item,
     cartItems : state.products.cart? state.products.cart : [] }
);

export default connect(mapStateToProps, { addToCart  })(ProductSingle);