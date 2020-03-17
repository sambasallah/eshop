<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;


class ProductController extends Controller {
    
    
    public function allProducts() {
      $products = DB::table("products")
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->paginate(15);

      $data['products'] = array();

      foreach($products as $product) {
          $product = array(
              "id" => $product->id,
              "name" => $product->name,
              "description" => $product->description,
              "regular_price" => $product->regular_price,
              "discount_price" => $product->discount_price,
              "quantity" => $product->quantity,
              "Category" => $product->category_name,
          );
          array_push($data['products'],$product);
      }

      return response()->json($data,200,
      ['Content-Type' => 'application/json',
       'Access-Control-Allow-Origin' => '*']
      );
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
}