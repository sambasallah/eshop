<?php

namespace App;

use Illuminate\Support\Facades\DB;

class User {

    /**
     * @return json
     */
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

    /**
     * @param int $id
     * @return json
     */
    public static function getSingleUser(int $id) {
        $user = DB::table('users')->where('id', $id)->get();
        
        return response()->json($user);
    }
    
    public static function registerUser(array $data) {
        \extract($data);
        $inserted = DB::insert("insert into users (username, email, password) values (?,?,?)",[$username, $email, $password]);

        if($inserted) {
            return response()->json(array("User Created" => true));
        }

        return response()->json(array("User Created" => false));
    }

    /**
     * @param array $data
     * @param int $id
     * @return json
     */
    public static function updateUser(array $data, int $id) {
        \extract($data);
        $updated = DB::update("update users set username = ?, email = ?, password = ? where id = ?",[$username, $email, $password, $id]);

        if($updated) {
            return response()->json(array("User Updated" => true));
        }

        return response()->json(array("User Updated" => false));
    }

    /**
     * @param int $id
     * @return json
     */
    public static function deleteUser($id) {
        $deleted = DB::delete("delete from users where id = ?",[$id]);

        if($deleted) {
            return response()->json(array("User Deleted" => true));
        }

        return response()->json(array("User Deleted" => false));
    }

}

