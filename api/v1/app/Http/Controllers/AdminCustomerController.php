<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminCustomerController extends Controller
{
    public function createAdminOrCustomer(Request $request) {
        $data = $request->input();

        if($data['role'] === 'Customer') {

            if($this->emailExists($data['email'], 'customers')) {
                return response()->json(['EmailExists' => true]);
            }

            if($this->usernameExists($data['username'], 'customers')) {
                return response()->json(['UsernameExists' => true]);
            }

            $customer_created = DB::table('customers')
            ->insert([
                'full_name' => $data['firstName']. ' ' . $data['lastName'],
                'email' => $data['email'],
                'username' => $data['username'],
                'password' => Hash::make($data['password'])
            ]);

            if($customer_created) {
               $admin_customers = DB::table('admin_customers')
               ->insert([
                'full_name' => $data['firstName']. ' ' . $data['lastName'],
                'email' => $data['email'],
                'username' => $data['username'],
                'password' => Hash::make($data['password']),
                'user_role' => 'Customer'
               ]);

               if($admin_customers) {
                   return response()->json(['Created' => true]);
               }
               return response()->json(['Created' => false]);
            }
            return response()->json(['Created' => false]);
        } else if($data['role'] === 'Administrator') {
            
            if($this->emailExists($data['email'], 'admin')) {
                return response()->json(['EmailExists' => true]);
            }

            if($this->usernameExists($data['username'], 'admin')) {
                return response()->json(['UsernameExists' => true]);
            }

            $admin_created = DB::table('admin')
            ->insert([
                'full_name' => $data['firstName']. ' ' . $data['lastName'],
                'email' => $data['email'],
                'username' => $data['username'],
                'password' => Hash::make($data['password'])
            ]);

            if($admin_created) {
               $admin_customers = DB::table('admin_customers')
               ->insert([
                'full_name' => $data['firstName']. ' ' . $data['lastName'],
                'email' => $data['email'],
                'username' => $data['username'],
                'password' => Hash::make($data['password']),
                'user_role' => 'Administrator'
               ]);

               if($admin_customers) {
                   return response()->json(['Created' => true]);
               }
               return response()->json(['Created' => false]);
            }
            return response()->json(['Created' => false]);
        }
    
    }

    public function getAdminsAndCustomers() {
        $admins_customers = DB::table('admin_customers')->get();

        return response()->json($admins_customers);
    }

    private function emailExists(string $email, string $table) {
        $email_exists = DB::table($table)
        ->where("{$table}.email", $email)->get();
        if(count($email_exists) > 0) {
            return true;
        }
        return false;
    }

    private function usernameExists(string $username, string $table) {
        $username_exists = DB::table($table)
        ->where("{$table}.username", $username)->get();;
        if(count($username_exists) > 0) {
            return true;
        }
        return false;
    }
}
