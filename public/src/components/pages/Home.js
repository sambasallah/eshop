import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import { connect } from 'react-redux';
import { getProductByID } from '../../actions/productActions';

const MobilePhone = ({ value, getProductByID, products }) => {
	return (
		<>
		<div className="item">
			<div className="product-img">
				<img  src={JSON.parse(value.url)[0]} style={{maxWidth: '100%', maxHeight: '100%'}} />
			</div>
			<div className="product-description">
				<h6><a href={value.slug } 
				onClick={ () => { getProductByID(products, value.id) } }>
					{ value.name } - { 'D' + new Intl.NumberFormat().format(value.sale_price)}</a></h6>
			</div>
	 </div>
	 </>
	)
}

const Home = (props) => {

	const [mobilePhones, setMobilePhones] = useState([]);
	const [trending, setTrending] = useState([]);
	const [recommended, setRecommended] = useState([]);

	const params = {
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1
			},
			340: {
				slidesPerView: 1,
				slidesPerGroup: 1
			},
			500 : {
				slidesPerView: 1,
				slidesPerGroup: 1
			},
			640: {
			  slidesPerView: 2,
			  slidesPerGroup: 2
			},
			768: {
			  slidesPerView: 4,
			  spaceBetween: 40,
			},
			1024: {
			  slidesPerView: 5,
			  spaceBetween: 50,
			}
		}
	  }


	  const getAllMobilePhones = async () => {
		  let url = 'http://localhost:8000/api/v1/mobile-phones';
		  let response = await fetch(url);
		  let data = await response.json();

		  if(data) {
			  setMobilePhones([...mobilePhones, ...data]);
		  }
	  }

	  const getTrendingProducts = async () => {
		let url = 'http://localhost:8000/api/v1/trending-products';
		let response = await fetch(url);
		let data = await response.json();

		if(data) {
			setTrending([...trending, ...data]);
		}
	}

	 const getRecommendedProducts = async () => {
		 let url = 'http://localhost:8000/api/v1/recommended-products';
		 let response = await fetch(url);
		 let data = await response.json();

		 if(data) {
			 setRecommended([...recommended, ...data]);
		 }

	 }

	useEffect(() => {
		getAllMobilePhones();
		getTrendingProducts();
		getRecommendedProducts();
	}, []);

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
					<h1>Men Office Wears</h1>
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

		 <div className="category">
		<div className="category-tile">
			<h4>Trending <img src={require('../../media/icons/trending.png')} /></h4>
		</div>
		 { trending.length > 1? (
			 <>
			<Swiper {...params} key={trending.length}>
			{ trending.map((value, index) => {
				return (
				  <div className="swiper-slide" key={index}>
					  <MobilePhone value={value} getProductByID={ props.getProductByID } 
				products={ trending } key={ index } />
				  </div>
				)	 
			})}
			</Swiper>
			 </>
		 ) : (
			 <>
			  <Swiper {...params}>
			  		<div className="loading-item"></div>
					<div className="loading-item"></div>
					<div className="loading-item"></div>
					<div className="loading-item"></div>
					<div className="loading-item"></div>
			  </Swiper>
			 </>
		 )}
	 </div>



	 <div className="category">
		<div className="category-tile">
			<h4>Mobile Phones <img src={require('../../media/icons/mobile.png')} /></h4>
		</div>
		
		 { mobilePhones.length > 1? (
			 <>
			 <Swiper {...params} key={mobilePhones.length}>
			{ mobilePhones.map((value, index) => {
				return (
				  <div className="swiper-slide" key={index}>
					  <MobilePhone value={value} getProductByID={ props.getProductByID } 
				products={ mobilePhones } key={ index } />
				  </div>
				)	 
			})}
			</Swiper>
			 </>
		 ): (
			 <>
			  <Swiper {...params}>
			  		<div className="loading-item"></div>
					<div className="loading-item"></div>
					<div className="loading-item"></div>
					<div className="loading-item"></div>
					<div className="loading-item"></div>
			  </Swiper>
			</>
		 )}
	  
	 </div>
	 
	 <div className="latest-deals">
		 <h2>Recommended for you <a href="/shop" className="see-all">See All Items</a></h2>
		 <div className="deals">
		 <div className="row">
			{ recommended.length >= 1? (
				 recommended.map((value) => {
					 return(
						<>
						<div className="col-md-4">
							<div className="deal">
								<div className="deal-info">
									<div className="row">
										<div className="col-md-3 left">
											<img src={JSON.parse(value.url)[0]} style={{ maxWidth : '100%', maxHeight: '100%'}}/>
										</div>
										<div className="col-md-9">
											<p><a href={value.slug } 
												onClick={ () => { props.getProductByID(recommended, value.id) } }>{ value.name }</a></p>
											<h6>{ 'D' + Intl.NumberFormat().format(value.sale_price)} <span className="sale-price" style={{paddingLeft: '5px'}}>{ 'D' + Intl.NumberFormat().format(value.regular_price)}</span></h6>
											<span className="amount-saved">You saved 
											{ 'D' + Intl.NumberFormat().format(Number(value.regular_price) - Number(value.sale_price))}</span>
										</div>	
									</div>	
								</div>	
							</div> 
						</div>
					</>
					 )
				 })
			) : ('Loading')}
			
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

const mapStateToProps = (state) => (
	{}
); 

export default connect(mapStateToProps, { getProductByID })(Home);