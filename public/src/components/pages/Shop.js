import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { limitTitle }  from '../helpers/Helpers';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts, getProductByID, addToCart } from '../../actions/productActions';
import { inCart } from '../utils/utils';

const Product = ({ product, index, products, getProductByID, addToCart, cartItems, page }) => {

    const addedToCart = inCart(product, cartItems);

    return (
        <div className="col-md-3">
        <div className="product">
            <div className="product-img" style={{textAlign: 'center'}}>
                 <img src={ JSON.parse(product.url)[0] } style={{ maxWidth : "100%", maxHeight : "100%"}} />
            </div>
            <div>
                    <div className="product-description">
                        <Link to={ page ?'../' + product.slug : product.slug } onClick={ () => { getProductByID(products, product.id) } }>
                            <h3 className="title">{ limitTitle(product.name) }</h3>
                            <hr className="below-title"></hr>
                            <span className="price"><span style={{ fontSize: '15px', fontWeight: 'lighter' }}>D</span> { new Intl.NumberFormat().format(product.sale_price) } </span> <sup className="orignal-price"><del> { new Intl.NumberFormat().format(product.regular_price) } </del></sup>
                        </Link>
                        <hr className="below-price"></hr>
                        <button className="add-to-cart" onClick={() => {
                          let updatedProduct = {...product, qty: 1};
                          addToCart(updatedProduct,cartItems)
                        }
                        } disabled={addedToCart}>
                                { addedToCart ? 'Added' : 'Add To Cart' }</button>
                    </div>
                
            </div>
        </div>
    </div>
    );
}


