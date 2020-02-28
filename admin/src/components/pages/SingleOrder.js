import React from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';

const SingleOrder = () => {
    return (
        <div>
            <Helmet>
                <title>Order Summary | eBaaba Dashboard</title>
            </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Order Information</h2>
                </div>
            </div>
            <div className="single-order">
                <div className="single-order-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8 right">
                            <h2>Order Summary</h2>
                            <div className="customer-summary">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5>Vendor</h5>
                                                <h6>eBaaba</h6>
                                            </div>
                                            <div className="col-md-2">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5>Date</h5>
                                                <h6>27/02/2020</h6>
                                            </div>
                                            <div className="col-md-2">
                                                <i className="fa fa-calender"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h5>Customer</h5>
                                                <h6>Samba Sallah</h6>
                                            </div>
                                            <div className="col-md-2">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="table-reponsive order-summary">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '40%'}}>Product</th>
                                            <th style={{ width: '10%'}}>Cost</th>
                                            <th style={{ width: '10%'}}>Qty</th>
                                            <th style={{ width: '10%'}}>Sub Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Lenovo I10 Express</td>
                                            <td>D12,000.00</td>
                                            <td>2</td>
                                            <td>D24,000.00</td>
                                        </tr>
                                        <tr>
                                            <td>Lenovo I10 Express</td>
                                            <td>D12,000.00</td>
                                            <td>2</td>
                                            <td>D24,000.00</td>
                                        </tr>
                                    </tbody>
                                   
                                </table>
                                <div className="row">
                                    <div className="col-md-7"></div>
                                    <div className="col-md-5 total-summary">
                                        <h6>Sub Total : D48,000.00</h6>
                                        <h6>Discount : D10,0000.00</h6>
                                        <h5>Grand Total : 38,000.00</h5>
                                    </div>
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
