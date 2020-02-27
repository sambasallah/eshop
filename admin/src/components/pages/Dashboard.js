import React from 'react';
import DashboardChart from '../charts/DashboardChart';
import SideNav from '../inc/SideNav';

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
                                <SideNav />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="custom-card first">
                                        <div className="custom-card-inner">
                                        <div className="row">
                                                <div className="col-md-8">
                                                    <h2>Sales</h2>
                                                    <h3>D8,500.<span className="decimal-point">00</span></h3>
                                                    <h6>D4000 This Week.</h6>
                                                </div>
                                                <div className="col-md-4">
                                                    
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
                                                    <h6>+3000 This Week</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="chart-container">
                                <DashboardChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
