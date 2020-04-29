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

$router->group(['prefix' => 'api/v1', 'middleware' => 'cors'], function() use($router) {
  
// Users Route
$router->get('/users', 'UserController@allUsers');
$router->get('/users/{id}', 'UserController@singleUser');
$router->post('/users','UserController@registerUser');
$router->put('/users/{id}','UserController@updateUser');
$router->delete('/users/{id}', 'UserController@deleteUser');

// Products Route
$router->get('/products/p/{page}','ProductController@allProducts');
$router->get('/products/search/{searchValue}/{page}','ProductController@searchProduct');
$router->get('/products/{id}','ProductController@singleProduct');
$router->post('/product', 'ProductController@createProduct');
$router->put('/product/{id}', 'ProductController@updateProduct');
$router->get('/product/categories', 'ProductController@getCategories');
$router->get('/product/{slug}', 'ProductController@getProductUsingSlug');
$router->delete('/product/{id}', 'ProductController@deleteProduct');

// Admin Route
$router->get('/admins', 'AdminController@allAdmin');
$router->get('/admin/{id}', 'AdminController@admin');
$router->post('/admin','AdminController@registerAdmin');
$router->put('/admin/{id}', 'AdminController@updateAdmin');

// Orders Route
$router->get('/orders', 'OrdersController@getAllOrders');
$router->get('/total-orders', 'OrdersController@totalOrders');
$router->get('/today-orders', 'OrdersController@getTodayOrders');
$router->get('/pending-orders', 'OrdersController@getTotalPendingOrders');
$router->get('/completed-orders', 'OrdersController@getCompletedOrders');
$router->put('/complete-order', 'OrdersController@completeOrder');
$router->get('/order/{order_number}', 'OrdersController@getOrder');
$router->post('/create-order', 'OrdersController@createOrder');

// Dashboard Route
$router->get('/total-sales', 'DashboardController@getTotalSales');
$router->get('/weekly-sales', 'DashboardController@getWeeklySales');
$router->get('/all-orders', 'DashboardController@getAllOrders');
$router->get('/new-orders', 'DashboardController@newOrders');
$router->get('/weekly-data', 'DashboardController@getWeeklyData');
$router->get('/total-profit', 'DashboardController@getTotalProfit');

});
