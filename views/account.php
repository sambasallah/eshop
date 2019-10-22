<?php require_once('../inc/header.php'); ?>
<?php require_once('../inc/breadcrumb.php'); ?>

<div class="account">
    <div class="account_container">
        <div class="row">
            <div class="col-md-4">
                <div class="account_info">
                    <img src="media/images/b5.jpg" alt="profile" class="profile_pic">
                    <ul class="nav flex-column">
                        <li><a href="#dashboard" data-toggle="tab" class="nav-link active"><i class="fa fa-tachometer-alt"></i> Dashboard</a></li>
                        <li><a href="#account_info" data-toggle="tab" class="nav-link"><i class="fa fa-user"></i> Account Information</a></li>
                        <li><a href="#orders" data-toggle="tab" class="nav-link"><i class="fa fa-gift"></i> Orders</a></li>
                        <li><a href="home.php" class="nav-link"><i class="fa fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-8">
                <div class="tab-content">
                    <div class="tab-pane container active" id="dashboard">
                        <div class="jumbotron">
                            <h2>Welcome User</h2>
                        </div>
                    </div>
                    <div class="tab-pane container" id="account_info">
                        <h2>Account Information</h2>
                        <form action="" method="post" enctype="multipart/form-data">
                            <input type="text" name="name" placeholder="Full Name">
                            <input type="text" name="email" placeholder="Email">
                            <input type="text" name="username" placeholder="Username">
                            <input type="password" name="password" placeholder="Password">
                            <input type="password" name="password-repeat" placeholder="Repeat Password">
                            <input type="file"> <br>
                            <a href="#" type="submit">Update Profile</a>
                        </form>
                    </div>
                    <div class="tab-pane container" id="orders">
                        <h2>My Orders</h2>
                        <table class="table table-responsive">
    <thead>
      <tr>
        <th width="50%">Item Details</th>
        <th width="20%">Quantity</th>
        <th width="20%">Item Price</th>
        <th width="10%">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
            
            <h6><img src="media/images/b6.jpg" alt="" width="40px" height="40px"> <span>Bag</span></h6>
        </td>
        <td>
            <b>1</b>
        </td>
        <td>
            <h5>D12,000</h5>
            <sub>D12,000 x 1 Item</sub>
        </td>
        <td>
           <b class="pending">Pending</b>
        </td>
      </tr>
      <tr>
        <td>
            
            <h6><img src="media/images/b6.jpg" alt="" width="40px" height="40px"> <span>Bag</span></h6>
        </td>
        <td>
       <b>2</b>
        </td>
        <td>
            <h5>D12,000</h5>
            <sub>D12,000 x 1 Item</sub>
        </td>
        <td>
            <b class="shipped">Shipped</b>
        </td>
      </tr>
    </tbody>
  </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once('../inc/footer.php'); ?>