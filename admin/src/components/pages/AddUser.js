import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../inc/Navbar';
import SideNav from '../inc/SideNav';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AddUser = (props) => {

    const [adminCust, setAdminCust] = useState({});

    const register = async (event) => {
        event.preventDefault();
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/create-admin-or-customer?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/create-admin-or-customer?token=' + props.token;
        }  
        let response = await fetch(url, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(adminCust)});
        let data = await response.json();

        if(data) {
            if(data.EmailExists === true) {
                emailExists();
            }
            if(data.UsernameExists === true) {
                usernameExists();
            }

            if(data.Created === true) {
                props.history.push('/users');
                userCreated();
            } 

            if(data.Created === false) {
                errorOccured();
            }
          
        }
    }

    const handleChange = (event) => {
        setAdminCust({...adminCust, [event.target.id]: event.target.value});
        console.log(adminCust);
    }

    const userCreated = () =>  toast.success("User Created!", {
        position: toast.POSITION.TOP_LEFT
    });

    
    const emailExists = () =>  toast.warn("Email Exists!", {
        position: toast.POSITION.TOP_LEFT
    });

    const usernameExists = () =>  toast.warn("Username Exists!", {
        position: toast.POSITION.TOP_LEFT
    });

    const errorOccured = () =>  toast.error("Error Occured!", {
        position: toast.POSITION.TOP_LEFT
    });

    // if(!props.token) return <Redirect to='/login'></Redirect>

    return (
        <div>
            <Navbar />
            <Helmet title="Add User | eBaaba" />
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                    <h2>Add User</h2>
                </div>
            </div>
            <div className="add-user">
                <div className="add-user-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8 right">
                            <h2>Add User</h2>
                            <form onSubmit={ register }>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="firstname" placeholder="First Name" id="firstName" onChange={ handleChange } className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="lastname" placeholder="Last Name" id="lastName" onChange={ handleChange } className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Email" id="email" onChange={ handleChange } className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" id="username" onChange={ handleChange } placeholder="Username" required/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="password" onChange={ handleChange } placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <select className="form-control" id="role" onChange={ handleChange } required>
                                        <option>Choose...</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Customer">Customer</option>
                                    </select>
                                </div>
                                
                                <input type="submit" className="btn btn-success" value="Add User" />
                            </form>
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

export default connect(mapStateToProps)(AddUser)
