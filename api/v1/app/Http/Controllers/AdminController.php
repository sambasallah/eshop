<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller {
    
    public function allAdmin() {
        $admins = DB::table('admin')->get();
        return response()->json($admins);
    }

    public function admin(Request $request) {
        $admin = DB::table('admin')->where('email', $request->input('email'))->get();
        return response()->json(['data' => $admin]);
    }

    public function updateAdmin(Request $request) {
        $data = $request->input();

        // $update_admin_customers = DB::table('admin_customers')
        // ->where('email', $data['email'])
        // ->update([
        //     'full_name' => $data['fullName'],
        //     'email' => $data['email'],
        //     'username' => $data['username'],
        //     'password' => Hash::make($data['password'])]
        // );
        $password = "";

        if($data['passwordChanged'] === true) {
            $password = Hash::make($data['password']);
        } else {
            $password = $data['password'];
        }

        // $updated_admin = DB::table('admin')
        // ->where('email', $data['email'])
        // ->update([
        //     'full_name' => $data['fullName'],
        //     'username' => $data['username'],
        //     'password' => $password,
        //     'img' => $data['image']
        //     ]
        // );
        
        // if($updated_admin || $updated_admin === 0) {
        //     return response()->json(['Updated' => true, 'passwordChanged' => $data['passwordChanged']]);
        // }
        // return response()->json(['Updated' => false]);
        return response()->json(['Data' => $data]);
    }


}