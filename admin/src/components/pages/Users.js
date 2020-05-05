import React from 'react';
import SideNav from '../inc/SideNav';
import Navbar from '../inc/Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Users = () => {
    return (
        <div>
            <Navbar />
            <Helmet title="Users | eBaaba" />
            <div className="breadcrumb">
                    <div className="breadcrumb-inner">
                        <h2>Users</h2>
                    </div>
            </div>
            <div className="users">
                <div className="users-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8 right">
                            <h2>User List - <Link to="/add-users" className="add-user">Add User</Link></h2>
                            <table class="table">
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Edit</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>john@example.com</td>
                                        <td>Customer</td>
                                        <td><i className="fa fa-pencil"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                        <td>mary@example.com</td>
                                        <td>Admin</td>
                                        <td><i className="fa fa-pencil"></i></td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                        <td>july@example.com</td>
                                        <td>Customer</td>
                                        <td><i className="fa fa-pencil"></i></td>
                                    </tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
