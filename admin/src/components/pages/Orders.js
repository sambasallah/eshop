import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const OrderItem = ({ items }) => {

    const status = {
    padding: '5px 20px', 
    backgroundColor: '#ed017f', 
    borderRadius: '5px', 
    color: '#fff'}
    
    return(
       <>
         { items.length === 0? (
             <h6>Loading</h6>
         ) : (
            <>
             { items.map((value) => {
                 return(
                     <>
                      { value.total !== undefined? (
                          <tr>
                          <td><Link to= { "/order/" + value.order_number }>{ value.order_number }</Link></td>
                          <td>{ value.created_at }</td>
                          <td>{ value.full_name }</td>
                          <td>{ new Intl.NumberFormat().format(value.total) } </td>
                          <td>{  new Intl.NumberFormat().format(Number(value.total) * 10/100) }</td>
                          <td><span style={status}>Pending</span></td>
                         </tr>
                      ) : ""}
                     </>
                 )
             })} 
            </>
         )}
       </>
    )
}

const Orders = () => {
    
    const [orders, setOrders] = useState([]);

    const orderAnalytics = {
        marginBottom: '15px'
    };
    

    const getAllOrders = async () => {
        let url = 'http://localhost:8000/api/v1/orders';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
           let orderItems = [];
           data.map((value) => {
                orders.push(value);
           });

           setOrders([...orders,orderItems]);
           console.log(orders);
        } else {
            console.log(data);
        }



    }

    useEffect(() => {
        getAllOrders();
    },[])

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
                            {/* <div className="col-md-6" align="right">
                                <Link to="/create-order" style={ createOrder }>Create</Link>
                            </div> */}
                        </div>
                        
                        <div style={ orderAnalytics }>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="order-info">
                                        <h3>100</h3>
                                        <h6>All Orders</h6>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <div className="order-info">
                                         <h3>10</h3>
                                        <h6>Orders Today</h6>
                                </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="order-info">
                                        <h3>5</h3>
                                        <h6>Pending Orders</h6>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="order-info">
                                        <h3>95</h3>
                                        <h6>Completed</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="orders-list">
                            <table className="table table-responsive">
                                 <thead className="thead-light">
                                    <tr>
                                        <th width="10%">Order ID</th>
                                        <th width="20%">Created</th>
                                        <th width="15%">Customer</th>
                                        <th width="10%">Total</th>
                                        <th width="8%">Profit</th>
                                        <th width="5%">Status</th>
                                    </tr>   
                                 </thead> 
                                 <tbody>
                                    <OrderItem items={ orders? orders : [] } />
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
