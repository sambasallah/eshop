<?php require_once('../inc/header.php'); ?>
<?php require_once('../inc/breadcrumb.php'); ?>

<div class="auth">
    <div class="auth_container">
        <div class="row">
            <div class="col-md-4">
                <div class="login_container">
                <h2>Login <i class="fa fa-user"></i></h2>
                <form action="" method="post">
                    <input type="text" name="username" placeholder="Username / Email">
                    <input type="password" name="password" placeholder="Password">
                    <a href="#" type="submit">Login</a>
                </form>
                </div>
            </div>
            <div class="col-md-8">
                <div class="register_container">
                <h2>Register <i class="fa fa-user-plus"></i></h2>
                <form action="" method="post">
                <input type="text" name="name" placeholder="Full Name">
                <input type="text" name="email" placeholder="Email">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <input type="password" name="password-repeat" placeholder="Repeat Password">
                <a href="" type="submit">Register</a> 
                </form>
                </div>

            </div>
        </div>
    </div>
</div>

<?php require_once('../inc/footer.php'); ?>