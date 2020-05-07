import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { loginAdmin } from '../../actions/AdminActions';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

const AdminLogin = (props) => {

    const [loginDetails, setLoginDetails] = useState({});
    const [errorHandler, setErrorHandler] = useState({handle: false});


    const login = async (event) => {
        event.preventDefault();
        await props.loginAdmin(loginDetails);
    }

    const handleChange = (event) => {
        setLoginDetails({...loginDetails, [event.target.id]: event.target.value});
    }

    const invalidLoginCredentials = () =>  toast.error("Invalid Login Details!", {
        position: toast.POSITION.TOP_LEFT
    });

    if(props.isLoggedIn) return <Redirect to='/'></Redirect>
    if(props.loginFailed && !errorHandler.handle) {
        invalidLoginCredentials();
        setErrorHandler({...errorHandler, handle: true});
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
                       { props.isLoading && !props.loginFailed? (
                            <input type="submit" value="Loading..." className="submit"/>
                       ) : (
                            <input type="submit" value="Login" className="submit"/>
                       )}
                   </form>
               </div>
           </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        isLoggedIn: state.auth.isLoggedIn, 
        isLoading: state.auth.isLoading,
        loginFailed: state.auth.loginFailed
    }
)

export default connect(mapStateToProps,{loginAdmin})(AdminLogin);
