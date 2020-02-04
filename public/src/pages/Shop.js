import React from 'react';
import { Helmet } from 'react-helmet';

const Shop = () => {
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
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customSwitch1" name="example1" />
                                            <label class="custom-control-label" for="customSwitch1">Under GMD2,000</label>
                                        </div>
                                        
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customSwitch2" name="example1" />
                                            <label class="custom-control-label" for="customSwitch2">GMD2,000 - GMD5,000</label>
                                        </div>
                                    
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customSwitch3" name="example1" />
                                            <label class="custom-control-label" for="customSwitch3">GMD5,000 - GMD10,000</label>
                                        </div>
                                    
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customSwitch4" name="example1" />
                                            <label class="custom-control-label" for="customSwitch4">GMD10,000 - GMD20,000</label>
                                        </div>
                                      
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customSwitch5" name="example5" />
                                            <label class="custom-control-label" for="customSwitch5">GMD20,000 - GMD40,000</label>
                                        </div>
                                       
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customSwitch6" name="example6" />
                                            <label class="custom-control-label" for="customSwitch6">Above GMD40,000</label>
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
                            <div className="row">
                                <div className="col-md-3">1</div>
                                <div className="col-md-3">2</div>
                                <div className="col-md-3">3</div>
                                <div className="col-md-3">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop;
