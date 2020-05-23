import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { addToCart, getProductByID } from '../../actions/productActions';
import { inCart, isJson } from '../utils/utils';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import { FaShoppingCart } from 'react-icons/fa';

const ProductSingle = (props) => {

    const [qty, setQty] = useState({qty: 1});
    const [upsell, setUpsell] = useState([]);

    const product = props.product[0];
    const addedToCart = inCart(product, props.cartItems);

    const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
    }

    const paramsSimilarItems = {
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1
			},
			340: {
				slidesPerView: 1,
				slidesPerGroup: 1
			},
			500 : {
				slidesPerView: 2,
				slidesPerGroup: 2
            },
			640: {
			  slidesPerView: 2,
			  slidesPerGroup: 2
			},
			768: {
			  slidesPerView: 4,
			  spaceBetween: 40,
			},
			1024: {
			  slidesPerView: 5,
			  spaceBetween: 50,
			}
		}
	  }

    const getUpsell = async () => {
        let url = '';
        let categoryID = product.category_id;
        let productSlug = product.slug;
        if(process.env.NODE_ENV === 'development') {
             url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/upsell/' + categoryID + '/' + productSlug;
        } else {
             url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/upsell/' + categoryID + '/' + productSlug;
        }
        let response = await fetch(url);
        let data = await response.json();
        if(data) {
            setUpsell([...upsell, ...data]);
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
            return
        }
        setQty({...qty, qty: currentQty - 1 });
    }

    useEffect(() => {
        getUpsell();
    }, [])
    
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
                                    disabled={addedToCart}>{ addedToCart? 'Added' : <FaShoppingCart /> }</button> 
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

                <div className="similar-items">
                    <h4>Similar Items You Might Like</h4>
                    <div className="similar-products">
                    { upsell.length > 1? (
                                <>
                                <Swiper {...paramsSimilarItems} key={upsell.length}>
                                { upsell.map((value, index) => {
                                    return (
                                    <div className="swiper-slide" key={index}>
                                        <div className="product similar-item">
                                            <div className="product-img">
                                             <a href={ value.slug } onClick={ () => props.getProductByID(upsell, value.id) } >
                                                 <img src={JSON.parse(value.url)[0]} style={{maxWidth: '100%', maxHeight: '100%'}} /> 
                                            </a>
                                            </div>
                                            <div className="product-description">
                                                <h6><a href={ value.slug }
                                                onClick={ () => { props.getProductByID(upsell, value.id) } }>{ value.name }</a></h6>
                                                <p><span className="price">D{ new Intl.NumberFormat().format(value.sale_price)}</span> <span className="original-price">D{ new Intl.NumberFormat().format(value.regular_price) }</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    )	 
                                })}
                                </Swiper>
                                </>
                            ) : (
                                // <>
                                // <Swiper {...paramsSimilarItems}>
                                //         <div className="loading-item"></div>
                                //         <div className="loading-item"></div>
                                //         <div className="loading-item"></div>
                                //         <div className="loading-item"></div>
                                //         <div className="loading-item"></div>
                                // </Swiper>
                                // </>
                                'Loading'
                            )}
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

export default connect(mapStateToProps, { addToCart, getProductByID  })(ProductSingle);