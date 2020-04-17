<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller {
    
    
    public function allProducts() {
      $products = DB::table('products')
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->paginate(8);
      return response()->json($products);
    }

    public function searchProduct(string $searchValue) {
      $products = DB::table('products')
      ->where('products.name', 'LIKE', '%'. $searchValue .'%')
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->paginate(8);
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

    public function getProductUsingSlug(string $slug) {
      $product = DB::table('products')
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', 'products.id')
      ->where('products.slug',$slug)
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
      'quantity' => $quantity,
      'slug' => $slug
      ]);

      if(!empty($id)) {
        $imagesSaved = $this->saveProductImages($images, $id);
        $categorySaved = $this->saveProductCategory($categoryID, $id);
        if($imagesSaved && $categorySaved) {
          return response()->json(['Product Created' => true, 'Status Code' => 201, 'ID' => $id]);
        } else {
          return response()->json(['Product Created' => true, 'Status Code' => 201, 'Error' => 'Cannot save images']);
        }
      }

      return response()->json(['Error' => 'Post data Error']);     
      
    }

    public function updateProduct(Request $request, int $id) {
      $data = $request->input();

      extract($data);

      $updated = DB::table('products')
      ->where('id', $id)
      ->update([
      'name' => $productName, 
      'description' => $description, 
      'regular_price' => $regularPrice,
      'sale_price' => $salePrice,
      'quantity' => $quantity,
      'slug' => $slug
      ]);

      $newAddedImages = isset($imageAdded) ? $imageAdded : null;

      if($updated || $updated === 0) {
        $imagesUpdated = $this->updateProductImages($images,$id, $newAddedImages);
        $categoryUpdated = $this->updateProductCategory($categoryID, $id);
        if($imagesUpdated && $categoryUpdated) {
          return response()->json(['Product Updated' => true, 'Status Code' => 201, 'Images & Category' => 'Updated']);
        } else if($imagesUpdated) {
          return response()->json(['Product Updated' => true, 'Status Code' => 201, 'Images' => 'Updated']);
        } else if($categoryUpdated) {
          return response()->json(['Product Updated' => true, 'Status Code' => 201, 'Category' => 'Updated']);
        }
        else {
          return response()->json(['Product Updated' => true, 'Status Code' => 201, 'Error' => 'Cannot save images and category']);
        }
      }

      return response()->json(['Error' => 'Post data Error', 'Updated' => $updated]);     
   
    }

    public function deleteProduct(int $id) {
      $deleted = DB::table('products')->where('id','=', $id)->delete();
      if($deleted) {
        return response()->json(['Deleted' => true, 'Status' => response()->status()]);
      }
      return response()->json(['Deleted' => false, 'Status' => response()->status()]);
    }

    private function saveProductImages(array $images, int $product_id): bool {
        $imageSaved = DB::table('product_images')
        ->insert(['product_id' => $product_id, 
        'url' => json_encode($images)]);

       if($imageSaved) {
          return true;
       }
       return false;
    }

    private function updateProductImages(array $images, int $product_id, $addedImages) {

      $length = count($images);
      $imgs = $this->getAllProductImages($product_id);

      if(!is_null($addedImages)) {

        for($i = 0; $i < $length; $i++) {
          if(!in_array($images[$i], $imgs['images'])) {
             array_push($imgs['images'],$images[$i]);
          }
        }

        $imagesUpdated = DB::table('product_images')
        ->where('product_id', $product_id)
        ->update(['url' => array_values($imgs['images'])]);
        if($imagesUpdated) {
          return true;
        }
        return false;

      } 

      $imagesToDelete = array_diff($imgs['images'], $images);
      
      if(!empty($imagesToDelete)) {  
        
        $updated = array_diff($imgs['images'], $imagesToDelete);
    
        $updatedImaged = DB::table('product_images')
        ->where('product_id', $product_id)
        ->update(['url' => array_values($updated)]);

        if($updatedImaged) {
          return true;
        }
        return false;
      
      }

      return false;

  }


    public function getAllProductImages(int $product_id) {
      $images = DB::table('product_images')->where('product_id', $product_id)->get();
      $urls = [];
      foreach($images as $image) {
        array_push($urls, $image->url);
      }
      return ['images' => json_decode($urls[0])];
    }

    
    private function saveProductCategory(int $category_id, int $product_id): bool {
      $saveCategory = DB::table('product_categories')
      ->insert(['category_id' => $category_id, 
      'product_id' => $product_id]);

      if($saveCategory) {
        return true;
      }

      return false;
    }

    private function updateProductCategory(int $category_id, int $product_id): bool {
      $saveCategory = DB::table('product_categories')
      ->where('product_id', '=', $product_id)
      ->update(['category_id' => $category_id]);

      if($saveCategory) {
        return true;
      }

      return false;
    }

    public function getCategories() {
      $all_categories = DB::table('categories')->get();
      return response()->json($all_categories);
    }
}