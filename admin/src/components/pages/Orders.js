import React, { useState } from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars } from 'react-sparklines';

const Orders = () => {    

    const createOrder = {
        padding: '10px 30px', 
        backgroundColor: '#33b27b',
        fontSize: '16px',
        color: '#fff',
        borderRadius: '5px',
        fontWeight: 'bold'
    };


    const orderAnalytics = {
        marginBottom: '15px'
    };
   

    return (
        <div>
            <Helmet>
                <title>Orders | eBaaba Dashboard</title>
            </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Orders</h2>
                </div>
            </div>
            <div className="orders">
                <div className="orders-inner">
                <div className="row">
                    <div className="col-md-4 left">
                        <SideNav />
                    </div>
                    <div className="col-md-8 right">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Orders list</h2>
                            </div>
                            <div className="col-md-6" align="right">
                                <Link to="/create-order" style={ createOrder }>Create</Link>
                            </div>
                        </div>
                        
                        <div style={ orderAnalytics }>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="order-info">
                                        <div className="row">
                                            <div className="col-md-5">  
                                                <Sparklines data={[0,0,0,1024]} width={100} height={80}>
                                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                                                    <SparklinesSpots size={4}
                                                        style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
                                                </Sparklines>
                                            </div>   
                                            <div className="col-md-7 right" >
                                                <h5 style={{fontSize: '9px'}}>Active Orders</h5>
                                                <h6>1 046</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <div className="order-info">
                                <div className="row">
                                            <div className="col-md-5">  
                                                <Sparklines data={[0,0,0,80]} width={100} height={80}>
                                                    <SparklinesBars color="blue" />
                                                </Sparklines>
                                            </div>   
                                            <div className="col-md-7 right" >
                                                <h5 style={{fontSize: '9px'}}>Pending Recei...</h5>
                                                <h6>300</h6>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="order-info">
                                    <div className="row">
                                            <div className="col-md-5">  
                                                <Sparklines data={[0,0,0,30]} width={100} height={80}>
                                                    <SparklinesLine color="black" />
                                                </Sparklines>
                                            </div>   
                                            <div className="col-md-7 right" >
                                                <h5 style={{fontSize: '9px'}}>Unfulfilled</h5>
                                                <h6>159</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="order-info">
                                    <div className="row">
                                            <div className="col-md-5">  
                                                <Sparklines data={[5, 10, 5, 20,15,40,80]} width={100} height={80}>
                                                    <SparklinesLine color="indigo" style={{ fill: 'none' }}/>
                                                    <SparklinesSpots />
                                                </Sparklines>
                                            </div>   
                                            <div className="col-md-7 right" >
                                                <h5 style={{fontSize: '9px'}}>Fulfilled</h5>
                                                <h6>35</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="orders-list">
                            <table className="table table-responsive">
                                 <thead className="thead-light">
                                    <tr>
                                        <th width="10%">Order ID</th>
                                        <th width="10%">Created</th>
                                        <th width="15%">Customer</th>
                                        <th width="10%">Total</th>
                                        <th width="10%">Profit</th>
                                        <th width="10%">Status</th>
                                    </tr>   
                                 </thead> 
                                 <tbody>
                                    <tr>
                                        <Link to="/order"><td>00213</td></Link>
                                        <td>April 1, 2020</td>
                                        <Link to="/order"><td>
                                            <img src="https://res.cloudinary.com/ebaaba/image/upload/v1585136586/profile-pictures/profile_t72pk0" style={{ maxWidth: '12%', maxHeight: '12%', borderRadius: '50%', marginRight: '8px'}} />
                                            Samba Sallah
                                        </td></Link>
                                        <td>D2,000</td>
                                        <td>D500</td>
                                        <td>
                                             <select style={{
                                             padding: '2px 4px',
                                             backgroundColor: '#33b27b',
                                             color: '#fff',
                                             fontWeight: '300',
                                             borderRadius: '5px'}}>
                                                <option for="Unpaid">Pending</option>
                                                <option for="Paid">Delivered</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>00213</td>
                                        <td>April 1, 2020</td>
                                        <td>
                                            <img src="https://res.cloudinary.com/ebaaba/image/upload/v1585136586/profile-pictures/profile_t72pk0" style={{ maxWidth: '12%', maxHeight: '12%', borderRadius: '50%', marginRight: '8px'}} />
                                            Samba Sallah
                                        </td>
                                        <td>D2,000
                                            <sup style={{ paddingLeft: '5px'}}><span
                                             style={{ padding: '0px 2px', backgroundColor: '#33b27b',
                                            borderRadius: '3px',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: '10px'
                                            }}
                                             >PAID</span></sup>
                                        </td>
                                        <td>D500</td>
                                        <td>
                                            <select style={{
                                             padding: '2px 4px',
                                             backgroundColor: '#33b27b',
                                             color: '#fff',
                                             fontWeight: '300',
                                             borderRadius: '5px'}}>
                                                <option for="Unpaid">Pending</option>
                                                <option for="Paid">Delivered</option>
                                            </select>
                                        </td>
                                    </tr>   
                                 </tbody>  
                            </table>
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
