<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function createOrder(Request $request) {
        $data = $request->input();          
        $orderCreated = $this->saveCustomerInfo($data['customerInfo'],$data['orderItems'], $data['orderID']);
        if($orderCreated) {
            return response()->json(['Created' => $orderCreated]);
        }
        return response()->json(['Created' => $orderCreated]);
    }

    private function saveCustomerInfo(array $customerInfo, array $order_items, string $order_id) {
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
            $orderCreated = $this->saveOrderInfo($order_items, $order_id, $id);
            return $orderCreated;
        }


    }

    private function saveOrderInfo(array $order_items, string $order_id, int $customer_id) {
        $count = 0;
        $items = count($order_items);
        foreach($order_items as $order) {
             $item_inserted = DB::table('orders')
            ->insert(['product_id' => $order['product_id'],
                      'qty' => $order['qty'],
                      'order_number' => $order_id,
                      'customer_id' => $customer_id
            ]);
            if($item_inserted) {
                $count++;
            }
        }

        if($items === $count) {
            return true;
        }

        return false;
       
    }
}
