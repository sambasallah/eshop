import React from 'react';
import { Helmet } from 'react-helmet';

const Auth = () => {
    return (
        <div>
            <Helmet>
			 <title>Login / Register | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <h2>Login / Register</h2>
                </div>
            </div>
            <div className="auth">
    <div className="auth_container">
        <div className="row">
            <div className="col-md-4">
                <div className="login_container">
                <h2>Login <i className="fa fa-user"></i></h2>
                <form action="" method="post">
                    <input type="text" name="username" placeholder="Username / Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <a href="" type="submit">Login</a>
                </form>
                </div>
            </div>
            <div className="col-md-8">
                <div className="register_container">
                <h2>Register <i className="fa fa-user-plus"></i></h2>
                <form action="" method="post">
                <input type="text" name="name" placeholder="Full Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password-repeat" placeholder="Repeat Password" />
                <a href="" type="submit">Register</a> 
                </form>
                </div>

            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Auth;