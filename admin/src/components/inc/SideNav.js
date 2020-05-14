import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNav = (props) => {

    const [image, setImage] = useState({img: ''});

    const getProfilePicture = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/profile-picture?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/profile-picture?token=' + props.token;
        }  
        let response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: props.user})
        });
        let data = await response.json();

        if(data.Img) {
            setImage({...image, img: data.Img});
        }
    }

    useEffect(()=> {
        getProfilePicture();
    },[]);

    return (
        <div>
        <div className="admin-profile">
            <div className="row">
                <div className="col-md-8">
                     { !image.img? (
                         'Loading'
                     ) : (
                        <img src={image.img} 
                        style={{maxWidth:'70%', maxHeight: '50%', border: '1px solid black', margin: '10px'}} />
                     )}
                    <h6>{ props.name? props.name : '....' }</h6>
                </div>
            </div>
        </div>
        <h5>General</h5>
            <ul>
                <li><i className="fa fa-tachometer"></i> <Link to="/" className="link">Dashboard</Link></li>
                <li><i className="fa fa-gift"></i> <Link to="/orders" className="link">Orders</Link></li>
                <li><i className="fa fa-shopping-basket"></i> <Link to="/store" className="link">Store</Link></li>
                <li><i className="fa fa-list-alt"></i> <Link to="/categories" className="link">Categories</Link></li>
                <li><i className="fa fa-user"></i> <Link to="/users" className="link">Users</Link></li>
                {/* <li><i className="fa fa-line-chart"></i> <Link to="/analytics" className="link">Analytics</Link></li> */}
                <li><i className="fa fa-cog"></i> <Link to="/settings" className="link">Settings</Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token,
        user: state.auth.user,
        name: state.auth.fullName
    }
)

export default connect(mapStateToProps)(SideNav);
