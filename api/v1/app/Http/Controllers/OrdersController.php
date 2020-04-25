<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function createOrder(Request $request) {
        $data = $request->input();
        return response()->json(['order_info' => $data]);
    }
}
