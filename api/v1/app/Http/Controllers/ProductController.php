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
        $imagesUpdated = $this->updateProductImages($images, $id, $newAddedImages);
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

    private function saveProductImages(array $images, int $product_id): bool {
      $length = count($images);
      $count = 0;
      for($i = 0; $i < $length; $i++) {
        $saveImage = DB::table('product_images')
        ->insert(['product_id' => $product_id, 
        'path' => $images[$i]]);
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

    private function updateProductImages(array $images, int $product_id, $addedImages) {
      $length = count($images);
      $count = 0;
      $imagesInDB = [];
      $imgs = $this->getAllProductImages($product_id);
      foreach($imgs as $img) {
        array_push($imagesInDB, $img->path);
      }

      if(!is_null($addedImages)) {
        for($i = 0; $i < $length; $i++) {
          $saveImage = DB::table('product_images')
          ->insert(
            ['product_id' => $product_id,
            'path' => $images[$i]]);
  
          if($saveImage) {
            $count++;
            continue;
          } else {
            return false;
          }
        }
  
        if($length === $count) {
          return true;
        }
  
        return false;
      }

      $imagesToDelete = array_diff($imagesInDB, $images);

      if(empty($imagesToDelete)) {
        for($i = 0; $i < $length; $i++) {
          $saveImage = DB::table('product_images')
          ->updateOrInsert(
            ['product_id' => $product_id],
            ['path' => $images[$i]]);
  
          if($saveImage) {
            $count++;
            continue;
          } else {
            return false;
          }
        }
  
        if($length === $count) {
          return true;
        }
  
        return false;
      } else if(!empty($imagesToDelete)) {
        $imagesRemoved = $this->removeImages(array_values($imagesToDelete)); 
        
        if($imagesRemoved) {
          for($i = 0; $i < $length; $i++) {
            $saveImage = DB::table('product_images')
            ->updateOrInsert(
              ['product_id' => $product_id],
              ['path' => $images[$i]]);
    
            if($saveImage) {
              $count++;
              continue;
            } else {
              return false;
            }
          }
    
          if($length === $count) {
            return true;
          }
    
          return false;
        } else {
          return false;
        }
      } else {
        return false;
      }
     
    }
    
    private function getAllProductImages(int $product_id) {
      return DB::table('product_images')->where('product_id', $product_id)->get();
    }

    private function removeImages(array $images) {
       $length = count($images);
       $count = 0;
       for($i = 0; $i < $length; $i++) {
         $deleted = DB::table('product_images')->where('path',$images[$i])->delete();

         if($deleted) {
           continue;
           $count++;
         } else {
            return false;
         }
        
       }

       if($count === $length) {
          return true;
       }
       return false;
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