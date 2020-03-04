<?php

namespace App;

use Illuminate\Support\Facades\DB;


class Admin {

    /**
     * @return json
     */
    public static function getAllAdmin() {
        $admins = DB::table('admin')->get();
        $data['admins'] = array();

        foreach($admins as $admin) {
            $admin = array(
                "full_name" => $admin->full_name,
                "email" => $admin->email,
                "username" => $admin->username,
                "password" => $admin->password
            );
            array_push($data['admins'], $admin);
        }

        return response()->json($data);
    }

    /**
     * @param int $id
     * @return json
     */
    public static function getSingleAdmin(int $id) {
        $admin = DB::table('admin')->where('id','=',$id)->get();
        
        return response()->json($admin);
    }

    /**
     * @param array $data
     * @return json
     */
    public static function register(array $data) {
        \extract($data);
        $register = DB::table('admin')->insert(['full_name' => $full_name, "email" => $email, "username" => $username, 'password' => $password]);

        if($register) {
            return response()->json(array("Registered" => true, "Message" => "Admin Registered"));
        }

        return response()->json(array("Registered" => false, "Message" => "Admin Not Registered"));
    }

    /**
     * @param array $data
     * @return json
     */
    public static function update(array $data) {
        \extract($data);
        $updated = DB::table('admin')
        ->where('id', $id)
        ->update(['full_name' => $full_name, "email" => $email, "username" => $username, 'password' => $password]);

        if($updated) {
            return response()->json(array("Updated" => true, "Message" => "Admin Updated"));
        }

        return response()->json(array("Updated" => false, "Message" => "Admin Not Updated"));
    }
}