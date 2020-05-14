<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller {
    
    
    public function allProducts() {
      $products = DB::table('products')
      ->select(DB::raw('*'))
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->orderBy('products.created_at','desc')
      ->paginate(12);
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
      'slug' => $slug,
      'trending' => isset($trending) && $trending === 'Yes'? 'Yes' : null,
      'recommended' => isset($recommended) && $recommended === 'Yes'? 'Yes': null
      ]);

      if(!empty($id)) {
        $imagesSaved = $this->saveProductImages($images, $id);
        $categorySaved = $this->saveProductCategory($categoryID, $id);
        if($imagesSaved && $categorySaved) {
          return response()->json(['Created' => true, 'Status Code' => 201, 'ID' => $id]);
        } else {
          return response()->json(['Created' => true, 'Status Code' => 201, 'Error' => 'Cannot save images']);
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
      'slug' => $slug,
      'trending' => isset($trending) && $trending === 'Yes'? 'Yes' : null,
      'recommended' => isset($recommended) && $recommended === 'Yes'? 'Yes' : null
      ]);

      $newAddedImages = isset($imageAdded) ? $imageAdded : null;

      if($updated || $updated === 0) {
        $imagesUpdated = $this->updateProductImages($images,$id, $newAddedImages);
        $categoryUpdated = $this->updateProductCategory($categoryID, $id);
        if($imagesUpdated && $categoryUpdated) {
          return response()->json(['Updated' => true, 'Status Code' => 201, 'Images & Category' => 'Updated']);
        } else if($imagesUpdated) {
          return response()->json(['Updated' => true, 'Status Code' => 201, 'Images' => 'Updated']);
        } else if($categoryUpdated) {
          return response()->json(['Updated' => true, 'Status Code' => 201, 'Category' => 'Updated']);
        }
        else {
          return response()->json(['Updated' => true, 'Status Code' => 201, 'Error' => 'Cannot save images and category']);
        }
      }

      return response()->json(['Error' => 'Post data Error', 'Updated' => $updated]);     
   
    }

    public function deleteProduct(int $id) {
      $deleted = DB::table('products')->where('id','=', $id)->delete();
      if($deleted) {
        return response()->json(['Deleted' => true]);
      }
      return response()->json(['Deleted' => false]);
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


  private function getAllProductImages(int $product_id) {
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

    public function getAllPhones() {
      $filtered_result = DB::table('products')
      ->where('categories.category_name', 'LIKE', 'Mobile%Phones' )
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->orderBy('products.created_at','desc')
      ->limit(15)
      ->get();

      return response()->json($filtered_result);
    }

    public function getTrendingProducts() {
      $trending = DB::table('products')
      ->where('products.trending', '=', 'Yes' )
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->orderBy('products.updated_at','desc')
      ->limit(15)
      ->get();

      return response()->json($trending);
    }

    public function getRecommendedProducts() {
      $recommended = DB::table('products')
      ->where('products.recommended', '=', 'Yes' )
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->orderBy('products.updated_at','desc')
      ->limit(15)
      ->get();

      return response()->json($recommended);
    }

    public function getUpsell(int $category_id, string $slug) {
      $upsell = DB::table('products')
      ->where('products.slug', '!=', $slug)
      ->where('categories.id', '=', $category_id)
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->inRandomOrder()
      ->limit(5)
      ->get();

       if(count($upsell) > 0) {
        return response()->json($upsell);
       } 
        
       $random_products = DB::table('products')
        ->join('product_categories','product_categories.product_id','=','products.id')
        ->join('categories','categories.id','=','product_categories.category_id')
        ->join('product_images', 'product_images.product_id', '=', 'products.id')
        ->inRandomOrder()
        ->limit(5)
        ->get();
  
        return response()->json($random_products);
       
       
    }

    public function filterByPrice($price_range) {
        if(count(explode('-', $price_range)) == 2) {
          $arr = explode('-',$price_range);
          $filtered_result = DB::table('products')
          ->where('products.sale_price','>=', intval($arr[0]))
          ->where('products.sale_price', '<=', intval($arr[1]))
          ->join('product_categories','product_categories.product_id','=','products.id')
          ->join('categories','categories.id','=','product_categories.category_id')
          ->join('product_images', 'product_images.product_id', '=', 'products.id')
          ->orderBy('products.created_at','desc')
          ->paginate(8);
          return response()->json($filtered_result);
        } else {
          $filtered_result = DB::table('products')
          ->where('products.sale_price', '>=', intval($price_range))
          ->join('product_categories','product_categories.product_id','=','products.id')
          ->join('categories','categories.id','=','product_categories.category_id')
          ->join('product_images', 'product_images.product_id', '=', 'products.id')
          ->orderBy('products.created_at','desc')
          ->paginate(8);
          return response()->json($filtered_result);
        }
    }

    public function filterByCategory($id) {
      $filtered_result = DB::table('products')
      ->where('categories.id', '=', $id )
      ->join('product_categories','product_categories.product_id','=','products.id')
      ->join('categories','categories.id','=','product_categories.category_id')
      ->join('product_images', 'product_images.product_id', '=', 'products.id')
      ->orderBy('products.created_at','desc')
      ->paginate(8);

      return response()->json($filtered_result);
    }

    public function filterByPriceCategory($price_range, $id) {
      if(count(explode('-', $price_range)) == 2) {
        $arr = explode('-',$price_range);
        $filtered_result = DB::table('products')
        ->where('products.sale_price','>=', intval($arr[0]))
        ->where('products.sale_price', '<=', intval($arr[1]))
        ->where('categories.id', '=', $id)
        ->join('product_categories','product_categories.product_id','=','products.id')
        ->join('categories','categories.id','=','product_categories.category_id')
        ->join('product_images', 'product_images.product_id', '=', 'products.id')
        ->orderBy('products.created_at','desc')
        ->paginate(8);
        return response()->json($filtered_result);
      } else {
        $filtered_result = DB::table('products')
        ->where('products.sale_price', '>=', intval($price_range))
        ->where('categories.id', '=', $id)
        ->join('product_categories','product_categories.product_id','=','products.id')
        ->join('categories','categories.id','=','product_categories.category_id')
        ->join('product_images', 'product_images.product_id', '=', 'products.id')
        ->orderBy('products.created_at','desc')
        ->paginate(8);
        return response()->json($filtered_result);
      }
  }

    public function getCategories() {
      $all_categories = DB::table('categories')->get();
      return response()->json($all_categories);
    }
}