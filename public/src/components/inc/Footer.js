import React from 'react'

const Footer = () => {
    return (
        <div>
           <div className="contact-info">
			 <div className="contact-info-inner">
			 	<div className="row">
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-2">
								<span><i className="fa fa-envelope"></i></span>
							</div>
							<div className="col-md-10">
								<h4>Email Support</h4>
								<p>help@ebaaba.xyz</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="row">
							<div className="col-md-2">
								<span><i className="fa fa-phone"></i></span>
							</div>
							<div className="col-md-10">
								<h4>Phone Support</h4>
								<p>+220-3911176 / +220-3727652</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
                        <h4>Get Latest Deals</h4>
						<p>Our best promotions sent to your inbox.</p>
					</div>
					<div className="col-md-3">
						<form>
							<input type="text" placeholder="Email Address" name="subscribe" />
							<input type="submit" value="Subscribe" />
						</form>
					</div>
				</div>
			 </div>
			 </div>

			 <div className="footer">
				 <div className="footer-inner">
					 <div className="row">
						 <div className="col-md-2">
                             <h4>ABOUT eBaaba</h4>
							 <ul>
								 <li>Contact Us</li>
								 <li>About Us</li>
								 <li>Careers</li>
								 <li>Blog</li>
								 <li>Forum</li>
								 <li>Terms & Conditions</li>
							 </ul>
						 </div>
						 <div className="col-md-2">
							 <h4>PAYMENT</h4>
							 <ul>
								 <li>Visa</li>
								 <li>MasterCard</li>
								 <li>Paypal</li>
								 <li>Skrill</li>
							 </ul>
						 </div>
						 <div className="col-md-2">
							 <h4>BUYER SAFETY</h4>
							 <ul>
								 <li>Buyer Safety Center</li>
								 <li>FAQs</li>
								 <li>Delivery</li>
								 <li>Konga Return Policy</li>
								 <li>Digital Services</li>
								 <li>Bulk Purchase</li>
							 </ul>
						 </div>
						 <div className="col-md-2">
						 	<h4>MORE INFO</h4>
							 <ul>
								 <li>Site Map</li>
								 <li>Track Order</li>
								 <li>Privacy Policy</li>
								 <li>Item Policy</li>
								 <li></li>
							 </ul>
						 </div>
						 <div className="col-md-1"></div>
						 <div className="col-md-3">
							 <h4>Connect With Us</h4>
							 <i className="fa fa-facebook"></i>
							 <i className="fa fa-instagram"></i>
							 <i className="fa fa-twitter"></i>
						 </div>

					 </div>
				 </div>
			 </div>

			 <div className="copyright-area">
				<div className="copyright-inner">
					<footer>Copyright &copy; 2020 eBaaba.xyz. All Rights Reserved.</footer>
				</div>
			 </div>
	    </div>
		  
    )
}

export default Footer;
