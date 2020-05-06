import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { loginAdmin } from '../../actions/AdminActions';

const AdminLogin = (props) => {

    const [loginDetails, setLoginDetails] = useState({});

    const login = async (event) => {
        event.preventDefault();
        await props.loginAdmin(loginDetails);
        if(props.redirect === true) {
            props.history.push('/dashboard');
            console.log(props.redirect)
        }

    }

    const handleChange = (event) => {
        setLoginDetails({...loginDetails, [event.target.id]: event.target.value});
    }

    return (
        <div>
            <Helmet title="Admin Login | eBaaba" />
           <div className="admin-login">
               <div className="admin-inner">
                   <h2>Admin Login</h2>
                   <form onSubmit={ login }>
                       <input type="text" name="username" placeholder="Email" id="email" onChange={ handleChange } className="username" required/>
                       <input type="password" name="password" placeholder="Password" id="password" onChange={ handleChange } className="password" required/>
                       <input type="submit" value="Login" className="submit"/>
                   </form>
               </div>
           </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        redirect: state.auth.redirect
    }
)

export default connect(mapStateToProps,{loginAdmin})(AdminLogin);
