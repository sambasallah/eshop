import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Account = () => {
    return (
        <>
        <Helmet>
			 <title>My Account | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
        <div className="breadcrumb">
            <div className="breadcrumb-container">
                <h2>My Account</h2>
            </div>
        </div>
        <div className="account">
            <div className="account-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="account-info">
                            <img src={require("../../media/images/b5.jpg")} alt="profile" className="profile-pic" />
                            <ul className="nav flex-column">
                                <li><a href="#dashboard" data-toggle="tab" className="nav-link active"><i className="fa fa-tachometer"></i> Dashboard</a></li>
                                <li><a href="#account-info" data-toggle="tab" className="nav-link"><i className="fa fa-user"></i> Account Information</a></li>
                                <li><a href="#orders" data-toggle="tab" className="nav-link"><i className="fa fa-gift"></i> Orders</a></li>
                                <li><Link href="./" className="nav-link"><i className="fa fa-sign-out"></i> Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content">
                            <div className="tab-pane container active" id="dashboard">
                                <div className="jumbotron">
                                    <h2>Welcome User</h2>
                                </div>
                            </div>
                            <div className="tab-pane container" id="account-info">
                                <h2>Account Information</h2>
                                <form action="" method="post" enctype="multipart/form-data">
                                    <input type="text" name="name" placeholder="Full Name" />
                                    <input type="text" name="email" placeholder="Email" />
                                    <input type="text" name="username" placeholder="Username" />
                                    <input type="password" name="password" placeholder="Password" />
                                    <input type="password" name="password-repeat" placeholder="Repeat Password" />
                                    <input type="file" name="profile-picture" /> 
                                    <a href="/cart" type="submit">Update Profile</a>
                                </form>
                            </div>
                            <div className="tab-pane container" id="orders">
                                <h2>My Orders</h2>
                                <table className="table table-responsive">
                                    <thead>
                                    <tr>
                                        <th width="50%">Item Details</th>
                                        <th width="20%">Quantity</th>
                                        <th width="20%">Item Price</th>
                                        <th width="10%">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h6><img src={require("../../media/images/b6.jpg")} alt="" style={{width:"40px", height:"40px"}} /> <span>Bag</span></h6>
                                        </td>
                                        <td>
                                            <b>2</b>
                                        </td>
                                        <td>
                                            <h5>D12,000</h5>
                                            <sub>D12,000 x 1 Item</sub>
                                        </td>
                                        <td>
                                            <b className="shipped">Shipped</b>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )   
}

export default Account;