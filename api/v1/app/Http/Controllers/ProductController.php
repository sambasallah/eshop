<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller {

    public function greet(Request $request) {
        return json_encode(["Welcome"]);
    }
}