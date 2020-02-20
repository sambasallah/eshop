import React from 'react'

const Navbar = () => {
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
                    <li className="nav-item">
                        <a className="nav-link" href="/">home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">about</a>
                    </li>
                    <li className="nav-item">
                        <a href="#"><i className="fa fa-bell"></i></a>
                    </li>
                    </ul>
                </div> 
                </div>
            </nav>	
	</div>
        </div>
    )
}

export default Navbar
