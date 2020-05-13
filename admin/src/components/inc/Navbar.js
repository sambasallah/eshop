import React, { useState, useEffect } from 'react';
import { FaGift, FaSignOutAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { logout } from '../../actions/AdminActions';
import { Redirect } from 'react-router-dom';

const Navbar = (props) => {

    const [notification, setNotification] = useState({orderNumber: 0});

    const logout = () => {
        props.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
        localStorage.removeItem('name');
    }

    const getNumberOfOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/pending-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/pending-orders?token=' + props.token;
        }  
        let response = await fetch(url);
        let data = await response.json();

        if(data.Pending) {
            setNotification({...notification, orderNumber: data.Pending});
        }
    }

    useEffect(() => {
        getNumberOfOrders();
    },[]);

    if(!props.token) return <Redirect to='/login'></Redirect>

    return (
        <div>
            <div className="main-nav">
            <nav className="navbar navbar-expand-md navbar-bg-color fixed-hrefp justify-content-left">
                <div className="container">

                <a className="navbar-brand" href="/">eBaaba</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span>
                    <i className="fa fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell"></i>
                             { notification.orderNumber > 0? (
                                <span className='badge badge-warning' id='notification'> { notification.orderNumber }</span>
                             ) : (
                                 ''
                             )}
                            
                        </a>
                        <div className="dropdown-menu">
                            <a href="/orders" className="dropdown-item"><FaGift /> { notification.orderNumber >= 1? notification.orderNumber + ' new '+ (notification.orderNumber > 1? ' orders' : ' order') : ' No Order' }</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="/login" onClick={ logout }><FaSignOutAlt style={{fontSize: '20px'}}/></a>
                    </li>
                    </ul>
                </div> 
                </div>
            </nav>	
	    </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token
});

export default connect(mapStateToProps, { logout })(Navbar);
