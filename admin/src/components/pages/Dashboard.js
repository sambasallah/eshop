import React from 'react'

const Dashboard = () => {
    return (
        <div className="">
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Dashboard</h2>
                </div>
            </div>

            <div className="dashboard">
                <div className="dashboard-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <div className="menu">
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
                                    <li><i className="fa fa-tachometer"></i> Analytics</li>
                                    <li><i className="fa fa-cog"></i> Setting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="custom-card first">
                                        <div className="custom-card-inner">
                                        <div className="row">
                                                <div className="col-md-10">
                                                    <h2>Sales</h2>
                                                    <h3>D8,500.<span className="decimal-point">00</span></h3>
                                                    <h6>D4000 This Week.</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    <i className="fa fa-money"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="custom-card second">
                                        <div className="custom-card-inner">
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <h2>Orders</h2>
                                                    <h3>8500</h3>
                                                    <h6>300 New Orders</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    <i className="fa fa-gift"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="custom-card third">
                                        <div className="custom-card-inner">
                                        <div className="row">
                                                <div className="col-md-10">
                                                    <h2>Profit</h2>
                                                    <h3>D8,500.<span className="decimal-point">00</span></h3>
                                                    <h6>+3000 this week</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    <i className="fa fa-money"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
