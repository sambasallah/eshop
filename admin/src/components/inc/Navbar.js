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
                        <a className="nav-link" href="#">
                            <i className="fa fa-bell"></i>
                            <span className='badge badge-warning' id='notification'> 5 </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            <i className="fa fa-cog"></i>
                        </a>
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
