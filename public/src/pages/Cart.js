import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Cart = () => {
    return (
        <div>
            <Helmet>
			 <title>Cart | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <h2>Shopping Cart</h2>
                </div>
            </div>

            <div className="cart">
                <div className="cart-container">
                <div className="row">
                    <div className="col-md-9">
                         <table className="table table-responsive">
                        <thead>
                        <tr>
                            <th width="50%">Item Details</th>
                            <th width="10%">Quantity</th>
                            <th width="30%">Item Price</th>
                            <th width="10%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                
                                <h6><img src={require('../media/images/b6.jpg')} alt="" style={{ width: "40px", height:"40px"}} /> <span>Bag</span></h6>
                            </td>
                            <td>
                        <h6 className="qty-cart"><b>2</b></h6>
                            </td>
                            <td>
                                <h5>D12,000</h5>
                                <sub>D12,000 x 1 Item</sub>
                            </td>
                            <td>
                                <h6 className="delete"><a href="#"><i className="fa fa-trash"></i></a></h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                                <h6><img src={require('../media/images/b6.jpg')} alt="" style={{width:"40px", height:"40px"}} /> <span>Bag</span></h6>
                            </td>
                            <td>
                            <h6 className="qty-cart"><b>2</b></h6>
                            </td>
                            <td>
                                <h5>D12,000</h5>
                                <sub>D12,000 x 1 Item</sub>
                            </td>
                            <td>
                                <h6 className="delete"> <a href="#"><i className="fa fa-trash"></i></a></h6>
                            </td>
                            </tr>
                            </tbody>
                                </table>
                        </div>
                        <div className="col-md-3">
                                <div className="cart-details">
                                    <ul>
                                        <li><h6>Order Summary</h6></li>
                                        <li><h6>1 Item</h6></li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li><sub>Subtotal</sub></li>
                                        <li><h6>D12,000</h6></li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li><h6>Total</h6></li>
                                        <li><h6>D12,000</h6></li>
                                    </ul>
                                    <hr />
                                    <Link to="/checkout">Checkout</Link>
                                    <hr />
                                    <sub>We Accept : <i className="fa fa-cc-visa"></i> <i className="fa fa-cc-mastercard"></i> <i className="fa fa-cc-paypal"></i></sub>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    </div>
    )
}

export default Cart;
