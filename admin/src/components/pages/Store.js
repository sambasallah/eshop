import React from 'react'
import SideNav from '../inc/SideNav';

const Store = () => {
    return (
        <div>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Store</h2>
                </div>
            </div>
           <div className="store">
               <div className="store-inner">
                   <div className="row">
                       <div className="col-md-4 left">
                         <SideNav />
                       </div>
                       <div className="col-md-8">
                           <h2>Products</h2>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b5.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b6.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b7.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b8.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b5.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b6.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b7.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={require('../../media/b8.jpg')} style={{width : '100%'}} />
                                        </div>
                                        <div className="card-footer">
                                            Bag - D400
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Store
