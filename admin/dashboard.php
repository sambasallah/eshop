<?php require_once('inc/header.php'); ?>
<?php require_once('inc/breadcrumb.php'); ?>
<div class="dashboard">
    <div class="dashboard_container">
        <div class="row">
            <div class="col-md-3">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item"><a href="#dashboard" data-toggle="tab" class="nav-link active">Dashboard <i class="fa fa-tachometer-alt"></i></a></li>
                    <li class="nav-item"><a href="#orders" data-toggle="tab" class="nav-link">Orders <i class="fa fa-store"></i></a></li>
                    <li class="nav-item"><a href="#revenue" data-toggle="tab" class="nav-link">Revenue <i class="fa fa-chart-line"></i></a></li>
                    <li class="nav-item"><a href="#message" data-toggle="tab" class="nav-link">Messages <i class="fa fa-envelope"></i></a></li>
                    <li class="nav-item"><a href="#product" data-toggle="tab" class="nav-link">Products <i class="fa fa-tshirt"></i></a></li>
                    <li class="nav-item"><a href="#user" data-toggle="tab" class="nav-link">Users <i class="fa fa-user"></i></a></li>
                    <li class="nav-item"><a href="#blog" data-toggle="tab" class="nav-link">Blog <i class="fa fa-edit"></i></a></li>
                </ul>
            </div>
            <div class="col-md-9">
                <div class="tab-content">
                    <div class="tab-pane active container" id="dashboard">
                        <div class="dashboard_content">
                            <h2>Analytic Overview</h2>
                            <div class="row">
                                <div class="col-md-4">
                                   <div class="live_visitors">
                                   <h5>Live Vistors</h5>
                                    <h6>10 <i class="fa fa-eye"></i></h6>
                                   </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="orders">
                                    <h5>Daily Orders</h5>
                                    <h6>GMD12,000 <i class="fa fa-coins"></i></h6>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                   <div class="total_sales">
                                        <h5>Total Sales</h5>
                                        <h6>GMD60,0000 <i class="fa fa-money-bill-alt"></i></h6>
                                   </div>
                                </div>
                            </div>
                            <div class="clear_both"></div>
                            <div class="row">
                                <div class="col-md-12">
                                <div class="chart_container">
                                   <div class="card">
                                   <div class="card-body">
                                        <canvas id="weekly_sales_chart" style="height: 250px;">

                                        </canvas>
                                    </div>
                                   </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane container" id="orders">
                        <div class="orders_content">
                        <h2>Orders</h2>
                    <table class="table table-responsive">
                        <thead>
                        <tr>
                            <th width="35%">Item Details</th>
                            <th width="10%">Quantity</th>
                            <th width="30%">Item Price</th>
                            <th width="10%">Edit/Delete</th>
                            <th width="15%">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>  
                                <h6><img src="media/images/b6.jpg" alt="" width="40px" height="40px"> <span>Bag</span></h6>
                            </td>
                            <td>
                        <h6 class="qty_cart"><b>2</b></h6>
                            </td>
                            <td>
                                <h5>D12,000</h5>
                                <sub>D12,000 x 1 Item</sub>
                            </td>
                            <td>
                                <button><a href="#"><i class="fa fa-trash"></i></a></button>
                                <button><a href="#"><i class="fa fa-edit"></i></a></button>
                            </td>
                            <td>
                                <select name="" id="" class="form-control">
                                    <option value="selected">status</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                
                                <h6><img src="media/images/b6.jpg" alt="" width="40px" height="40px"> <span>Bag</span></h6>
                            </td>
                            <td>
                            <h6 class="qty_cart"><b>2</b></h6>
                            </td>
                            <td>
                                <h5>D12,000</h5>
                                <sub>D12,000 x 1 Item</sub>
                            </td>
                            <td>
                                <button><a href="#"><i class="fa fa-trash"></i></a></button>
                                <button><a href="#"><i class="fa fa-edit"></i></a></button>
                            </td>
                            <td>
                                <select name="" id="" class="form-control">
                                    <option value="selected">status</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                        </div>
                        
					<ul class="pagination justify-content-center">
			  			<li class="page-item"><a class="page-link" href="#">Previous</a></li>
			  			<li class="page-item"><a class="page-link" href="#">1</a></li>
			  			<li class="page-item"><a class="page-link" href="#">2</a></li>
			  			<li class="page-item"><a class="page-link" href="#">3</a></li>
			  			<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
				
                    </div>
                    <div class="tab-pane container" id="revenue">
                        <h1>Revenue</h1>
                    </div>
                    <div class="tab-pane container" id="message">
                    <div class="message_content">
                        <h2>Messages</h2>
                    <table class="table table-responsive">
                        <thead>
                        <tr>
                            <th width="35%">Message</th>
                            <th width="20%">Email</th>
                            <th width="10%">Name</th>
                            <th width="10%">Subject</th>
                            <th width="10%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>  
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias amet quos veritatis quae quibusdam, reiciendis optio nemo nulla dolorum quidem dolores inventore soluta excepturi ipsa at. Eos, incidunt. Repellendus, esse.</p>
                            </td>
                            <td>
                                <h6>sambasallah10@gmail.com</h6>
                            </td>
                            <td>
                                <h6>Samba Sallah</h6>
                            </td>
                            <td>
                                <h6>Order Failure</h6>
                            </td>
                            <td>
                                <button><a href="#"><i class="fa fa-trash"></i></a></button>
                                <button><a href="#"><i class="fa fa-edit"></i></a></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <ul class="pagination justify-content-center">
			  			<li class="page-item"><a class="page-link" href="#">Previous</a></li>
			  			<li class="page-item"><a class="page-link" href="#">1</a></li>
			  			<li class="page-item"><a class="page-link" href="#">2</a></li>
			  			<li class="page-item"><a class="page-link" href="#">3</a></li>
			  			<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
                    </div>
                    <div class="tab-pane container" id="product">
                    <div class="product_content">
                        <div class="row">
                            <div class="col-md-9">
                                <h2>Products</h2>
                            </div>
                            <div class="col-md-3 add_products" text-align="right">
                                <h5><button>Add Product <i class="fa fa-edit"></i></button></h5>
                            </div>
                        </div>
                    <table class="table table-responsive">
                        <thead>
                        <tr>
                            <th width="15%">Name</th>
                            <th width="35%">Description</th>
                            <th width="10%">Price</th>
                            <th width="10%">Category</th>
                            <th width="10%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>  
                                <h6><img src="media/images/b6.jpg" width="50" height="50">Bag</h6>
                            </td>
                            <td>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident laudantium aut unde dolore. Ipsam provident excepturi repudiandae! Consequuntur eligendi dolorem ipsa in nemo praesentium et maxime cum natus magnam.</p>
                            </td>
                            <td>
                                <h6>GMD2000</h6>
                            </td>
                            <td>
                                <h6>Accessories</h6>
                            </td>
                            <td>
                                <button><a href="#"><i class="fa fa-trash"></i></a></button>
                                <button><a href="#"><i class="fa fa-edit"></i></a></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <ul class="pagination justify-content-center">
			  			<li class="page-item"><a class="page-link" href="#">Previous</a></li>
			  			<li class="page-item"><a class="page-link" href="#">1</a></li>
			  			<li class="page-item"><a class="page-link" href="#">2</a></li>
			  			<li class="page-item"><a class="page-link" href="#">3</a></li>
			  			<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
                    </div>
                    <div class="tab-pane container" id="user">
                    <div class="user_content">
                        <h2>Users</h2>
                    <table class="table table-responsive">
                        <thead>
                        <tr>
                            <th width="35%">Username</th>
                            <th width="20%">Email</th>
                            <th width="10%">Password</th>
                            <th width="10%">Type</th>
                            <th width="10%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>  
                               <h6>sambasallah10</h6>
                            </td>
                            <td>
                                <h6>sambasallah10@gmail.com</h6>
                            </td>
                            <td>
                                <h6>********</h6>
                            </td>
                            <td>
                                <h6>Customer</h6>
                            </td>
                            <td>
                                <button><a href="#"><i class="fa fa-trash"></i></a></button>
                                <button><a href="#"><i class="fa fa-edit"></i></a></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <ul class="pagination justify-content-center">
			  			<li class="page-item"><a class="page-link" href="#">Previous</a></li>
			  			<li class="page-item"><a class="page-link" href="#">1</a></li>
			  			<li class="page-item"><a class="page-link" href="#">2</a></li>
			  			<li class="page-item"><a class="page-link" href="#">3</a></li>
			  			<li class="page-item"><a class="page-link" href="#">Next</a></li>
					</ul>
                    </div>
                    <div class="tab-pane container" id="blog">
                    <div class="message_content">
                        <h2>Blog</h2>
                    <table class="table table-responsive">
                        <thead>
                        <tr>
                            <th width="60%">Content</th>
                            <th width="25%">Title</th>
                            <th width="15%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>  
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias amet quos veritatis quae quibusdam, reiciendis optio nemo nulla dolorum quidem dolores inventore soluta excepturi ipsa at. Eos, incidunt. Repellendus, esse.</p>
                            </td>
                            <td>
                                <h6>Rise of online stores</h6>
</td>
                            <td>
                                <button><a href="#"><i class="fa fa-trash"></i></a></button>
                                <button><a href="#"><i class="fa fa-edit"></i></a></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
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

<?php require_once('inc/footer.php'); ?>