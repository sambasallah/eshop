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
        <div class="col-md-12">
            <h2 class="h2">Get In Touch!</h2>
            <h5 class="h5">Contact Us For Help with your order, delivery, refund etc</h5>
            <form action="#" method="post">
           <div class="form-container">
                <div class="row">
                   <div class="col-md-12">
                   <input type="text" name="name" placeholder="Your Name*" class="form-input" required />
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-12">
                   <input type="text" name="email" placeholder="Your Email*" class="form-input" required />
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-12">
                   <input type="text" name="subject" placeholder="Subject*" class="form-input" required />
                   </div>
               </div>
               <div class="row">
                   <div class="col-md-12">
                   <textarea name="message" id="" placeholder="Message" class="form-message"></textarea>
                   </div>
               </div>
               <a href="#" type="submit" class="submit">Send Message</a>
               </div>
            </form>
           </div>
        </div>
    </div>
</div>
    )
}

export default Contact;
