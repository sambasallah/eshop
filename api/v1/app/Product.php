<?php

namespace App;

use Illuminate\Support\Facades\DB;

class Product {

    /**
     * @return json
     */
    public static function getAllProducts(){

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

    /**
     * @param int $id
     * @return json
     */
    public static function getSingleProduct($id) {
          
        $product = DB::table('products')
        ->select('name','description','regular_price','discount_price','quantity','category_name')
        ->join('product_categories','product_categories.product_id','=','products.id')
        ->join('categories','categories.id','=','product_categories.category_id')
        ->where('products.id',$id)
        ->get();
    
        return response()->json($product);
    }

}