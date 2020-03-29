<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller {
    
    
    public function allProducts() {
      $products = DB::table("products")
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')->get();
      return response()->json($products);
    }

    public function singleProduct(int $id) {
      $product = DB::table('products')
      ->select('name','description','regular_price','discount_price','quantity','category_name')
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->where('products.id',$id)
      ->get();
      return response()->json($product);
    }

    public function createProduct(Request $request) {
      $data = $request->input();

      extract($data);

      $id = DB::table('products')->insertGetId([
      'name' => $productName, 
      'description' => $description, 
      'regular_price' => $regularPrice,
      'sale_price' => $salePrice,
      'quantity' => '10',
      'slug' => $slug
      ]);

      if(!empty($id)) {
        $imagesSaved = $this->saveProductImages($images, $id);
        if($imagesSaved) {
          return response()->json(['Product Created' => true, 'Status Code' => 201]);
        } else {
          return response()->json(['Product Created' => true, 'Status Code' => 201, 'Error' => 'Cannot save images']);
        }
      }

      return response()->json(['Error' => 'Post data Error']);     
      
    }

    private function saveProductImages(array $images, int $product_id): bool {
      $length = count($images);
      $count = 0;
      for($i = 0; $i < $length; $i++) {
        $saveImage = DB::table('product_images')->insert(['product_id' => $product_id, 'path' => $images[$i]]);
        if($saveImage) {
          $count++;
          continue;
        }
        exit;
      }

      if($length === $count) {
        return true;
      }

      return false;
    }

    private function saveProductCategory(string $productCategory): bool {

    }

    public function getCategories() {
      $all_categories = DB::table('categories')->get();
      return response()->json($all_categories);
    }
}