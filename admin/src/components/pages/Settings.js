import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { openUploadWidget } from "../utils/CloudinaryService";
import Navbar from '../inc/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isPasswordChanged } from '../utils/UtilityFunctions';

const Settings = (props) => {

    const [admin, setAdmin] = useState({
        fullNname: '',
        email: '',
        username: '',
        image: '',
        password: '',
        oldPassword: '',
        loading: false
    });  

    const getAdminInfo = async () => {
       setAdmin({...admin, loading: true});
       let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/get-admin?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/get-admin?token=' + props.token;
        }
       let response = await fetch(url, {method: 'POST', 
    headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email: props.email})});
       let data = await response.json();

       if(data.data) {
           let adminData = data.data[0];
           setAdmin({
               fullName: adminData.full_name,
               username: adminData.username,
               email: adminData.email,
               password: adminData.password,
               oldPassword: adminData.password,
               image: adminData.img,
               loading: false
           });
       }
    }  

   
    const update = async (event) => {
        event.preventDefault();
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/update-admin?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/update-admin?token=' + props.token;
        }
        let response = await fetch(url, {method : 'PUT',
        headers : {'Content-Type' : 'application/json'}, 
        body : JSON.stringify(admin) });
        let data = await response.json()
        if(data.Updated === true) {
             updated();
         } else {
            error();
         }
    }

    const handleChange = (event) => {
        setAdmin({...admin,[event.target.id]: event.target.value});
    }

    const updated = () =>  toast.success("Profile Updated!", {
        position: toast.POSITION.TOP_LEFT
    });
  
    const error = () => toast.error("An Error Occurred!", {
      position: toast.POSITION.TOP_LEFT
    });

    useEffect(() => {
        getAdminInfo();
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
              let path = photos.info.secure_url;
              setAdmin({...admin, image : path});
            }
          } else {
            console.log(error);
          }
        });
      }

    // if(!props.token) return <Redirect to='/login'></Redirect>
      
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
                            { admin.loading? (
                                    <>
                                    <div className='loading-screen' style={{ position : 'relative', marginTop : '30%', marginLeft : '50%', transform : 'translate(-50%,-50%)'}}>
                                       <h2>Loading... <i className="fa fa-spinner fa-spin"></i></h2>
                                    </div>
                                    </>
                                ) : (
                                    <>
                                    <h2>Profile Settings</h2>
                                    <form onSubmit={ update } style={{ marginBottom : '10px' }}>
                                        
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Name" id="fullName" value={ admin.fullName } onChange={ handleChange }  className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Email" id="email" value={ admin.email } onChange={ handleChange }  className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Your Username" id="username" value={ admin.username } onChange={ handleChange }  className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Your Password" id="password" value={ admin.password } onChange={ handleChange }  className="form-control" />
                                        </div>
                                        <div className="row">
                                                  <div className="col-md-3">
                                                          <div className="card">
                                                          <a onClick={ () => beginUpload() }>
                                                            <div className="card-body">
                                                                { admin.image?(
                                                                    <img src={ admin.image }  style={{maxWidth: '100%', maxHeight: '100%'}}  />
                                                                ) : (
                                                                    <h2>Click to Upload Image <i className="fa fa-upload"></i></h2>
                                                                )}
                                                            </div>
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                      
                                        <input type="submit" value="Update Profile" className="btn btn-success" />
                                    </form>
                                  </>
                                  )  }
                                  { console.log(admin) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token,
        email: state.auth.user
    }
)

export default connect(mapStateToProps)(Settings)
