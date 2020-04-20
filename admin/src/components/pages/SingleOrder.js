import React from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { FaClock, FaMapMarker, FaRegEnvelope  } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

const SingleOrder = () => {
    return (
        <div>
            <Helmet>
                <title>Order Summary | eBaaba Dashboard</title>
            </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Summary</h2>
                </div>
            </div>
            <div className="single-order">
                <div className="single-order-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8 right">
                            <ul>
                                <li><h4>Samba Sallah</h4></li>
                                <li><span className="order-amount-summary">D3,000</span></li>
                                <li><span className="order-id">29</span></li>
                            </ul>
                            <h6>#3842H <span><FaClock /> Updated on 12-10-2020</span></h6>
                            <h3>Overview</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="summary-info-box">
                                        <h6><FaMapMarker />  ADDRESS</h6>
                                        <p>Serigne Mass Jobe Avenue, Serrekunda, the Gambia</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="summary-info-box">
                                        <h6><MdPhoneIphone />  MOBILE</h6>
                                        <p>+2203911176</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="summary-info-box">
                                         <h6><FaRegEnvelope />  EMAIL</h6>
                                        <p>sambasallah10@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <h3>Account Summary</h3>
                            <div className="row">
                                <div className="col-md-4 account">
                                    <h6>ACCOUNT</h6>
                                    <ul>
                                        <li>
                                            <ul>
                                                <li>Number #</li>
                                                <li>35261H</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>Order Count</li>
                                                <li>3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>Order Amount</li>
                                                <li>D3,000</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li>Creation</li>
                                                <li>23-04-2020</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h6>SHIPPING</h6>
                                    <p>Serigne Mass Jobe Avenue, Serrekunda, the Gambia</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>ORDER NOTE</h6>
                                    <p>I will like it delivered on Monday</p>
                                </div>
                            </div>
                            <h3>ORDER</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width="80%">Iphone X</td>
                                        <td width="10%">1</td>
                                        <td width="10%">D30,000</td>
                                    </tr>
                                    <tr>
                                        <td width="80%">Spark 4</td>
                                        <td width="10%">1</td>
                                        <td width="10%">D5,500</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-md-8"></div>
                                <dic className="col-md-4" align="right">
                                    <a href="#" 
                                    style={{ padding: '5px 15px',
                                            backgroundColor: '#33b27b',
                                            color: '#fff',
                                            fontWeight: '300',
                                            borderRadius: '5px'}}
                                    >Completed</a>
                                </dic>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder;
