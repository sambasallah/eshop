import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

const Navbar = (props) => {
    return (
        <div className="main-nav">
            <nav className="navbar navbar-expand-md navbar-bg-color fixed-top justify-content-left">
                <div className="container">

                <a className="navbar-brand" href="/">eBaaba</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span>
                    <i className="fa fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="shop">shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">about</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">contact</a>
                    </li> 
                    <li className="nav-item">
                        <a href="/cart" className="nav-link">
                            <FaShoppingCart style={{ color: '#33b27b', fontSize: '20px'}}/>
                            { props.itemInCart? (<span className='badge badge-warning' id='lblCartCount'> { props.itemInCart } </span>) : '' } 
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a href="auth" className="nav-link" ><FaSignInAlt style={{color: '#000', fontSize: '20px'}} /></a>
                    </li> */}
                    </ul>
                </div> 
                </div>
            </nav>	
	</div>
    )
}

const mapStateToProp = (state) => (
    {itemInCart: state.products.cart.length }
)

export default connect(mapStateToProp)(Navbar);

