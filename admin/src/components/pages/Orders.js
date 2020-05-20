import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../inc/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const OrderItem = ({ items }) => {

    const statusProcessing = {
    padding: '5px 20px', 
    backgroundColor: '#ed017f', 
    borderRadius: '5px', 
    color: '#fff'}

    const statusCompeleted = {
        padding: '5px 20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '5px', 
        color: '#000'}
    
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
                          <td><span style={value.order_status === 'Completed'? 
                          statusCompeleted : statusProcessing}>{ value.order_status }</span></td>
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

const Orders = (props) => {

    let page_no = props.match.params.page? props.match.params.page : 1;
    
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState({page: page_no});
    const [pagination, setPagination] = useState({current_page: "", last_page: ""})
    const [totalOrders, setTotalOrders] = useState({total: 0});
    const [todayOrders, setTodayOrders] = useState({total: 0});
    const [pendingOrders, setPendingOrders] = useState({total: 0});
    const [completedOrders, setCompletedOrders] = useState({total: 0});

    const orderAnalytics = {
        marginBottom: '15px'
    };
    

    const getAllOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/orders?page='+ page.page + '&&token=' + props.token
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/orders?page='+ page.page + '&&token=' + props.token
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
           let orderItems = [];
           if(data.data) {
            data.data.map((value) => {
                orders.push(value);
           });
           setPagination({current_page: data.current_page, last_page: data.last_page, from: data.from});
           setOrders([...orders,orderItems]);
           }
        } else {
            console.log(data);
        }
    }

    const getTotalOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/total-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/total-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalOrders({...totalOrders, total: data.Total});
        }
    }

    const getTodayOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/today-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/today-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTodayOrders({...todayOrders, total: data.Today});
        }
    }

    const getPendingOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/pending-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/pending-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setPendingOrders({...pendingOrders, total: data.Pending});
        }
    }

    
    const getCompletedOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/completed-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/completed-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setCompletedOrders({...completedOrders, total: data.Completed});
        }
    }


    const next = () => {
        let currentPage = Number(page.page) + 1;
        setPage({page: currentPage});
     }
 
     
     const prev = () => {
         let currentPage = Number(page.page) - 1;
         if(currentPage === 0 ) {
             setPage({page: 1});
         } else {
             setPage({page: currentPage});
         }
     }

    useEffect(() => {
        getAllOrders();
        getTotalOrders();
        getTodayOrders();
        getPendingOrders();
        getCompletedOrders();
    },[])

    if(!props.token) return <Redirect to='/login'></Redirect>

    return (
        <div>
            <Navbar />
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
                                        <h3>{ totalOrders.total }</h3>
                                        <h6>All Orders</h6>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <div className="order-info">
                                         <h3>{ todayOrders.total }</h3>
                                        <h6>Orders Today</h6>
                                </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="order-info">
                                        <h3>{ pendingOrders.total }</h3>
                                        <h6>Pending Orders</h6>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="order-info">
                                        <h3>{ completedOrders.total }</h3>
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
                            { Number(pagination.last_page) <= 0? "" : ""}
                            { Number(pagination.last_page) >= 2  && Number(pagination.last_page) < 3? (
                                <>
                                    <nav aria-label="Products Navigation">
                                  <ul class="pagination justify-content-center">
                                  <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ prev }>Previous</a>
                                </li>
                                    <li class="page-item"><a class="page-link" href="/orders/1">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/orders/2">2</a></li>
                                    <li class= { "page-item " +  (Number(page.page) === Number(pagination.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>
                                 </ul>
                                 </nav>
                                </>
                            ) : ("")}
                             { Number(pagination.last_page) >= 3  && Number(pagination.last_page)  < 4 ? (
                                <>
                                <nav aria-label="Products Navigation">
                                  <ul class="pagination justify-content-center">
                                  <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ prev }>Previous</a>
                                </li>
                                    <li class="page-item"><a class="page-link" href="/orders/1">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/orders/2">2</a></li>
                                    <li class="page-item"><a class="page-link" href="/orders/3">3</a></li>
                                    <li class= { "page-item " +  (Number(page.page) === Number(pagination.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>
                                </ul>
                                </nav>
                                </>
                            ) : ("")}

                            { Number(pagination.last_page) > 3 && Number(pagination.last_page) <= 4 ? (
                                <>
                                    <nav aria-label="Products Navigation">
                                    <ul class="pagination justify-content-center">
                                    <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                        <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ prev }>Previous</a>
                                     </li>
                                        <li class="page-item"><a class="page-link" href="/orders/1">1</a></li>
                                        <li class="page-item"><a class="page-link" href="/orders/2">2</a></li>
                                        <li class="page-item"><a class="page-link" href="/orders/3">3</a></li>
                                        <li class="page-item"><a class="page-link" href="/orders/4">4</a></li>
                                        <li class= { "page-item " +  (Number(page.page) === Number(pagination.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>

                                    </ul>
                                    </nav>
                                </>
                            ) : ("")}

                            { Number(pagination.last_page) > 4? 
                            (
                            <nav aria-label="Products Navigation">
                            <ul class="pagination justify-content-center">
                                <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ prev }>Previous</a>
                                </li>
                                <li class="page-item"><a className="page-link" href="/orders">1</a></li>
                                { Number(page.page) < 4? (
                                    <>
                                    <li class="page-item"><a className="page-link" href="/orders/2">2</a></li>
                                    <li class="page-item"><a className="page-link" href="/orders/3">3</a></li>
                                    <li class="page-item"><a className="page-link" href="/orders/4">4</a></li>
                                    <li className="page-item"><a className="page-link">...</a></li>
                                    </>
                                ) : (
                                    <>
                                    <li class="page-item"><a class="page-link" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" 
                                    href={ "/orders/" + ( Number(pagination.last_page) - Number(page.page) <= 3 ? 
                                    Number(pagination.last_page) - 2 : Number(page.page) ) }>{ Number(pagination.last_page) - Number(page.page) <= 3 ? Number(pagination.last_page) - 2 : Number(page.page)}</a></li>
                                    <li class="page-item"><a class="page-link" 
                                    href={ "/orders/" + ( Number(pagination.last_page) - Number(page.page) -1 <= 2 ? 
                                    Number(pagination.last_page) - 1 : Number(page.page) + 1 ) }>{ Number(pagination.last_page) - Number(page.page) -1 <= 2 ? Number(pagination.last_page) - 1 : Number(page.page) + 1}</a></li>
                                    <li class="page-item"><a class="page-link" 
                                    href={ "/orders/" + ( (Number(page.page) + 4) >= Number(pagination.last_page) ? 
                                    Number(pagination.last_page) : Number(page.page) + 2)}>
                                        { Number(page.page) + 4 > Number(pagination.last_page) ? Number(pagination.last_page)  : Number(page.page) + 2 }</a></li>
                                    </> 
                                ) } 
                                
                                {/* { pagination.last_page > 4 && (Number(pagination.last_page) - Number(page.page)) > 4 ? 
                                   (    
                                    <li class="page-item"><a class="page-link" href="#">...</a></li> 
                                   ) 
                                 : 
                                ("")} */}
                                { (Number(pagination.last_page) - Number(page.page)) >= 3? (
                                      <li class="page-item"><a class="page-link" href={ "/orders/" + Number(pagination.last_page) }> { pagination.last_page }</a></li>
                                ) : ("")}
                                <li class= { "page-item " +  (Number(page.page) === Number(pagination.last_page)? "disabled" : "")}>
                                    <a class="page-link" href={ "/orders/" + Number(page.page) } onClick={ next }>Next</a>
                                </li>
                            </ul>
                            
                        </nav>
                         ): ""}
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token
    }
);

export default connect(mapStateToProps)(Orders);
