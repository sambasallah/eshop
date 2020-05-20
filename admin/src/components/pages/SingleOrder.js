import React, { useState, useEffect} from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { FaClock, FaMapMarker, FaRegEnvelope } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { toast } from 'react-toastify';
import Navbar from '../inc/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SingleOrder = (props) => {

    let orderID = props.match.params.order_id ? props.match.params.order_id : 0;
    const [order, setOrder] = useState({
        products: []
    });
    const [loading, setLoading] = useState({loading: false});

    const pendingOrder = { padding: '5px 15px',
    backgroundColor: '#33b27b',
    color: '#fff',
    fontWeight: '300',
    borderRadius: '5px',
    border: 'none'}

    const orderCompletd = {
        padding: '5px 15px',
        backgroundColor: '#f5f5f5',
        color: '#000',
        fontWeight: '300',
        borderRadius: '5px',
        border: 'none'
    }

    const getOrderInfo = async () => {
        setLoading({...loading,loading: true});
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/order/' + orderID + '?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/order/' + orderID + '?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
          let oInfo = data[0];
          if(oInfo) {
            let orderData = JSON.parse(oInfo.products);
            setOrder({...order, id: oInfo.id, 
              orderNumber: oInfo.order_number,
              fullName: oInfo.full_name,
              products: orderData,
              total: oInfo.total,
              updatedAt: oInfo.updated_at,
              createdAt: oInfo.created_at,
              country: oInfo.country,
              address: oInfo.address,
              email: oInfo.email,
              orderNote: oInfo.order_note,
              shippingAddress: oInfo.shipping_address,
              orderStatus: oInfo.order_status,
              phoneNumber: oInfo.phone_number,
              townCity: oInfo.town_city });
            setLoading({...loading, loading: false});
          }
        }
    }

    const orderCompleted = () =>  toast.success("Order Completed", {
        position: toast.POSITION.TOP_LEFT
    });

    const orderDeleted = () =>  toast.success("Order Deleted", {
        position: toast.POSITION.TOP_LEFT
    });

    const errorDeletingOrder = () =>  toast.error("An Error Occured!", {
        position: toast.POSITION.TOP_LEFT
    });

    const completeOrder = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/complete-order?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/complete-order?token=' + props.token;
        }
        let response = await fetch(url, {method: 'PUT', headers : {'Content-Type': 'application/json'},
         body: JSON.stringify({'order_number': order.orderNumber})});
        let data = await response.json();

        if(data) {
            orderCompleted();
            props.history.push('/orders');
        } else {
            console.log(data);
        }
    }

    const deleteOrder = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/delete-order?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/delete-order?token=' + props.token;
        }

        let response = await fetch(url, {method: 'DELETE',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({orderID: orderID})
                                });
        let data = await response.json();

        if(data.OrderDeleted === true) {
            orderDeleted();
            props.history.push('/orders');
        } else {
            errorDeletingOrder();
            props.history.push('/orders');
        }
    }
   

    useEffect(() => {
        getOrderInfo();
    }, []);

    if(!props.token) return <Redirect to='/login'></Redirect>

    return (
       <>
         { orderID !== 0 && loading.loading === false? (
              <div>
                <Navbar />
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
                                  <li><h4>{ order.fullName }</h4></li>
                                  <li><span className="order-amount-summary">{ new Intl.NumberFormat('en-GM', { style: 'currency', currency: 'GMD' }).format(order.total) }</span></li>
                                  <li><span className="order-id">{ order.id }</span></li>
                                  <li><i className="fa fa-trash" 
                                  style={{fontSize: '20px', 
                                  color: 'red',
                                  paddingLeft: '5px',
                                  cursor: 'pointer'}} onClick={ deleteOrder }></i></li>
                              </ul>
                              <h6>{ '#' + order.orderNumber } <span><FaClock /> Updated on { order.updatedAt } </span></h6>
                              <h3>Overview</h3>
                              <div className="row">
                                  <div className="col-md-4">
                                      <div className="summary-info-box">
                                          <h6><FaMapMarker />  ADDRESS</h6>
                                          <p>{ order.address }</p>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="summary-info-box">
                                          <h6><MdPhoneIphone />  MOBILE</h6>
                                          <p>{ order.phoneNumber }</p>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="summary-info-box">
                                           <h6><FaRegEnvelope />  EMAIL</h6>
                                          <p>{ order.email }</p>
                                      </div>
                                  </div>
                              </div>
                              <h3>Account Summary</h3>
                              <div className="row">
                                  <div className="col-md-6 account">
                                      <h6>ORDER</h6>
                                      <ul>
                                          <li>
                                              <ul>
                                                  <li>Number #</li>
                                                  <li>{ order.orderNumber }</li>
                                              </ul>
                                          </li>
                                          <li>
                                              <ul>
                                                  <li>Order Amount</li>
                                                  <li>{ new Intl.NumberFormat('en-GM', { style: 'currency', currency: 'GMD' }).format(order.total) }</li>
                                              </ul>
                                          </li>
                                          <li>
                                              <ul>
                                                  <li>Creation</li>
                                                  <li>{ order.createdAt }</li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="col-md-3">
                                      <h6>SHIPPING</h6>
                                      <p>{ order.shippingAddress }</p>
                                  </div>
                                  <div className="col-md-2">
                                      <h6>ORDER NOTE</h6>
                                      <p>{ order.orderNote }</p>
                                  </div>
                              </div>
                              <h3>Items</h3>
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th>Img</th>
                                          <th>Product</th>
                                          <th>Quantity</th>
                                          <th>Amount</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                        { order.products.map((value) => {
                                            return(
                                                <>
                                                <tr>
                                                    <td width="10%"><img src={value.img} style={{maxWidth: '40%', maxHeight: '40%'}} /></td>
                                                    <td width="60%">{ value.productName }</td>
                                                    <td width="10%">{ value.qty }</td>
                                                    <td width="15%">{ new Intl.NumberFormat().format(Number(value.salePrice)  * Number(value.qty)) }</td>
                                                </tr>
                                                </>
                                            )
                                        })}
                                  </tbody>
                              </table>
                              <div className="row">
                                  <div className="col-md-8"></div>
                                  <dic className="col-md-4" align="right">
                                      <button href="#" disabled={order.orderStatus === 'Completed'? 'disabled' : ''} 
                                      onClick={ completeOrder } 
                                      style={ order.orderStatus === 'Completed'? 
                                      orderCompletd : pendingOrder}
                                    >Completed</button>
                                  </dic>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         ) : (
             <>
                 <div>
               <Navbar />
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
                          <div className="col-md-8">
                              <h1>Loading</h1>
                          </div>
                      </div>
                    </div>
                </div>
                </div>
             </>
         )}
       </>
    )
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token
    }
);


export default connect(mapStateToProps)(SingleOrder);
