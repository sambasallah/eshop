import React from 'react'
import SideNav from '../inc/SideNav'
import { Helmet } from 'react-helmet';

const Settings = () => {
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
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="file" />
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b5.jpg')} style={{width: '100%' }} />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <input type="submit" value="Update Profile" className="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
