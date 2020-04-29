<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getTotalSales() {
        $total_sales = DB::table('orders')->sum('orders.total');
        return response()->json(['Total' => $total_sales]);
    }

    public function getWeeklySales() {
        $weekly_sales = DB::table('orders')
        ->select(DB::raw('*'))
        ->whereRaw('YEARWEEK(created_at)=YEARWEEK(NOW())')
        ->sum('total');

        return response()->json(['Weekly' => $weekly_sales]);
    }

    public function getWeeklyData() {
        $weekly_sales = DB::table('orders')
        ->select(DB::raw('*'))
        ->whereRaw('YEARWEEK(created_at)=YEARWEEK(NOW())')
        ->get();

        return response()->json($weekly_sales);
    }

    public function getAllOrders() {
        $all_orders = DB::table('orders')->get();
        return response()->json(['Orders' => count($all_orders)]);
    }

    public function newOrders() {
        $new_orders = DB::table('orders')
        ->where('orders.order_status', 'Processing')
        ->get();
        return response()->json(['NewOrders' => count($new_orders)]);
    }

    public function getTotalProfit() {
        $total_profit = DB::table('orders')
        ->select(DB::raw('total'))
        ->sum('total');

        return response()->json(['Profit' => intval((10/100) * $total_profit)]);
    }
}
