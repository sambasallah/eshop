import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../inc/Navbar';
import SideNav from '../inc/SideNav';

const AddUser = (props) => {

    const [adminCust, setAdminCust] = useState({});

    const register = async (event) => {
        event.preventDefault();
        let url = 'http://localhost:8000/api/v1/create-admin-or-customer';
        let response = await fetch(url, {method: 'POST', 
        headers: {'Content-Type': 'application/json'}, body: JSON.stringify(adminCust)});
        let data = await response.json();

        if(data) {
            // if(data.EmailExists === true) {
            //     console.log('Email Exists');
            // }
            // if(data.UsernameExists === true) {
            //     console.log('Username Exists');
            // }

            // if(data.Created === true) {
            //     props.history.push('/users');
            // } else {
            //     console.log('Error Occured');
            // }
            console.log(data);
        }
        
    }

    const handleChange = (event) => {
        setAdminCust({...adminCust, [event.target.id]: event.target.value});
        console.log(adminCust);
    }

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

export default AddUser
