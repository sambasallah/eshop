<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function getAllCategories() {
        $all_categories = DB::table('categories')->get();
        return response()->json($all_categories);
    }

    public function createCategory(Request $request) {
        $data = $request->input();

        $created = DB::table('categories')
        ->insert(['category_name' => $data['categoryName']]);

        if($created) {
            return response()->json(['CategoryCreated' => true]);
        }
        return response()->json(['CategoryCreated' => false]);
    }

    public function deleteCategory(Request $request) {
        $data = $request->input();
        
        $deleted = DB::table('categories')->
        where('categories.category_name', '=', $data['categoryName'])
        ->delete();

        if($deleted) {
            return response()->json(['CategoryDeleted' => true]);
        }
        return response()->json(['CategoryDeleted' => false]);
    }
}
