import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import Navbar from '../inc/Navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Users = (props) => {

    const [adminCust, setAdminCust] = useState([]);

    const getAdminsAndCustomers = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/admins-customers?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/admins-customers?token=' + props.token;
        }
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
           setAdminCust([...adminCust, ...data])
        }
    }

    const deleteUser = async (email, userRole) => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/admins-customers-delete?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/admins-customers-delete?token=' + props.token;
        }
        let response = await fetch(url, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email: email, userRole: userRole})});
        let data = await response.json();

        if(data) {
            if(data.Deleted === true) {
                props.history.push('/');
                userDeleted();
                props.history.push('/users');
            } else {
                console.log(data);
            }
        }
    }

    const userDeleted = () =>  toast.success("User Deleted!", {
        position: toast.POSITION.TOP_LEFT
    });

    useEffect(() => {
        getAdminsAndCustomers();
    }, []);

    // if(!props.token) return <Redirect to='/login'></Redirect>

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
                                                        <td><i className="fa fa-trash" style={{cursor: 'pointer'}}  onClick={ () => deleteUser(value.email, value.user_role) }></i></td>
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
                    
                                    </tbody>
                            </table>
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
);

export default connect(mapStateToProps)(Users);
