import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import Navbar from '../inc/Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Users = () => {

    const [adminCust, setAdminCust] = useState([]);

    const getAdminsAndCustomers = async () => {
        let url = 'http://localhost:8000/api/v1/admins-customers';
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
           setAdminCust([...adminCust, ...data])
        }
    }

    useEffect(() => {
        getAdminsAndCustomers();
    }, []);

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
                            <h2>User List - <Link to="/add-user" className="add-user">Add User</Link></h2>
                            <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { adminCust.length > 0 ? (
                                        adminCust.map((value) => {
                                            return(
                                                <>
                                                     <tr>
                                                        <td>{ value.full_name }</td>
                                                        <td>{ value.email }</td>
                                                        <td>{ value.user_role}</td>
                                                        <td><i className="fa fa-pencil"></i></td>
                                                        <td><i className="fa fa-trash"></i></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    ) : (
                                       <>
                                        <tr>
                                            <td><h5>No User</h5></td>
                                        </tr>
                                       </>
                                    )}
                                    { console.log(adminCust)}
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
