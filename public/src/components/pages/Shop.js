import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Product = ({ product, index }) => {
    
const limitedTitle = (str) => {
    let newTitle = '';
    if(str.length < 18) {
        return str;
    } 
    for(let i = 0; i < 18; i++) {
        newTitle += str.charAt(i);
    }
    return newTitle.trim() + "..";
}

    return (
        <div className="col-md-3">
        <div className="product">
            <div className="product-img">
                 <img src={require('../../media/images/b5.jpg')} style={{ width : "100%", height : "100%"}} />
            </div>
            <div className="product-description">
                <h3 className="title">{ limitedTitle(product.name) }</h3>
                <hr className="below-title"></hr>
                <span className="price"><span className="currency-symbol">GMD</span> { product.regular_price } </span> <sup className="orignal-price"><del> { product.discount_price } </del></sup>
                <hr className="below-price"></hr>
                <Link to="/cart" className="add-to-cart">Add to Cart</Link>
            </div>
        </div>
    </div>
    );
}

const Shop = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const url = "http://localhost:8000/api/v1/products";
    
         await fetch(url)
         .then((resp) => resp.json() )
         .then((data) => {
             setProducts(data.products);
         })
         .catch((error) => {
             console.log("An error");            
         })       
       }

    useEffect(() => {
        getProducts();
    }, []);

    return (
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
                            <div id="price" className="collapse show">
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
                                { products.map((product, index) => ( <Product key={index} index={index} product={product} /> )) }
                           </div>

                            <div className="pagination">
                                <ul>
                                    <li><span>Previous</span></li>
                                    <li><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                    <li>...</li>
                                    <li><span>10</span></li>
                                    <li><span>Next</span></li>
                                </ul>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop;
