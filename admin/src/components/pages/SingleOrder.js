import React, { useState, useEffect} from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { FaClock, FaMapMarker, FaRegEnvelope  } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import Orders from './Orders';

const SingleOrder = (props) => {

    let orderID = props.match.params.order_id ? props.match.params.order_id : 0;
    const [order, setOrder] = useState({
        products: []
    });
    const [loading, setLoading] = useState({loading: false});

    const getOrderInfo = async () => {
        setLoading({...loading,loading: true});
        let url = 'http://localhost:8000/api/v1/order/' + orderID;
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
          let oInfo = data[0];
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
            phoneNumber: oInfo.phone_number,
            townCity: oInfo.town_city });
          setLoading({...loading, loading: false});
          console.log(orderData);
        }
    }

    useEffect(() => {
        getOrderInfo();
    }, []);

    return (
       <>
         { orderID !== 0 && loading.loading === false? (
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
                                  <li><h4>{ order.fullName }</h4></li>
                                  <li><span className="order-amount-summary">{ new Intl.NumberFormat().format(order.total) }</span></li>
                                  <li><span className="order-id">{ order.id }</span></li>
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
                                                  <li>{ order.total }</li>
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
                                      <p>Serigne Mass Jobe Avenue, Serrekunda, the Gambia</p>
                                  </div>
                                  <div className="col-md-2">
                                      <h6>ORDER NOTE</h6>
                                      <p>I will like it delivered on Monday</p>
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
         ) : (
             <>
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

export default SingleOrder;
