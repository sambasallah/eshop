import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Error, Success } from '../alerts/SettingsAlerts';
import { openUploadWidget } from "../utils/CloudinaryService";
import { CloudinaryContext } from 'cloudinary-react';
import Navbar from '../inc/Navbar';

const Settings = () => {

    const originalState = {
        id : '',
        full_name : '',
        username : '',
        password : '',
        email : '',
        success : '',
        failed : '',
        image : '',
        loading: true,
        formSubmited: false
     };

    const [settings, setSettings] = useState([originalState]);  

    const getProfileInformation = async () => {
        let url = 'http://localhost:8000/api/v1/admin/1';
        let data = await fetch(url)
         .then((response) => {
             return response.json();
         })
         .catch((error) => {
             if(error) {
                 setSettings(originalState);
             }
         })
         
        if(data) {
        setSettings(Object.assign({},settings, 
            {
                id : data[0].id,
                full_name : data[0].full_name, 
                email : data[0].email,
                username : data[0].username,
                password : data[0].password,
                success : '',
                failed : '',
                image : data[0].img,
                loading : false,
                formSubmited: false 
            }));
            console.log(settings);
        }
        
        
    }

    // Handle Saving Form
    const saveForm = async (event) => {
        event.preventDefault();
        let url = 'http://localhost:8000/api/v1/admin/1';
        let response = await fetch(url, {method : 'PUT', cache : 'no-cache', cors : 'no-cors', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(settings) });
        let data = await response.json();
         if(data.Updated === true) {
            setSettings(Object.assign({},settings, { success : 'Settings Saved', formSubmited: true }));
         } else {
            setSettings(Object.assign({},settings, { failed : 'Error! Saving Settings' }));
         }
         return false;
    }

    const handleFieldChange = (event) => {
        setSettings(Object.assign({}, settings, { [event.target.id]: event.target.value }));
    }

    useEffect(() => {
        getProfileInformation();
    },[]); 


    const beginUpload = (tag) => {
        const uploadOptions = {
          cloudName: "ebaaba",
          tags: [tag],
          uploadPreset: "profile"
        };
      
        openUploadWidget(uploadOptions, (error, photos) => {
          if (!error) {
            console.log(photos);
            if(photos.event === 'success'){
              let path = photos.info.public_id;
              setSettings(Object.assign({},settings,{ image : path }));
            }
          } else {
            console.log(error);
          }
        });
      }

  
    return (
        <div>
            <Navbar />
            <Helmet>
                <title>Settings | eBaaba Dashboard</title>
            </Helmet>

            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Settings </h2>
                </div>
            </div>
            <div className="settings">
                <div className="settings-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <SideNav />
                        </div>
                        <div className="col-md-8 right">
                            { settings.loading ? (
                                    <>
                                    <div className='loading-screen' style={{ position : 'relative', marginTop : '30%', marginLeft : '50%', transform : 'translate(-50%,-50%)'}}>
                                       <h2>Loading... <i className="fa fa-spinner fa-spin"></i></h2>
                                    </div>
                                    </>
                                ) : (
                                    <>
                                    <h2>Profile Settings</h2>
                                    <form onSubmit= { saveForm } style={{ marginBottom : '10px' }}>
                                        
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Name" id="full_name" value={ settings.full_name } onChange={ handleFieldChange }  className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Email" id="email" value={ settings.email } onChange={ handleFieldChange }  className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Username" id="username" value={ settings.username } onChange={ handleFieldChange }  className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Your Password" id="password" value={ settings.password } onChange={ handleFieldChange }  className="form-control" />
                                        </div>
                                        <div className="row">
                                                  <div className="col-md-3">
                                                          <div className="card">
                                                          <a onClick={ () => beginUpload() }>
                                                            <div className="card-body">
                                                                <CloudinaryContext cloudName="ebaaba">
                                                                <img src={ 'https://res.cloudinary.com/ebaaba/image/upload/v1585136586/' + settings.image }  width="100%"  />
                                                                </CloudinaryContext>
                                                                {/* <a style={{ marginRight : '10px', marginBottom: '10px'}} onClick={() => beginUpload()} >Upload Profile Image <i className="fa fa-plus"></i></a> */}
                                                            </div>
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                      
                                        <input type="submit" value="Update Profile" className="btn btn-success" />
                                    </form>
                                    
                                    { settings.success ? ( <Success /> ) : ( <></>)}
                                    { settings.failed ? ( <Error /> ) : ( <></> )}
                                  </>
                                  )  }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
