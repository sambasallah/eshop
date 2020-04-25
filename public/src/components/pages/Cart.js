import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { deleteItemFromCart } from '../../actions/productActions';

const CartItem = ({ item, cartItems, deleteItem }) => {
     return(
        <tr>
            <td>
                <h6><img src={JSON.parse(item.url)[0]} alt="" style={{ maxWidth: "40px", maxHeight:"40px"}} /> <span>{ item.name }</span></h6>
            </td>
            <td>
            <h6 className="qty-cart"><b>{ item.qty }</b></h6>
            </td>
            <td>
            <h5>{ new Intl.NumberFormat().format(Number(item.sale_price) * Number(item.qty)  ) } </h5>
            <sub>{ item.sale_price } x { item.qty === 1? '1 item' : item.qty + ' items' }</sub>
            </td>
            <td>
                <h6 className="delete"><Link to="/cart" onClick={ () => deleteItem(item,cartItems)}><i className="fa fa-trash"></i></Link></h6>
            </td>
        </tr>
        
        );
}

const Cart = (props) => {

    let total  = 0;
    props.cartItems.map((value) => {
        total += Number(value.sale_price) * value.qty;
    });
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
    
                { props.cartItems.length === 0? 
                (
                    <>
                        <div className="cart-empty">
                            <div className="cart-empty-inner">
                                <div className="empty-cart-content">
                                    <img src={require('../../media/svg/empty-cart.svg')} style={{ maxWidth: '40%', maxHeight: '40%'}}/>
                                    <h4>Your Cart Is Empty</h4>
                                    <a href="/shop" className="continue-shopping">Continue Shopping</a>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
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
                                 {props.cartItems.map((value) => {
                                     return(
                                         <CartItem key={value.id} item= { value } cartItems={props.cartItems} deleteItem={props.deleteItemFromCart} />   
                                     )
                                 })}
                            </tbody>
                            </table>
                            </div>
                            <div className="col-md-3">
                                    <div className="cart-details">
                                        <ul>
                                            <li><h6>Order Summary</h6></li>
                                            <li><h6>{ 
                                                    props.itemInCart > 1? 
                                                    props.itemInCart + " items" : props.itemInCart + " item" }</h6></li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li><sub>Subtotal</sub></li>
                                            <li><h6>{ 'D' + new Intl.NumberFormat().format(total) }</h6></li>
                                        </ul>
                                        <hr />
                                        <ul>
                                            <li><h6>Total</h6></li>
                                            <li><h6>{ 'D' + new Intl.NumberFormat().format(total) }</h6></li>
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
                    </>
                )}      
        </div>
    
    );
}

const mapStateToProps = (state) => (
    { cartItems : state.products.cart ? state.products.cart : [],
    itemInCart: state.products.cart.length }
)

export default connect(mapStateToProps, { deleteItemFromCart })(Cart);
