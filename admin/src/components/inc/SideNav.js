import React from 'react'

const SideNav = () => {
    return (
        <div>
        <div className="admin-profile">
            <div className="row">
                <div className="col-md-8">
                    <img src={require('../../media/profile.jpg')} style={{width:'60%', height: '60%', borderRadius : '50%', margin: '10px'}} />
                    <h6>Samba Sallah</h6>
                </div>
            </div>
        </div>
        <h5>General</h5>
            <ul>
                <li><i className="fa fa-tachometer"></i> Dashboard</li>
                <li><i className="fa fa-gift"></i> Orders</li>
                <li><i className="fa fa-shopping-basket"></i> Store</li>
                <li><i className="fa fa-line-chart"></i> Analytics</li>
                <li><i className="fa fa-cog"></i> Setting</li>
            </ul>
        </div>
    )
}

export default SideNav
