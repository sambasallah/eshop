<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\App;

class ProductControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testImgInDB()
    {
       
        $productController = App::make('ProductController');

        $this->assertTrue(
            $productController->imgInDB('https://res.cloudinary.com/ebaaba/image/upload/v1586014438/product-pictures/2_toc0gg.png'),true);
    }
}