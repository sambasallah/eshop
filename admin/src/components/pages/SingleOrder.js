import React from 'react'
import SideNav from '../inc/SideNav';

const SingleOrder = () => {
    return (
        <div>
            <div className="single-order">
                <div className="single-order-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8">
                            <h2>Order Info</h2>
                            <div className="customer-summary">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h3>Vendor</h3>
                                                 <h6>eBaaba</h6>
                                            </div>
                                            <div className="col-md-2">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">2</div>
                                    <div className="col-md-3">3</div>
                                    <div className="col-md-3">4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder;
