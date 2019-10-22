<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dashboard</title>
    <!-- script -->
    <script type="text/javascript" src="assets/js/jquery-3.4.1.min.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/js/Chart.min.js"></script>
	<script type="text/javascript" src="assets/js/main.js"></script>
	
    <!-- style -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/all.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/Chart.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">	
</head>
<body>
<div class="main_nav">
   		<nav class="navbar navbar-expand-md navbar-bg-color fixed-top">
  			<div class="container">
			  <!-- Toggler/collapsibe Button -->
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			    <span>
				<i class="fa fa-bars"></i>
				</span>
              </button>
            <!-- Brand -->
			  <a class="navbar-brand justify-content-end" href="./">eShop</a>
			  <!-- Navbar links -->
			  <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
			    <ul class="navbar-nav nav">
			      <li class="nav-item dropdown">
			      	<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbardrop">
			      			<i class="fa fa-bell"></i>
						  <span class='badge badge-warning' id='lblCartCount'> 5 </span>
					  </a>
					  <div class="dropdown-menu">
							  <a href="#orders" data-toggle="tab" class="dropdown-item">1 new order</a>
							  <a href="#" class="dropdown-item">1 new review</a>
						  </div>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><img src="../media/images/b5.jpg" alt="" width="20px" heigth="20px" style="border-radius: 5px"></a>
			        <div class="dropdown-menu">
						<a class="dropdown-item" href="#">Logout</a>
					</div>
			      </li>
			    </ul>
			  </div> 
  			</div>
		</nav>	
	</div>