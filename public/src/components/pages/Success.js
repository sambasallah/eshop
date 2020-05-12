import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

const Success = (props) => {
    
    const removeOrderID = () => {
        localStorage.removeItem('orderID');
    }
    
    return (
        <div>
            <Helmet>
			 <title>Order Completed | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <h2>Order Completed</h2>
                </div>
            </div>

            <div className="success">
            <div className="success-container">
                <div className="success-info">
                    <h2>Thank You For Your Order</h2>
                    <h2><i className="fa fa-check-circle"></i></h2>
                    <h5>Your order is been processed</h5>
                    <h6 className="order-id">Your Order ID is { '#' + props.customerInfo.orderID } </h6>
                    <a className="continue-shopping" href="/shop" onClick={ removeOrderID }>Continue Shopping</a>
                </div>
            </div>
        </div>

        </div>
    )
}

const mapStateToProps = (state) => (
    {
        customerInfo: state.products.completedOrder,
        orderID: state.products.orderID
    }
)

export default connect(mapStateToProps)(Success);
