import React, { useState, useEffect } from 'react';
import DashboardChart from '../charts/DashboardChart';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars } from 'react-sparklines';

const Dashboard = () => {


    const [totalSales, setTotalSales] = useState({total: 0});
    const [allOrders, setOrders] = useState({orders: 0});
    const [newOrders, setNewOrders] = useState({newOrders: 0});
    const [totalWeeklySales, setTotalWeeklySales] = useState({weeklySales: 0});
    const [totalProfit, setTotalProfit] = useState({totalProfit: 0});
    const [weeklySales, setWeeklySales] = useState({weeklySales: []});

    let data = [];

    weeklySales.weeklySales.map((value) => {
       data.push(value.daily_sale);
    });

    const getTotalSales = async () => {
        let url = 'http://localhost:8000/api/v1/total-sales';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalSales({...totalSales, total: data.Total});
        }
    }

    const getTotalWeeklySales = async () => {
        let url = 'http://localhost:8000/api/v1/total-weekly-sales';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalWeeklySales({...totalWeeklySales, weeklySales: data.Weekly});
        }
    }

    const getWeeklySales = async () => {
        let url = 'http://localhost:8000/api/v1/weekly-sales';
        let response = await fetch(url);
        let data = await response.json();
        let weeklySalesData = [];
        let day = "";
        if(data) {
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
        let url = 'http://localhost:8000/api/v1/all-orders';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setOrders({...allOrders, orders: data.Orders});
        }
    }

    const getNewOrders = async () => {
        let url = 'http://localhost:8000/api/v1/new-orders';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setNewOrders({...newOrders, newOrders: data.NewOrders});
        }
    }

    const getTotalProfit = async () => {
        let url = 'http://localhost:8000/api/v1/total-profit';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            setTotalProfit({...totalProfit, totalProfit: data.Profit});
        }
    }

    useEffect(() => {
        getTotalSales();
        getAllOrders();
        getNewOrders();
        getTotalWeeklySales();
        getWeeklySales();
        getTotalProfit();
    },[])

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
                                                    <h3>{ new Intl.NumberFormat('en-GM', 
                                                    { style: 'currency', currency: 'GMD', maximumSignificantDigits: 2 })
                                                    .format(totalSales.total)}.<span className="decimal-point">00</span></h3>
                                                    <h6>{ new Intl.NumberFormat().format(totalWeeklySales.weeklySales)} This Week.</h6>
                                                </div>
                                                <div className="col-md-5 dash-graph">
                                                 { weeklySales.weeklySales.length > 0? (
                                                     <>
                                                    <Sparklines data={data} height={100} width={100}>
                                                        <SparklinesLine color="#8b054d" />
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
                                                    <Sparklines data={[900,500,800,1024]} height={75} width={100}>
                                                        <SparklinesBars />
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
                                                    <h3>{ new Intl.NumberFormat('en-GM', { style: 'currency', currency: 'GMD', maximumSignificantDigits: 2 }).format(totalProfit.totalProfit)}.<span className="decimal-point">00</span></h3>
                                                    <h6>+3000 This Week</h6>
                                                </div>
                                                <div className="col-md-5 dash-graph">
                                                <Sparklines data={[5, 10, 5, 20,15,40,80]} width={100} height={100}>
                                                    <SparklinesLine color="indigo" style={{ fill: 'none' }}/>
                                                    <SparklinesSpots />
                                                </Sparklines>
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

export default Dashboard
