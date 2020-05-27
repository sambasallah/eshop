<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SendGrid\Mail\Mail;

class OrdersController extends Controller
{
   
   public function createOrder(Request $request) {
        $data = $request->input();          
        $orderCreated = $this->saveCustomerInfo($data['customerInfo'],$data['orderItems'], 
        $data['orderID'], $data['total'],
    $data['orderNote'], $data['shippingAddress']);
        if($orderCreated) {
            $response = $this->sendOrderEmail($data['customerInfo'], $data['total'],
            $data['shippingAddress'], $data['orderID'], $data['orderItems']);
            return response()->json(['Created' => $orderCreated, 'EmailSentStatus' => $response]);
        }
        return response()->json(['Created' => $orderCreated]);
    }

    private function saveCustomerInfo(array $customerInfo, array $order_items,
     string $order_id, string $total, string $order_note, string $shipping_address) {
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
            $orderCreated = $this->saveOrderInfo($order_items, $order_id, $id, $total, $order_note, $shipping_address);
            return $orderCreated;
        }


    }

    private function saveOrderInfo(array $order_items, string $order_id, 
    int $customer_id, string $total, string $order_note, string $shipping_address) {
        $order_created = DB::table('orders')->insert(
            ['products' => json_encode($order_items),
            'order_number' => $order_id,
            'order_status' => 'Processing',
            'order_note' => $order_note,
            'shipping_address' => $shipping_address,
            'total' => $total,
            'customer_id' => $customer_id
            ]);
        return $order_created;
    }

    private function sendOrderEmail(array $customer_info, string $total, 
    string $shipping_address,  string $order_id, array $order_items) {
        extract($customer_info);
        $order_list = "";
        foreach($order_items as $item) {
           $order_list .= "
                  <tr height='50px'>
                     <td><img src='". $item['img'] ."' width='20' height='20' /> ". $item['productName'] . "</td>
                     <td> " . $item['qty'] . "</td>
                     <td> " . number_format(intval($item['salePrice']) * intval($item['qty'])) . "</td>
                  </tr>
            ";
        }
        $email = new Mail(); 
        $email->setFrom('transaction@ebaaba.xyz', "eBaaba");
        $email->setSubject("Order Confirmation");
        $email->addTo($customer_info['email'], $customer_info['fullName']);
        // $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
        $email->addContent(
           "text/html",'
           <div style="min-width: 60%; min-height: 70vh;background-color: #f5f5f5; margin: 20px auto">
           <div style="width: 100%; height: 60px; background-color: #ed017f;"></div>
           <h2 style="margin: 0px; padding: 20px 15px; font-size: 30px; font-weight: lighter; font-family: Arial, Helvetica, sans-serif;">Order Confirmation</h2>
           <h5 style="margin: 0px; padding: 10px 15px; font-weight: lighter; font-family: Arial, Helvetica, sans-serif; font-size: 20px; padding-bottom: 20px;">Thanks for your order with eBaaba!</h5>
           
           <table cellspacing="0" cellpadding="0" width="100%" style="margin-bottom: 10px" style="table-layout: fixed; width: 100% !important;">
               <thead>
                  <tr>
                       <th width="50%" style="font-size: 20px; font-weight: lighter; text-align: left; padding: 0px 15px; font-family: Arial, Helvetica, sans-serif;">Shipping Address</th>
                       <th width="50%" style="font-size: 20px; font-weight: lighter; text-align: left; padding: 0px 15px; font-family: Arial, Helvetica, sans-serif;">Order ID</th>
                  </tr>
               </thead>
               <tbody>
                   <tr>
                       <td height="50" style="padding: 0px 15px;">
                           <span style="font-size: 15px; font-weight: bold;">'. $customer_info['fullName'] .'</span> <br>
                           <span style="font-size: 15px;">'. $shipping_address .'</span> <br>
                           <span style="font-size: 15px;">'. $customer_info['country'] .'</span> 
                       </td>
   
                       <td height="50">
                           <span  style="padding: 0px 15px; font-size: 15px; font-weight: bold;">'. $order_id .'</span> <br>
                           <span><h5></h5></span>
                       </td>
                   </tr>
               </tbody>
           </table>
   
           <table cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; width: 100% !important;">
               <tbody>
                   <tr>
                       <div style="border-top: 1px solid black; max-width: 97%; margin: auto"></div> <br>
                       <table cellpadding="4px" cellspacing="0" width="100%" style="margin: 0px 15px; table-layout: fixed;"> 
                           <thead>
                               <tr>
                                   <th width="70%" align="left" style="font-family: "Courier New", Courier, monospace;width: 70% !important">ITEMS</th>
                                   <th width="15%" align="left" style="font-family: "Courier New", Courier, monospace; width: 15% !important;">QUANTITY</th>
                                   <th width="15%" align="left" style="font-family: "Courier New", Courier, monospace; width: 15% !important;">SUBTOTAL(D)</th>
                               </tr>
                           </thead>
                           <tbody>
                               '. $order_list .'
                           </tbody>
                       </table> <br>
                       <div style="border-top: 1px solid black; max-width: 97%; margin: auto; "></div>
                   </tr>
               </tbody>
           </table>
   
           <table cellpadding="0" cellspacing="0" width="100%" style="margin-top: 10px;" style="table-layout: fixed; width: 100% !important">
               <thead>
                   <tr>
                       <th width="70%"></th>
                       <th width="30%"></th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td></td>
                       <td>
                           <table cellpadding="0" cellspacing="0" width="100%" align="center" style="table-layout: fixed; width: 100% !important;">
                               <thead>
                                   <tr>
                                       <th style="min-width: 50%;"></th>
                                       <th style="min-width: 50%;"></th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr height="40" style="font-size: 18px; padding-bottom: 8px;">
                                       <td>Subtotal: </td> <br>
                                       <td>D'. number_format($total) .'</td>
                                   </tr>
                                   <tr height="40" style="font-size: 18px; padding-bottom: 8px;">
                                       <td>Shipping: </td> <br>
                                       <td>FREE</td>
                                   </tr>
                                   <tr height="40" style="font-size: 18px; font-weight: bold; padding-bottom: 8px; font-family: Arial;">
                                       <td>Total: </td> <br>
                                       <td>D'. number_format($total) .'</td>
                                   </tr>
                               </tbody>
                           </table>
                       </td>
                   </tr>
               </tbody>
           </table>
   
       </div>
            '
        );
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        try {
            $response = $sendgrid->send($email);
            return response()->json(['StatusCode' => $response->statusCode()]);
        } catch (Exception $e) {
            return response()->json(['Error' => 'Caught exception: '. $e->getMessage()]);
        }
    }

    public function getAllOrders() {
        $all_orders = DB::table('orders')
        ->join('customers','customers.id', 'orders.customer_id')
        ->orderBy('orders.created_at', 'desc')
        ->paginate(7);

        return response()->json($all_orders);
    }

    /**
     * @return json - total number of orders
     */
    public function totalOrders() {
        $total_orders = DB::table('orders')->get();
        return response()->json(['Total' => count($total_orders)]);
    }

    /**
     * @return json - number of orders made the current day
     */
    public function getTodayOrders() {
        $total_orders = DB::table('orders')
        ->select(DB::raw('*'))
        ->whereRaw('Date(created_at) = CURDATE()')->get();

        return response()->json(['Today' => count($total_orders)]);
    }

    /**
     * @return json - total number of pending orders
     */
    public function getTotalPendingOrders() {
        $pending_orders = DB::table('orders')
        ->select(DB::raw('*'))
        ->where('order_status', 'Processing')->get();

        return response()->json(['Pending' => count($pending_orders)]);
    }

    public function getCompletedOrders() {
        $completed_orders = DB::table('orders')
        ->select(DB::raw('*'))
        ->where('order_status', 'Completed')
        ->get();

        return response()->json(['Completed' => count($completed_orders)]);
    }

    public function completeOrder(Request $request) {
        $data = $request->input();

        $updatedOrder = DB::table('orders')
        ->where('order_number', $data['order_number'])
        ->update(['order_status' => 'Completed']);

        if($updatedOrder) {
            return response()->json(['Updated' => true]);
        }
        return response()->json(['Updated' => false]);
    }

    /**
     * @return json - single order
     */
    public function getOrder($order_id) {
        $order = DB::table('orders')
        ->where('orders.order_number', $order_id)
        ->join('customers','customers.id', 'orders.customer_id')
        ->get();

        return response()->json($order);
    }

    public function deleteOrder(Request $request) {
        $deleted_order = DB::table('orders')
        ->where('order_number', $request->input('orderID'))
        ->delete();

        if($deleted_order === 1) {
            return response()->json(['OrderDeleted' => true]);
        }

        return response()->json(['OrderDeleted' => false]);
    }
}
