import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
     <div>
		 <Helmet>
			 <title>Home | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
		 <div className="home">
			 <div className="home-inner">
		 <div className="carousel-container">
			 <div className="row">
				 <div className="col-md-12">
				 <div id="myCarousel" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
			<div className="carousel-inner text-center">
				<div className="carousel-item active">
				<img className="d-block w-100 img-responsive" src={require('../../media/images/banner1.jpg') } alt={"First Slide"} />
				<div className="text-content responsive">
					<h1>Summer Discount Offer!</h1>
					<a href="shop" className="shop-btn">SHOP NOW</a>
				</div>
				</div>
				<div className="carousel-item">
				<img className="d-block w-100" src={require("../../media/images/banner2.jpg")} alt="Second slide" />
				<div className="text-content">
					<h1>Classic Summer Wears</h1>
					<a href="shop" className="shop-btn">SHOP NOW</a>
				</div>
				</div>
				<div className="carousel-item">
				<img className="d-block w-100" src={require("../../media/images/banner3.jpg")} alt="Third slide" />
				<div className="text-content">
					<h1>Classic Women Wears</h1>
					<a href="shop" className="shop-btn">SHOP NOW</a>
				</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
					</div>
					</div>
				</div>
	     </div>
	 
	 <div className="latest-deals">
		 <h2>Recommended for you <Link to="/shop" className="see-all">See All Items</Link></h2>
		 <div className="deals">
		 <div className="row">
			<div className="col-md-4">
				<div className="deal">
					<div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../../media/images/coat.jpg')} style={{ width : '100%'}}/>
							</div>
							<div className="col-md-9">
								<p>Winter Coat</p>
								<h6>GMD4,000 <span className="sale-price">GMD5,000</span></h6>
								<span className="amount-saved">You saved GMD500</span>
							</div>	
						</div>	
					</div>	
				</div> 
			</div>
			<div className="col-md-4">
				<div className="deal">
				<div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../../media/images/chemise1.jpg')} style={{ width : '100%'}}/>
							</div>
							<div className="col-md-9">
								<p>Chemise</p>
								<h6>GMD800 <span className="sale-price">GMD1,000</span></h6>
								<span className="amount-saved">You saved GMD200</span>
							</div>	
						</div>	
					</div>	
				</div> 
			</div>
			<div className="col-md-4">
				<div className="deal">
				<div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../../media/images/derby-shoe.jpg')} style={{ width : '100%'}}/>
							</div>
							<div className="col-md-9">
								<p>Leather Derby Shoe</p>
								<h6>GMD2,400 <span className="sale-price">GMD3,000</span></h6>
								<span className="amount-saved">You saved GMD600</span>
							</div>	
						</div>	
					</div>		
				</div> 
			</div>
		 </div>
		 <div className="row">
			<div className="col-md-4">
				<div className="deal">
				<div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../../media/images/female-top.jpg')} style={{ width : '100%'}}/>
							</div>
							<div className="col-md-9">
								<p>Female Top</p>
								<h6>GMD600 <span className="sale-price">GMD900</span></h6>
								<span className="amount-saved">You saved GMD200</span>
							</div>	
						</div>	
					</div>		
				</div> 
			</div>
			<div className="col-md-4">
				<div className="deal">
				<div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../../media/images/shirt3.jpg')} style={{ width : '100%'}}/>
							</div>
							<div className="col-md-9">
								<p>Men Shirt</p>
								<h6>GMD700 <span className="sale-price">GMD900</span></h6>
								<span className="amount-saved">You saved GMD200</span>
							</div>	
						</div>	
					</div>	
				</div> 
			</div>
			<div className="col-md-4">
			   <div className="deal">
			   <div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../../media/images/chemise3.jpg')} style={{ width : '100%'}}/>
							</div>
							<div className="col-md-9">
								<p>Chemise</p>
								<h6>GMD800 <span className="sale-price">GMD1100</span></h6>
								<span className="amount-saved">You saved GMD300</span>
							</div>	
						</div>	
					</div>	   
				</div>  
			</div>
		 </div>
		 </div>
	 </div>
		
	 <div className="trending-category">
		 <div className="trend-title">
			 <h4>Trending Products</h4>
		 </div>
		 <div className="trending-products">
			<div className="row">
				<div className="col-md-2">
					<div className="trend-img">
						<img  src={require('../../media/images/shirt3.jpg')} style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
					<div className="trend-description">
						<h5>Men Shirt</h5>
						<h6>D500 <sup><del>D700</del></sup></h6>
					</div>
				</div>
				<div className="col-md-2">
						<div className="trend-img">
							<img  src={require('../../media/images/derby-shoe.jpg')} style={{maxWidth: '100%', maxHeight: '100%'}} />
						</div>
						<div className="trend-description">
							<h5>Derby Shoe</h5>
							<h6>D2500 <sup><del>D3000</del></sup></h6>
						</div>
				</div>
				<div className="col-md-2">
					<div className="trend-img">
						<img  src={require('../../media/images/chemise3.jpg')} style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
					<div className="trend-description">
						<h5>Lacoste Chemise</h5>
						<h6>D900 <sup><del>D1200</del></sup></h6>
					</div>
				</div>
				<div className="col-md-2">
					<div className="trend-img">
						<img  src={require('../../media/images/m7.jpg')} style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
					<div className="trend-description">
						<h5>Men Watch</h5>
						<h6>D1000 <sup><del>D1500</del></sup></h6>
					</div>
				</div>
				<div className="col-md-2">
					<div className="trend-img">
						<img  src={require('../../media/images/b7.jpg')} style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
					<div className="trend-description">
						<h5>Women Bag</h5>
						<h6>D1000 <sup><del>D1500</del></sup></h6>
					</div>
				</div>
				<div className="col-md-2">
					<div className="trend-img">
						<img  src={require('../../media/images/coat.jpg')} style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
					<div className="trend-description">
						<h5>Coat</h5>
						<h6>D400 <sup><del>D450</del></sup></h6>
					</div>
				</div>
			</div>
		 </div>
	 </div>

		
	 <div className="about-eBaaba">
		 <h2>eBaaba Gambia's No. 1 Online Shopping Platform</h2>
		 <p>
		 eBaaba.xyz is Gambia’s number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.
		 </p>
	 </div>

	 <div className="end"></div>

	 </div>
	 </div>
     </div>   
    )
}

export default Home;