<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller {


    // Test function
    public function welcome() {
        return response()->json(['Welcome' => 'Samba Sallah']);
    }
    
    public function allAdmin() {
        $admins = DB::table('admin')->get();
        return response()->json($admins);
    }


    public function admin(Request $request, int $id) {
        $admin = DB::table('admin')->where('id', '=', $id)->get();
        return response()->json($admin,200,
        ['Content-Type' => 'application/json',
        'Access-Control-Allow-Origin' => '*']
           );
    }

    public function updateAdmin(Request $request, int $id) {
        $data = $request->input();
        extract($data);
        $updated = DB::update("update admin set full_name = ?, username = ?, email = ?, password = ?, img = ? where id = ?",[$full_name,$username, $email, Hash::make($password), $image, $id]);
        if($updated) {
            return response()->json(['Updated' => true, "Msg" => "Record Successfully Updated"]);
        }
        return response()->json(['Updated' => false, "Msg" => "Record Not Updated"]);
    }


}