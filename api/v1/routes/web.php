<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'api/v1', 'middleware' => ['cors']], function() use($router) {
  
// Products Route
$router->get('/products/p/{page}','ProductController@allProducts');
$router->get('/products/search/{searchValue}/{page}','ProductController@searchProduct');
$router->get('/products/{id}','ProductController@singleProduct');
$router->post('/product', 'ProductController@createProduct');
$router->get('/filter-by-price/{price_range}', 'ProductController@filterByPrice');
$router->get('/filter-by-category/{category_name}', 'ProductController@filterByCategory');
$router->get('/filter-by-price-category/{price}/{category}', 'ProductController@filterByPriceCategory');
$router->put('/product/{id}', 'ProductController@updateProduct');
$router->get('/product/categories', 'ProductController@getCategories');
$router->get('/product/{slug}', 'ProductController@getProductUsingSlug');
$router->delete('/product/{id}', 'ProductController@deleteProduct');
$router->get('/mobile-phones', 'ProductController@getAllPhones');
$router->get('/trending-products', 'ProductController@getTrendingProducts');
$router->get('/recommended-products', 'ProductController@getRecommendedProducts');
$router->get('/upsell/{category_id}/{product_id}', 'ProductController@getUpsell');

// Categories Route
$router->get('/categories/product-categories', 'CategoryController@getAllCategories');
$router->post('/categories/create-category', 'CategoryController@createCategory');
$router->delete('/categories/delete-category', 'CategoryController@deleteCategory');

// Admin_Customers Route
$router->post('/create-admin-or-customer', 'AdminCustomerController@createAdminOrCustomer');
$router->get('/admins-customers', 'AdminCustomerController@getAdminsAndCustomers');
$router->post('/admins-customers-delete', 'AdminCustomerController@delete');

// Orders
$router->post('/create-order', 'OrdersController@createOrder');

$router->group(['middleware' => 'jwt.auth'], function() use($router) {

// Admin Route
$router->get('/admins', 'AdminController@allAdmin');
$router->post('/get-admin', 'AdminController@admin');
$router->post('/admin','AdminController@registerAdmin');
$router->put('/update-admin', 'AdminController@updateAdmin');
$router->post('/profile-picture', 'AdminController@getProfilePicture');


// Orders Route
$router->get('/orders', 'OrdersController@getAllOrders');
$router->get('/total-orders', 'OrdersController@totalOrders');
$router->get('/today-orders', 'OrdersController@getTodayOrders');
$router->get('/pending-orders', 'OrdersController@getTotalPendingOrders');
$router->get('/completed-orders', 'OrdersController@getCompletedOrders');
$router->put('/complete-order', 'OrdersController@completeOrder');
$router->get('/order/{order_number}', 'OrdersController@getOrder');
$router->delete('/delete-order', 'OrdersController@deleteOrder');

// Dashboard Route
$router->get('/total-sales', 'DashboardController@getTotalSales');
$router->get('/total-weekly-sales', 'DashboardController@getWeeklySales');
$router->get('/weekly-sales', 'DashboardController@totalDailySalesForOneWeek');
$router->get('/all-orders', 'DashboardController@getAllOrders');
$router->get('/new-orders', 'DashboardController@newOrders');
$router->get('/weekly-orders', 'DashboardController@getTotalDailyOrdersForOneWeek');
$router->get('/weekly-data', 'DashboardController@getWeeklyData');
$router->get('/total-profit', 'DashboardController@getTotalProfit');
$router->get('/total-weekly-profit', 'DashboardController@getTotalWeeklyProfit');
$router->get('/total-daily-profit', 'DashboardController@getTotalDailyProfit');

// Users Route
$router->get('/users', 'UserController@allUsers');
$router->get('/users/{id}', 'UserController@singleUser');
$router->post('/users','UserController@registerUser');
$router->put('/users/{id}','UserController@updateUser');
$router->delete('/users/{id}', 'UserController@deleteUser');

});

// Login Admin
$router->post('/admin-login', 'AuthController@authenticate');

// Check Token Expired
$router->get('/token-expired', 'AuthController@checkTokenExpired');


});
