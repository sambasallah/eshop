<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller {
    
    
    public function allProducts() {
      $products = DB::table("products")
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')->get();

      return response()->json($products, 200, 
      ['Access-Control-Allow-Origin' => 'http://localhost:3000',
      'Content-Type' => 'application/json']);
    }

    public function singleProduct(Request $request,$id) {
      $product = DB::table('products')
      ->select('name','description','regular_price','discount_price','quantity','category_name')
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->where('products.id',$id)
      ->get();
  
      return response()->json($product);
    }

    public function updateProduct(Request $request, int $id) {
      $data = $request->input();
      $updated = DB::update('update products set name = ?')
    }
}