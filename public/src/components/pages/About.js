import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
			<Helmet>
			 <title>About Us | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-container">
                    <h2>About Us</h2>
                </div>
            </div>
            <div className="about">
	<div className="about-container">
		<div className="row">
			<div className="col-md-3">
				<div className="nav-tab-container-about">	
						<ul className="nav nav-pills flex-column">
		  			<li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#about">Company Overview</a></li>
		  			<li className="nav-item"><a className="nav-link" data-toggle="tab" href="#mission_vission">Culture & Values</a></li>
				</ul>
				</div>	
			</div>
			<div className="col-md-9">
				<div className="tab-content">	
					<div className="tab-pane active container about-content" id="about">
					<h3>Company Overview</h3>
						<p>

						eshop is the Gambia's largest online mall. We launched in September 2019 and our mission is to become the engine of commerce and trade in Africa. </p>

						<p>We serve a retail customer base that continues to grow exponentially, offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances, Books, healthcare, Baby Products, personal care and much more. </p>	

						<p>Our range of services are designed to ensure optimum levels of convenience and customer satisfaction with the retail process; these services include our lowest price guarantee, 7-day free return policy*, order delivery-tracking, dedicated customer service support and many other premium services. </p>	

						<p>As we continue to expand the mall, our scope of offerings will increase in variety, simplicity and convenience; join us and enjoy the increasing benefits. </p>	

						<p>We are highly customer-centric and are committed towards finding innovative ways of improving our customers' shopping experience with us; so give us some feedback on help@eshop.com. For any press related questions, kindly send us an email at press@eshop.com. </p>	

						<p>Thank you and we hope you enjoy your experience with us.</p>
					</div>
					<div className="tab-pane container about-content" id="mission_vission">
						<h3>Our Mission</h3>
						<p>To be the Engine of Commerce & Trade in Africa.</p>
						<h3>Our Vission</h3>
						<p>To be a powerful force for the Economic Growth of Africa</p>
						<p>To connect Africans with each other and the rest of the world through Technology & Commerce.</p>
						<p>To be a company that employees, customers & society are proud of and depend on.</p>
						<h3>Our Values</h3>
						<p>Satisfied customers are essential to our success. There are no kings in eshop Only servants of the customer.</p>
						<p>We embrace hard work. We understand that it is only through pushing ourselves beyond our limits of comfort that we become better as individuals and as a company.</p>
						<p>We are open, honest and trustworthy in all our dealings.</p>
					</div>
				</div>	
			</div>
		</div>	
	</div>
</div>
        </div>
    )
}

export default About;
