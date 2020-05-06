import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { loginAdmin } from '../../actions/AdminActions';
import { toast } from 'react-toastify';

const AdminLogin = (props) => {

    const [loginDetails, setLoginDetails] = useState({
        isLoading: props.isLoading
    });

    const login = (event) => {
        event.preventDefault();
        props.loginAdmin(loginDetails);
        if(props.loginFailed === true) {
            invalidLoginCredentials();
        }
        if(props.isLoggedIn) {
            props.history.push('/');
        }
      
    }

    const handleChange = (event) => {
        setLoginDetails({...loginDetails, [event.target.id]: event.target.value});
    }

    const invalidLoginCredentials = () =>  toast.error("Invalid Login Details!", {
        position: toast.POSITION.TOP_LEFT
    });

    return (
        <div>
            <Helmet title="Admin Login | eBaaba" />
           <div className="admin-login">
               <div className="admin-inner">
                   <h2>Admin Login</h2>
                   <form onSubmit={ login }>
                       <input type="text" name="username" placeholder="Email" id="email" onChange={ handleChange } className="username" required/>
                       <input type="password" name="password" placeholder="Password" id="password" onChange={ handleChange } className="password" required/>
                       { props.isLoading? (
                            <input type="submit" value="Loading..." className="submit"/>
                       ) : (
                            <input type="submit" value="Login" className="submit"/>
                       )}
                       { console.log(props.isLoading)}
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
