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

$router->get('/', function () use ($router) {
    return json_encode([['Welcome' => 'eShop is an ecommerce website']], JSON_PRETTY_PRINT);
});


$router->get('/version', function () use ($router) {
    return json_encode(['API' => "V1"],JSON_PRETTY_PRINT);
});
