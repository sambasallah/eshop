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

// Users route
$router->get('/users', 'UserController@allUsers');
$router->get('/users/{id}', 'UserController@singleUser');

// Products route
$router->get('/products','ProductController@allProducts');
$router->get('/products/{id}','ProductController@singleProduct');

