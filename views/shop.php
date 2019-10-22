<?php require_once('../inc/header.php'); ?>

<?php require_once('../inc/breadcrumb.php'); ?>

<div class="display_products">
	<div class="display_width">
		<div class="row">
		<div class="col-md-3">
			<form action="" method="post">
			<div class="input-group search_form">
				<input class="form-control py-2" type="search" placeholder="search" id="example-search-input">
				<span class="input-group-append">
					<button class="btn btn-outline-secondary" type="submit">
						<i class="fa fa-search"></i>
					</button>
				</span>
			</div>
			</form>
			<h5>All Categories</h5>
			<ul>
				<li></i>Men's Shirts</li>
				<li>Women's Cloths</li>
				<li>Men's Shoes</li>
				<li>Women's Bags</li>
				<li>Men's Bags</li>
			</ul>
			<h5>Price</h5>
			<div class="slidecontainer">
  				<input type="range" min="1" max="100" value="0" class="slider" id="price_range">
			</div>
			<p id="show_price"></p>
			<h5>Sizes</h5>
		
				<form>
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="customCheck" >
						<label class="custom-control-label" for="customCheck">Small</label>
					</div>
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="customCheck2">
						<label class="custom-control-label" for="customCheck2">Medium</label>
					</div>
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="customCheck3">
						<label class="custom-control-label" for="customCheck3">Large</label>
					</div>
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="customCheck4">
						<label class="custom-control-label" for="customCheck4">Xtra Large</label>
					</div>

				</form>
				 
			
		</div>
		<div class="col-md-9">
			<div class="products">
				<div class="row">
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b5.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>	
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b6.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b7.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b8.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>
					</div>
				</div>
			</div>
		</div>
			</div>
			<div class="products">
				<div class="row">
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b5.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b6.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b7.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card" >
					<img src="media/images/b8.jpg" width="100%">
					<div class="card-body">
					<h5>Office Wear </h5> 
						<h6>D400 <sup class="grey"><del>D450</del></sup> </h6>
						<span class="save_amount">You save D50</span>	
					</div>
				</div>
			</div>
		</div>
		</div>
			<div class="col-md-12 products" align="center">	
				<div>
					<ul class="pagination justify-content-center">
			  			<li class="page-item"><a class="page-link" href="#">Previous</a></li>
			  			<li class="page-item"><a class="page-link" href="#">1</a></li>
			  			<li class="page-item"><a class="page-link" href="#">2</a></li>
			  			<li class="page-item"><a class="page-link" href="#">3</a></li>
			  			<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
				</div>
			</div>	
		</div>
	</div>
	</div>
</div>
<?php require_once('../inc/footer.php'); ?>