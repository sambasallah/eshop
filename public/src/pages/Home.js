import React from 'react';

const Home = () => {
    return (
     <div>
		 <div className="home">
		 <div className="carousel-container">
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
		 <ol className="carousel-indicators">
		    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		    <li data-target="#myCarousel" data-slide-to="1"></li>
		    <li data-target="#myCarousel" data-slide-to="2"></li>
  		</ol>
		  <div className="carousel-inner text-center">
		    <div className="carousel-item active">
		      <img className="d-block w-100 img-responsive" src={require('../media/images/banner1.jpg') } alt="First slide" />
		      <div className="text-content responsive">
                <h1>Summer Discount Offer!</h1>
                <a href="shop" className="shop-btn">SHOP NOW</a>
            </div>
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src={require("../media/images/banner2.jpg")} alt="Second slide" />
		       <div className="text-content">
                <h1>Classic Summer Wears</h1>
                <a href="shop" className="shop-btn">SHOP NOW</a>
            </div>
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src={require("../media/images/banner3.jpg")} alt="Third slide" />
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
	 
	 <div className="latest-deals">
		 <h2>Latest Deals</h2>
		 <div className="deals">
		 <div className="row">
			<div className="col-md-4">
				<div className="deal">
					<div className="deal-info">
						<div className="row">
							<div className="col-md-3">
								<img src={require('../media/images/coat.jpg')} style={{ width : '100%', height : '100%'}}/>
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
								<img src={require('../media/images/chemise1.jpg')} style={{ width : '100%', height : '100%'}}/>
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
								<img src={require('../media/images/derby-shoe.jpg')} style={{ width : '100%', height : '100%'}}/>
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
								<img src={require('../media/images/female-top.jpg')} style={{ width : '100%', height : '100%'}}/>
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
								<img src={require('../media/images/shirt3.jpg')} style={{ width : '100%', height : '100%'}}/>
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
								<img src={require('../media/images/chemise3.jpg')} style={{ width : '100%', height : '100%'}}/>
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
		
	 <div className="popular-categories">
		 <h2>Popular Categories</h2>
		 <div className="categories">
			 <div className="row">
				 <div className="col-md-3">1</div>
				 <div className="col-md-3">2</div>
				 <div className="col-md-3">3</div>
				 <div className="col-md-3">4</div>
			 </div>
		 </div>
	 </div>
	 </div>
	
     </div>   
    )
}

export default Home;