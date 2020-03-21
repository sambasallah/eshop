import React, { useState, useEffect } from 'react'
import SideNav from '../inc/SideNav'
import { Helmet } from 'react-helmet';

const Alert = (msg) => {
    return(
        <div>
            Alert
        </div>
    );
}

const Settings = () => {

    const [settings, setSettings] = useState([{
        id : '',
        full_name : '',
        username : '',
        password : '',
        email : ''
     }]);
   
    const getProfileInformation = async () => {
         let url = 'http://localhost:8000/api/v1/admin/1';
         let response = await fetch(url, {method : 'GET'});
         let data = await response.json();
         setSettings(
                {
                    id : data[0].id,
                    full_name : data[0].full_name, 
                    email : data[0].email,
                    username : data[0].username,
                    password : data[0].password 
                });
        
    }


    const saveForm = async (event) => {
        event.preventDefault();
        let url = 'http://localhost:8000/api/v1/admin/1';
        let response = await fetch(url, {method : 'PUT', cache : 'no-cache', cors : 'no-cors', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(settings) });
        let data = response.json();

        console.log(data);
    }

    const handleNameChange = (event) => {
       setSettings(Object.assign({},settings, { full_name : event.target.value }));
    }

    const handleEmailChange = (event) => {
        setSettings(Object.assign({},settings, { email : event.target.value }));
    }

    useEffect(() => {
        getProfileInformation();
    },[]); 

  
    return (
        <div>
            <Helmet>
                <title>Settings | eBaaba Dashboard</title>
            </Helmet>

            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Settings</h2>
                </div>
            </div>
            <div className="settings">
                <div className="settings-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8 right">
                            <h2>Profile Settings</h2>
                            <form onSubmit= { saveForm }>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" id="name" value={ settings.full_name } onChange={ handleNameChange }  className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Email" id="email" value={ settings.email } onChange={ handleEmailChange }  className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Username" id="username" value={ settings.username }   className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Your Password" id="password" value={ settings.password }   className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b5.jpg')} alt="Profile" style={{width: '100%' }} />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <input type="submit" value="Update Profile" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
