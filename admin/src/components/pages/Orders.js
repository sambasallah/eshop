import React from 'react'
import SideNav from '../inc/SideNav'

const Orders = () => {
    return (
        <div>
            <div className="orders">
                <div className="orders-inner">
                <div className="row">
                    <div className="col-md-4 left">
                        <SideNav />
                    </div>
                    <div className="col-md-8 rights">
                        <h2>Orders</h2>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Created</th>
                                        <th>Customer</th>
                                        <th>Total</th>
                                        <th>Profit</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>30024</td>
                                        <td>2 min ago</td>
                                        <td>Samba Sallah</td>
                                        <td>D400</td>
                                        <td>D150</td>
                                        <td style={{color: "red"}}><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td>30024</td>
                                        <td>2 min ago</td>
                                        <td>Samba Sallah</td>
                                        <td>D400</td>
                                        <td>D150</td>
                                        <td style={{color: "red"}}><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td>30024</td>
                                        <td>2 min ago</td>
                                        <td>Samba Sallah</td>
                                        <td>D400</td>
                                        <td>D150</td>
                                        <td style={{color: "red"}}><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td>30024</td>
                                        <td>2 min ago</td>
                                        <td>Samba Sallah</td>
                                        <td>D400</td>
                                        <td>D150</td>
                                        <td style={{color: "red"}}><b>Pending</b></td>
                                    </tr>
                                    <tr>
                                        <td>30024</td>
                                        <td>2 min ago</td>
                                        <td>Samba Sallah</td>
                                        <td>D400</td>
                                        <td>D150</td>
                                        <td style={{color: "red"}}><b>Pending</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
