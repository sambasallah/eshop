<?php

namespace App;

use Illuminate\Support\Facades\DB;

class User {

    public static function getAllUsers()  {
        $users = DB::table("users")->paginate(15);
        $data['users'] = array();

        foreach($users as $user) {
            $user = array(
                'username' => $user->username,
                'email' => $user->email,
                'password' => $user->password
            );
            array_push($data['users'],$user);
        }
        return response()->json($data);
    }

    public static function getSingleUser($id) {
        $user = DB::table('users')->where('id', $id)->get();
        
        return response()->json($user);
    }
    
}

