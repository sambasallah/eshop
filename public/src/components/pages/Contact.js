import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div>
            <Helmet>
			 <title>Contact | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div class="contact">
                <div class="contact-container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Get In Touch!</h4>
                                <h5>We'd love to hear from you</h5>
                                <h6><span>info@ebaaba.xyz</span></h6>
                                <ul>
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-twitter"></i></li>
                                    <li><i className="fa fa-instagram"></i></li>
                                </ul>
                            </div>
                            <div className="col-md-6" style={{textAlign: "right"}}>
                                <img src={require('../../media/svg/contact.svg')} style={{maxWidth: '30%', maxHeight: '30%'}}/>
                            </div>
                        </div>
                </div>
            </div>
</div>
    )
}

export default Contact;
