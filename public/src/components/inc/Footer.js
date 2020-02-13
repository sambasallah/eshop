import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="newsletter">
		<div className="newsletter_container" id="newsletter">
			<div className="row">
			<div className="col-md-6 col-sm-12">
				<h3>Newsletter</h3>
				<p>Subscribe to our newsletter and get 5% off your first purchase</p>
			</div>
			<div className="col-md-6 col-sm-12">
				<input type="text" name="" placeholder="Enter your email" />
				<button>Subscribe</button>
			</div>
		</div>
		</div>
	</div>
	<div className="footer_section">
		<div className="footer_container">
			<div className="row">
			<div className="col-md-3 footer_padding">
				<h3>eShop</h3>
				<p>eShop is the best online marketplace in the Gambia</p>
				<p><i className="fa fa-envelope"></i> support@eshop.com</p>
				<p><i className="fa fa-phone"></i> +220-3000000 / +220-7000000</p>
			</div>
			<div className="col-md-3 footer_padding">
				<h3>About eShop</h3>
				<ul>
					<li><a href="contact">Contact Us</a></li>
					<li><a href="about">About Us</a></li>	
					<li><a href="blog">Our Blog</a></li>
					<li>Terms & Condition</li>
				</ul>
			</div>
			<div className="col-md-3 footer_padding">
				<h3>Buyer Safety</h3>
				<ul>	
					<li>Buyer Safety</li>
					<li>Delivery</li>
					<li>Return Policy</li>
				</ul>
			</div>
			<div className="col-md-3 footer_padding">
				<h3>More Info</h3>
				<ul>	
					<li>Track My Order</li>
					<li>Privacy Policy</li>
					<li>Become a seller</li>
				</ul>
			</div>
		</div>
		</div>
		<footer>Copyright &copy; 2020. eShop Gambia</footer>
	</div>
        </div>
    )
}

export default Footer;
