<?php require_once('../inc/header.php'); ?>
<?php require_once('../inc/breadcrumb.php'); ?>

<div class="cart">
    <div class="cart_container">
        <div class="row">
            <div class="col-md-9">
            <table class="table table-responsive">
    <thead>
      <tr>
        <th width="50%">Item Details</th>
        <th width="10%">Quantity</th>
        <th width="30%">Item Price</th>
        <th width="10%">Action</th>
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
            <h6 class="delete"><a href="#"><i class="fa fa-trash"></i></a></h6>
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
           <h6 class="delete"> <a href="#"><i class="fa fa-trash"></i></a></h6>
        </td>
      </tr>
    </tbody>
  </table>
            </div>
            <div class="col-md-3">
                <div class="cart_details">
                    <ul>
                        <li><h6>Order Summary</h6></li>
                        <li><h6>1 Item</h6></li>
                    </ul>
                    <hr>
                    <ul>
                        <li><sub>Subtotal</sub></li>
                        <li><h6>D12,000</h6></li>
                    </ul>
                    <hr>
                    <ul>
                        <li><h6>Total</h6></li>
                        <li><h6>D12,000</h6></li>
                    </ul>
                    <hr>
                    <a href="checkout">Checkout</a>
                    <hr>
                    <sub>We Accept : <i class="fab fa-cc-visa"></i> <i class="fab fa-cc-mastercard"></i> <i class="fab fa-cc-paypal"></i></sub>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once('../inc/footer.php'); ?>