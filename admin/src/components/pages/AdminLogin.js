import React from 'react';
import { Helmet } from 'react-helmet';

const AdminLogin = () => {
    return (
        <div>
            <Helmet title="Admin Login | eBaaba" />
           <div className="admin-login">
               <div className="admin-inner">
                   <h2>Admin Login</h2>
                   <form>
                       <input type="text" name="username" placeholder="Username or Email" className="username" required/>
                       <input type="password" name="password" placeholder="Password" className="password" required/>
                       <input type="submit" value="Login" className="submit"/>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default AdminLogin;
