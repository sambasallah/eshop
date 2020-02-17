<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;


class ProductController extends Controller {
    
    
    public function allProducts() {
       return Product::getAllProducts();
    }

    public function singleProduct(Request $request,$id) {
      return Product::getSingleProduct($id);
    }
}