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


$router->get('/images/{id}', 'ProductController@getAllProductImages');
$router->get('/delete', 'ProductController@deleteImg');

});
