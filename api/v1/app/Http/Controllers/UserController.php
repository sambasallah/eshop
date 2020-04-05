<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {

    public function allUsers(Request $request) {
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

    public function singleUser(Request $request,int $id) {
      $user = DB::table('users')->where('id', $id)->get();
        
      return response()->json($user);
    }

    public function registerUser(Request $request) {
       $data = $request->input();
       $arr = array(
          "username" => $data['username'],
          "email" => $data['email'],
          "password" => Hash::make($data['password'])
       );

       \extract($arr);

       $inserted = DB::insert("insert into users (username, email, password) values (?,?,?)",[$username, $email, $password]);

       if($inserted) {
           return response()->json(array("User Created" => true));
       }

       return response()->json(array("User Created" => false));
    }

    public function updateUser(Request $request, int $id) {
      $data = $request->input();
      $arr = array(
         "username" => $data['username'],
         "email" => $data['email'],
         "password" => Hash::make($data['password'])
      );
      \extract($arr);
      $updated = DB::update("update users set username = ?, email = ?, password = ? where id = ?",[$username, $email, $password, $id]);

      if($updated) {
          return response()->json(array("User Updated" => true));
      }

      return response()->json(array("User Updated" => false));
    }

    public function deleteUser(Request $request, int $id) {
      $deleted = DB::delete("delete from users where id = ?",[$id]);

        if($deleted) {
            return response()->json(array("User Deleted" => true));
        }

        return response()->json(array("User Deleted" => false));
    } 

}