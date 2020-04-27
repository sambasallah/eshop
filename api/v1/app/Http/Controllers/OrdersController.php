<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function createOrder(Request $request) {
        $data = $request->input();          
        $orderCreated = $this->saveCustomerInfo($data['customerInfo'],$data['orderItems'], $data['orderID'], $data['total']);
        if($orderCreated) {
            return response()->json(['Created' => $orderCreated]);
        }
        return response()->json(['Created' => $orderCreated]);
    }

    private function saveCustomerInfo(array $customerInfo, array $order_items, string $order_id, string $total) {
        $id = DB::table('customers')
        ->insertGetId(
            ['full_name' => $customerInfo['fullName'],
             'address' => $customerInfo['address'],
             'country' => $customerInfo['country'],
             'town_city' => $customerInfo['townCity'],
             'phone_number' => $customerInfo['phone'],
             'email' => $customerInfo['email']
        ]
        );

        if(is_numeric($id)) {
            $orderCreated = $this->saveOrderInfo($order_items, $order_id, $id, $total);
            return $orderCreated;
        }


    }

    private function saveOrderInfo(array $order_items, string $order_id, int $customer_id, string $total) {
        $order_created = DB::table('orders')->insert(
            ['products' => json_encode($order_items),
            'order_number' => $order_id,
            'total' => $total,
            'customer_id' => $customer_id
            ]);
        return $order_created;
    }

    public function getAllOrders() {
        $all_orders = DB::table('orders')
        ->join('customers','customers.id', 'orders.customer_id')
        ->orderBy('orders.created_at', 'desc')
        ->get();

        return response()->json($all_orders);
    }

    public function getOrder($order_id) {
        $order = DB::table('orders')
        ->where('orders.order_number', $order_id)
        ->join('customers','customers.id', 'orders.customer_id')
        ->get();

        return response()->json($order);
    }
}
