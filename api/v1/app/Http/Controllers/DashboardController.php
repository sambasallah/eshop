<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getTotalSales() {
        $total_sales = DB::table('orders')
        ->select(DB::raw('total'))
        ->sum('total');
        return response()->json(['TotalSales' => intval($total_sales)]);
    }

    public function getWeeklySales() {
        $weekly_sales = DB::table('orders')
        ->select(DB::raw('DATE(created_at) as date, *'))
        ->whereRaw('created_at >= Date_add(NOW(), interval - 6 day) and created_at <= NOW()')
        ->sum('total');

        return response()->json(['Weekly' => intval($weekly_sales)]);
    }

    public function getWeeklyData() {
        $weekly_sales = DB::table('orders')
        ->select(DB::raw('*'))
        ->whereRaw('YEARWEEK(created_at)=YEARWEEK(NOW())')
        ->get();

        return response()->json($weekly_sales);
    }

    public function totalDailySalesForOneWeek() {
        $total_daily_sales = DB::table('orders')
        ->select(DB::raw('DATE(created_at) as date, dayofweek(created_at) as day, sum(total) as daily_sale'))
        ->whereRaw('created_at >= Date_add(Now(),interval - 6 day) and created_at <= NOW()')
        ->groupByRaw('date, day')->get();

        return response()->json(["WeeklySales" => $total_daily_sales]);
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

    public function getTotalDailyOrdersForOneWeek() {
        $total_daily_orders = DB::table('orders')
        ->select(DB::raw('DATE(created_at) as date,dayofweek(created_at) as day, count(*) as daily_orders'))
        ->whereRaw('created_at >= Date_add(Now(),interval - 6 day) and created_at <= NOW()')
        ->groupByRaw('date,day')->get();
        return response()->json(['WeeklyOrders' => $total_daily_orders]);
    }

    public function getTotalProfit() {
        $total_profit = DB::table('orders')
        ->select(DB::raw('total'))
        ->sum('total');

        return response()->json(['Profit' => intval((10/100) * $total_profit)]);
    }

    public function getTotalWeeklyProfit() {
        $total_weekly_profit = DB::table('orders')
        ->select(DB::raw('DATE(created_at) as date, dayofweek(created_at) as day, sum(total) as total_daily_profit'))
        ->whereRaw('created_at >= Date_add(Now(),interval - 6 day) and created_at <= NOW()')
        ->groupByRaw('date, day')->get();

        $total_profit = 0;

        foreach($total_weekly_profit as $total) {
            $total_profit += intval($total->total_daily_profit * (10/100));
        }

        return response()->json(['TotalWeeklyProfit' => intval($total_profit)]);
    }

    public function getTotalDailyProfit() {
        $total_daily_profit = DB::table('orders')
        ->select(DB::raw('DATE(created_at) as date, dayofweek(created_at) as day, sum(total) as total_daily_profit'))
        ->whereRaw('created_at >= Date_add(Now(),interval - 6 day) and created_at <= NOW()')
        ->groupByRaw('date,day')->get();

        return response()->json(['TotalDailyProfit' => $total_daily_profit]);
    }
}
