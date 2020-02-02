import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="main-nav">
            <nav className="navbar navbar-expand-md navbar-bg-color fixed-top justify-content-left">
                <div className="container">

                <Link className="navbar-brand" href="./">eBaaba</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span>
                    <i className="fa fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="./">home</Link>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="shop">shop</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">contact</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <i className="fa fa-shopping-cart" title="Cart"></i>
                            <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="auth" className="nav-link" ><i className="fa fa-sign-in" title="Login/Register"></i></Link>
                    </li>
                    </ul>
                </div> 
                </div>
            </nav>	
	</div>
    )
}

export default Navbar;

