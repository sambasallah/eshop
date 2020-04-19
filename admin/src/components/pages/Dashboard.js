import React from 'react';
import DashboardChart from '../charts/DashboardChart';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars } from 'react-sparklines';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>eBaaba Dashboard</title>
            </Helmet>
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
                                                <div className="col-md-7">
                                                    <h2>Sales</h2>
                                                    <h3>D8,500.<span className="decimal-point">00</span></h3>
                                                    <h6>D4000 This Week.</h6>
                                                </div>
                                                <div className="col-md-5">
                                                <Sparklines data={[10,20,50,30]} width={100} height={100}>
                                                    <SparklinesLine color="#ed017f" />
                                                </Sparklines>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="custom-card second">
                                        <div className="custom-card-inner">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2>Orders</h2>
                                                    <h3>8500</h3>
                                                    <h6>300 New Orders</h6>
                                                </div>
                                                <div className="col-md-5">
                                                <Sparklines data={[0,0,0,1024]} width={100} height={80}>
                                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                                                    <SparklinesSpots size={4}
                                                        style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
                                                </Sparklines>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="custom-card third">
                                        <div className="custom-card-inner">
                                        <div className="row">
                                                <div className="col-md-7">
                                                    <h2>Profit</h2>
                                                    <h3>D8,500.<span className="decimal-point">00</span></h3>
                                                    <h6>+3000 This Week</h6>
                                                </div>
                                                <div className="col-md-5">
                                                <Sparklines data={[5, 10, 5, 20,15,40,80]} width={100} height={80}>
                                                    <SparklinesLine color="indigo" style={{ fill: 'none' }}/>
                                                    <SparklinesSpots />
                                                </Sparklines>
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
