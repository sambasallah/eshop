import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductByID } from '../../actions/productActions';

const MobilePhone = ({ value, getProductByID, products }) => {
	return (
		<>
		<div className="item">
			<div className="product-img">
				<Link to={value.slug} onClick={ () => getProductByID(products, value.id) }><img  src={JSON.parse(value.url)[0]} style={{maxWidth: '100%', maxHeight: '100%'}} /></Link>
			</div>
			<div className="product-description">
				<h6><Link to={value.slug } 
				onClick={ () => { getProductByID(products, value.id) } }>
					{ value.name } - { 'D' + new Intl.NumberFormat().format(value.sale_price)}</Link></h6>
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
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
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
				slidesPerView: 2,
				slidesPerGroup: 2
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
		  let url = '';
		  if(process.env.NODE_ENV === 'development') {
			 url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/mobile-phones';
		  } else {
			 url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/mobile-phones';
		  }  
		   
		  let response = await fetch(url);
		  let data = await response.json();

		  if(data) {
			  setMobilePhones([...mobilePhones, ...data]);
		  }
	  }

	  const getTrendingProducts = async () => {
		let url = '';
		if(process.env.NODE_ENV === 'development') {
		   url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/trending-products';
		} else {
		   url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/trending-products';
		}  
		let response = await fetch(url);
		let data = await response.json();

		if(data) {
			setTrending([...trending, ...data]);
		}
	}

	 const getRecommendedProducts = async () => {
		let url = '';
		 if(process.env.NODE_ENV === 'development') {
			url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/recommended-products';
		 } else {
			url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/recommended-products';
		 }
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
			 <div className="row carousel-row">
			 <div className="col-md-9">
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
			<div className="col-md-3 sidebar-carousel">
					{/* <div className="row"></div> */}
					<div className="sidebar-img">
						<img src={require('../../media/images/woman.jpg')} 
						style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
					<div className="sidebar-img">
						<img src={require('../../media/images/shoe.jpg')} 
						style={{maxWidth: '100%', maxHeight: '100%'}} />
					</div>
				</div>
		</div>
	</div>

		 <div className="category">
		<div className="category-title">
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
		<div className="category-title">
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
											<p><Link to={value.slug } 
												onClick={ () => { props.getProductByID(recommended, value.id) } }>{ value.name }</Link></p>
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