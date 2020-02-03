import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div>
            <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <h2>Order Completed</h2>
                </div>
            </div>

            <div className="success">
            <div className="success_container">
                <div className="success_info">
                    <h2>Thank You For Your Order</h2>
                    <h2><i className="fa fa-check-circle"></i></h2>
                    <h5>Your Payment is been processed</h5>
                    <h6 className="order_id">Your Order ID is #3421</h6>
                    <Link to="./">Continue Shopping</Link>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Success;
