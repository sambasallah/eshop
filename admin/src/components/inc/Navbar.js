import React from 'react';
import { FaGift } from 'react-icons/fa';
import { connect } from 'react-redux';
import { logout } from '../../actions/AdminActions';
import { Redirect } from 'react-router-dom';

const Navbar = (props) => {

    const logout = () => {
        props.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');
    }

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
                            <span className='badge badge-warning' id='notification'> 5 </span>
                        </a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item"><FaGift /> 5 New Orders</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  href="/login" onClick={ logout }>Logout</a>
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
