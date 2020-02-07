<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {

    public function allUsers(Request $request) {
        $users = DB::select('SELECT * FROM users');
        $data['users'] = array();

        foreach($users as $user) {
            $user = array(
                'username' => $user->username,
                'email' => $user->email,
                'password' => $user->password,
                'created_at' => $user->created_at,
                "updated_at" => $user->updated_at
            );
            array_push($data['users'],$user);
        }
        return response()->json($data);
    }

    public function singleUser(Request $request,$id) {
        
        $user = DB::table('users')->where('id', '=', $id)->get();
        
        return response()->json($user);
    }
}