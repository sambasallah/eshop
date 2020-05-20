import React, { useState, useEffect } from 'react';
import DashboardChart from '../charts/DashboardChart';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Sparklines, SparklinesLine, SparklinesSpots, 
    SparklinesBars, SparklinesCurve } from 'react-sparklines';
import Navbar from '../inc/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = (props) => {

    const [totalSales, setTotalSales] = useState({total: 0});
    const [allOrders, setOrders] = useState({orders: 0});
    const [newOrders, setNewOrders] = useState({newOrders: 0});
    const [totalWeeklySales, setTotalWeeklySales] = useState({weeklySales: 0});
    const [totalProfit, setTotalProfit] = useState({totalProfit: 0});
    const [weeklySales, setWeeklySales] = useState({weeklySales: []});
    const [weeklyOrders, setWeeklyOrders] = useState({weeklyOrders: []});
    const [totalWeeklyProfit, setTotalWeeklyProfit] = useState({totalWeeklyProfit : 0});
    const [totalDailyProfit, setTotalDailyProfit] = useState({totalDailyProfit: []});

    let salesData = [];
    let orderData = [];
    let dailyProfitData = [];
        
    weeklySales.weeklySales.map((value) => {
            salesData.push(value.daily_sale);
    });
         
    weeklyOrders.weeklyOrders.map((value) => {
            orderData.push(value.daily_orders);
    });
         
    totalDailyProfit.totalDailyProfit.map((value) => {
            dailyProfitData.push(Number(value.total_daily_profit) * Number(10/100));
    });
    
    

    const getTotalSales = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/total-sales?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/total-sales?token=' + props.token;
        } 
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalSales({...totalSales, total: data.TotalSales});
        }
    }

    const getTotalWeeklySales = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/total-weekly-sales?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/total-weekly-sales?token=' + props.token;
        } 
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalWeeklySales({...totalWeeklySales, weeklySales: data.Weekly});
        }
    }

    const getWeeklySales = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/weekly-sales?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/weekly-sales?token=' + props.token;
        } 
        let response = await fetch(url);
        let data = await response.json();
        let weeklySalesData = [];
        let day = "";
        if(data.WeeklySales) {
            data.WeeklySales.map((value) => {
                 switch(value.day) {
                     case 1: 
                        day = 'Sunday';
                        break;
                     case 2:
                         day = 'Monday';
                         break;
                     case 3:
                         day = 'Tuesday';
                         break;
                     case 4:
                         day = 'Wednesday';
                         break;
                     case 5: 
                         day = 'Thursday';
                         break;
                     case 6:
                         day = 'Friday';
                         break;
                     case 7: 
                         day = 'Saturday';
                         break;
                     default:
                         break;
                         
                 }
                 weeklySalesData.push({day: day, daily_sale: value.daily_sale});
            });

            setWeeklySales({...weeklySales,weeklySales: weeklySalesData});
        }
    }

    const getAllOrders = async () => { 
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/all-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/all-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setOrders({...allOrders, orders: data.Orders});
        }
    }

    const getNewOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/new-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/new-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setNewOrders({...newOrders, newOrders: data.NewOrders});
        }
    }

    const getWeeklyOrders = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/weekly-orders?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/weekly-orders?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setWeeklyOrders({...weeklyOrders, weeklyOrders: data.WeeklyOrders});
        }
    }

    const getTotalProfit = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/total-profit?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/total-profit?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
          setTotalProfit({...totalProfit, totalProfit: data.Profit});
        }
    }

    const getTotalWeeklyProfit = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/total-weekly-profit?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/total-weekly-profit?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalWeeklyProfit({...totalWeeklyProfit,totalWeeklyProfit: data.TotalWeeklyProfit});
        }
    }

    const getTotalDailyProfit = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL 
            + '/api/v1/total-daily-profit?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL 
            + '/api/v1/total-daily-profit?token=' + props.token;
        }
        console.log(process.env.REACT_APP_DEVELOPMENT_API_URL);
        let response = await fetch(url);
        let data = await response.json();
        if(data) {
            setTotalDailyProfit({...totalDailyProfit,totalDailyProfit: data.TotalDailyProfit});
        }
    }

    useEffect(() => {
            getTotalSales();
            getAllOrders();
            getNewOrders();
            getTotalWeeklySales();
            getWeeklySales();
            getTotalProfit();
            getWeeklyOrders();
            getTotalWeeklyProfit();
            getTotalDailyProfit();
    },[])

    // if(!props.token) return <Redirect to='/login'></Redirect>

    return (
        <div>
            <Navbar />
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
                                                    <h3>{ new Intl.NumberFormat('en-GM', 
                                                    { style: 'currency', currency: 'GMD', maximumSignificantDigits: 12 })
                                                    .format(totalSales.total)}.<span className="decimal-point">00</span></h3>
                                                    <h6>{ '+' + new Intl.NumberFormat().format(totalWeeklySales.weeklySales)} This Week.</h6>
                                                </div>
                                                <div className="col-md-5 dash-graph">
                                                 { weeklySales.weeklySales.length > 0? (
                                                     <>
                                                    <Sparklines data={salesData} height={90} width={100}>
                                                        <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "#000" }} />
                                                        <SparklinesSpots size={4}
                                                            style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
                                                    </Sparklines>
                                                     </>
                                                 ) : (
                                                     'loading'
                                                 )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                <div className="custom-card second">
                                        <div className="custom-card-inner">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h2>Orders</h2>
                                                    <h3>{ allOrders.orders }</h3>
                                                    <h6>{ newOrders.newOrders } New Orders</h6>
                                                </div>
                                                <div className="col-md-6 dash-graph">
                                                    { weeklyOrders.weeklyOrders.length > 0? (
                                                        <>
                                                            <Sparklines data={orderData}  height={70} width={100}>
                                                                <SparklinesBars />
                                                            </Sparklines>
                                                        </>
                                                    ) : (
                                                        'loading'
                                                    )}
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
                                                    <h3>{ new Intl.NumberFormat('en-GM', { style: 'currency', currency: 
                                                    'GMD', maximumSignificantDigits: 12 }).
                                                    format(totalProfit.totalProfit)}.<span className="decimal-point">00</span></h3>
                                                    <h6>{ '+' + totalWeeklyProfit.totalWeeklyProfit } This Week</h6>
                                                </div>
                                                
                                                <div className="col-md-5 dash-graph">
                                                 { totalDailyProfit.totalDailyProfit.length > 0? (
                                                     <>
                                                        <Sparklines data={dailyProfitData}  width={100} height={90}>
                                                            <SparklinesLine color="indigo" style={{ fill: 'none' }}/>
                                                            <SparklinesSpots />
                                                         </Sparklines>
                                                     </>
                                                 ) : 'loading'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { weeklySales.weeklySales.length > 0? (
                                <>      
                                    <div className="chart-container">
                                        <DashboardChart weeklySales={weeklySales.weeklySales} />
                                    </div>
                                </>
                            ): (
                                <h1>Loading</h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token
    }
)

export default connect(mapStateToProps)(Dashboard);