const Shop = (props) => {

    let page_no = props.match.params.page? props.match.params.page : 1;

    const [page, setPage] = useState({page: page_no});

    const next = (event) => {
        let currentPage = Number(page.page) + 1;
        setPage({page: currentPage});
     }
 
     
     const prev = () => {
         let currentPage = Number(page.page) - 1;
         if(currentPage === 0 ) {
             setPage({page: 1});
         } else {
             setPage({page: currentPage});
         }
     }

    useEffect(() => {
        props.getProducts(page.page);
    },[]);

    return (
       <>   
        { props.products !== undefined && page.page <= props.last_page? (
             <div>
             <Helmet>
                  <title>Shop | eBaaba No. 1 Online Shopping Website in Gambia</title>
             </Helmet>
             <div className="breadcrumb">
                 <div className="breadcrumb-container">
                     <h2>Shop</h2>
                 </div>
             </div>
             <div className="shop">
                 <div className="shop-container">
                     <div className="row">
                         <div className="col-md-3 shop-left">
                             <ul>
                                 <li className="filter-title">Price</li>
                                 <li><a type="button" data-toggle="collapse" data-target="#price"><i className="fa fa-plus"></i></a></li>
                             </ul>
                             <div id="price" className="collapse">
                                     <form>
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch1" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch1">Under GMD2,000</label>
                                         </div>
                                         
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch2" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch2">GMD2,000 - GMD5,000</label>
                                         </div>
                                     
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch3" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch3">GMD5,000 - GMD10,000</label>
                                         </div>
                                     
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch4" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch4">GMD10,000 - GMD20,000</label>
                                         </div>
                                       
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch5" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch5">GMD20,000 - GMD40,000</label>
                                         </div>
                                        
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch6" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch6">Above GMD40,000</label>
                                         </div>
                                     </form>
                                 </div>
                                 <hr></hr>
                             <ul>
                                 <li className="filter-title">Categories</li>
                                 <li><a type="button" data-toggle="collapse" data-target="#categories"><i className="fa fa-plus"></i></a></li>
                             </ul>
                             <div id="categories" className="collapse">
                                 <ul>
                                     <li>Fashion</li>
                                     <li>Groceries</li>
                                     <li>Mobile Phones</li>
                                     <li>Electronics</li>
                                     <li>Home & Kitchen</li>
                                     <li>Baby, Toys & Kids</li>
                                 </ul>
                             </div>
                         </div>
                         <div className="col-md-9">
                            <div className="row shop-items">
                                 {  props.products.map((product, index) => (
                                      <Product key={index} index={index} 
                                 product={product} products={props.products}
                                 getProductByID={ props.getProductByID }
                                 addToCart={props.addToCart} cartItems={ props.cartItems }
                                 page={page.page}
                                 /> )) }
                            </div>
 
                             {/* <div className="pagination">
                                 <ul>
                                     <li><span>Previous</span></li>
                                     <li><span>1</span></li>
                                     <li><span>2</span></li>
                                     <li><span>3</span></li>
                                     <li>...</li>
                                     <li><span>10</span></li>
                                     <li><span>Next</span></li>
                                 </ul>
                             </div> */}
                             { console.log(props.last_page)}
                            { Number(props.last_page) <= 0? "" : ""}
                            { Number(props.last_page) >= 2  && Number(props.last_page) < 3? (
                                <>
                                    <nav aria-label="Products Navigation">
                                  <ul class="pagination justify-content-center">
                                  <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href={ "/shop/" + Number(page.page) } onClick={ prev }>Previous</a>
                                </li>
                                    <li class="page-item"><a class="page-link" href="/shop/1">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/2">2</a></li>
                                    <li class= { "page-item " +  (Number(page.page) === Number(props.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/shop/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>
                                 </ul>
                                 </nav>
                                </>
                            ) : ("")}

                            { Number(props.last_page) >= 3  && Number(props.last_page)  < 4 ? (
                                <>
                                <nav aria-label="Products Navigation">
                                  <ul class="pagination justify-content-center">
                                  <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href={ "/shop/" + Number(page.page) } onClick={ prev }>Previous</a>
                                </li>
                                    <li class="page-item"><a class="page-link" href="/shop/1">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/2">2</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/2">3</a></li>
                                    <li class= { "page-item " +  (Number(page.page) === Number(props.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/shop/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>
                                </ul>
                                </nav>
                                </>
                            ) : ("")}

                            { Number(props.last_page) > 3 && Number(props.last_page) <= 4 ? (
                                <>
                                    <li class="page-item"><a class="page-link" href="/shop/1">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/2">2</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/2">3</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/2">4</a></li>
                                </>
                            ) : ("")}

                            { Number(props.last_page) > 4? 
                            (
                            <nav aria-label="Products Navigation">
                            <ul class="pagination justify-content-center">
                                <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href={ "/shop/" + Number(page.page) } onClick={ prev }>Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="/store">1</a></li>
                                { Number(page.page) < 4? (
                                    <>
                                    <li class="page-item"><a class="page-link" href="/shop/2">2</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/3">3</a></li>
                                    <li class="page-item"><a class="page-link" href="/shop/4">4</a></li>
                                    </>
                                ) : (
                                    <>
                                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" 
                                    href={ "/shop/" + ( Number(props.last_page) - Number(page.page) <= 3 ? 
                                    Number(props.last_page) - 2 : Number(page.page) ) }>{ Number(props.last_page) - Number(page.page) <= 3 ? Number(props.last_page) - 2 : Number(page.page)}</a></li>
                                    <li class="page-item"><a class="page-link" 
                                    href={ "/shop/" + ( Number(props.last_page) - Number(page.page) -1 <= 2 ? 
                                    Number(props.last_page) - 1 : Number(page.page) + 1 ) }>{ Number(props.last_page) - Number(page.page) -1 <= 2 ? Number(props.last_page) - 1 : Number(page.page) + 1}</a></li>
                                    <li class="page-item"><a class="page-link" 
                                    href={ "/shop/" + ( (Number(page.page) + 4) >= Number(props.last_page) ? 
                                    Number(props.last_page) : Number(page.page) + 2)}>
                                        { Number(page.page) + 4 > Number(props.last_page) ? Number(props.last_page)  : Number(page.page) + 2 }</a></li>
                                    </> 
                                ) } 
                                
                                { props.last_page > 4 && (Number(props.last_page) - Number(page.page)) > 4 ? 
                                   (    
                                    <li class="page-item"><a class="page-link" href="#">...</a></li> 
                                   ) 
                                 : 
                                ("")}
                                { (Number(props.last_page) - Number(page.page)) > 3? (
                                      <li class="page-item"><a class="page-link" href={ "/shop/" + Number(props.last_page) }> { props.last_page }</a></li>
                                ) : ("")}
                                <li class= { "page-item " +  (Number(page.page) === Number(props.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/shop/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>
                            </ul>
                            
                        </nav>
                         ): ""}
                         </div>
                     </div>
                 </div>
             </div>
 
         </div>
        ) : (
            <div>
             <Helmet>
                  <title>Shop | eBaaba No. 1 Online Shopping Website in Gambia</title>
             </Helmet>
             <div className="breadcrumb">
                 <div className="breadcrumb-container">
                     <h2>Shop</h2>
                 </div>
             </div>
             <div className="shop">
                 <div className="shop-container">
                     <div className="row">
                         <div className="col-md-3 shop-left">
                             <ul>
                                 <li className="filter-title">Price</li>
                                 <li><a type="button" data-toggle="collapse" data-target="#price"><i className="fa fa-plus"></i></a></li>
                             </ul>
                             <div id="price" className="collapse">
                                     <form>
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch1" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch1">Under GMD2,000</label>
                                         </div>
                                         
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch2" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch2">GMD2,000 - GMD5,000</label>
                                         </div>
                                     
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch3" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch3">GMD5,000 - GMD10,000</label>
                                         </div>
                                     
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch4" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch4">GMD10,000 - GMD20,000</label>
                                         </div>
                                       
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch5" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch5">GMD20,000 - GMD40,000</label>
                                         </div>
                                        
                                         <div className="custom-control custom-radio">
                                             <input type="radio" className="custom-control-input" id="customSwitch6" name="radio-btn" />
                                             <label className="custom-control-label" htmlFor="customSwitch6">Above GMD40,000</label>
                                         </div>
                                     </form>
                                 </div>
                                 <hr></hr>
                             <ul>
                                 <li className="filter-title">Categories</li>
                                 <li><a type="button" data-toggle="collapse" data-target="#categories"><i className="fa fa-plus"></i></a></li>
                             </ul>
                             <div id="categories" className="collapse">
                                 <ul>
                                     <li>Fashion</li>
                                     <li>Groceries</li>
                                     <li>Mobile Phones</li>
                                     <li>Electronics</li>
                                     <li>Home & Kitchen</li>
                                     <li>Baby, Toys & Kids</li>
                                 </ul>
                             </div>
                         </div>
                        <div className="col-md-9 right-loading">
                            <div className="loading-giff">
                                 <i class="fa fa-spinner fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}
       </>
    )
}


const mapStateToProps = state => (
    {products: state.products.items.products,
     current_page: state.products.items.current_page,
     last_page: state.products.items.last_page,
     cartItems : state.products.cart? state.products.cart : [] }
);

export default connect(mapStateToProps, { getProducts, getProductByID, addToCart })(Shop);
