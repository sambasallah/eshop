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

$router->group(['prefix' => 'api/v1'], function() use($router) {
  
// Users route
$router->get('/users', 'UserController@allUsers');
$router->get('/users/{id}', 'UserController@singleUser');
$router->post('/users','UserController@registerUser');
$router->patch('/users/{id}','UserController@updateUser');
$router->delete('/users/{id}', 'UserController@deleteUser');

// Products route
$router->get('/products','ProductController@allProducts');
$router->get('/products/{id}','ProductController@singleProduct');


});
