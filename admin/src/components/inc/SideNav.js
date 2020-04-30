import React from 'react'
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
        <div className="admin-profile">
            <div className="row">
                <div className="col-md-8">
                    <img src={require('../../media/profile.jpg')} style={{maxWidth:'70%', maxHeight: '70%', borderRadius : '50%', margin: '10px'}} />
                    <h6>Samba Sallah</h6>
                </div>
            </div>
        </div>
        <h5>General</h5>
            <ul>
                <li><i className="fa fa-tachometer"></i> <Link to="/" className="link">Dashboard</Link></li>
                <li><i className="fa fa-gift"></i> <Link to="/orders" className="link">Orders</Link></li>
                <li><i className="fa fa-shopping-basket"></i> <Link to="/store" className="link">Store</Link></li>
                <li><i className="fa fa-line-chart"></i> <Link to="/analytics" className="link">Analytics</Link></li>
                <li><i className="fa fa-cog"></i> <Link to="/settings" className="link">Settings</Link></li>
            </ul>
        </div>
    )
}

export default SideNav;
