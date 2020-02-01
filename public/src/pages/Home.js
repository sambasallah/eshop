import React from 'react';

const Home = () => {
    return (
     <div>
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
                <h1>classNameic Summer Wears</h1>
                <a href="shop" className="shop-btn">SHOP NOW</a>
            </div>
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src={require("../media/images/banner3.jpg")} alt="Third slide" />
		       <div className="text-content">
                <h1>classic Women Wears</h1>
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
    )
}

export default Home;