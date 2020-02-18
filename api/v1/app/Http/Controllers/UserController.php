<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserController extends Controller {

    public function allUsers(Request $request) {
       return User::getAllUsers();
    }

    public function singleUser(Request $request,$id) {
       return User::getSingleUser($id); 
    }

    public function registerUser(Request $request) {
       $data = $request->input();
       $arr = array(
          "username" => $data['username'],
          "email" => $data['email'],
          "password" => Hash::make($data['password'])
       );
       return User::registerUser($arr);
    }

    public function updateUser(Request $request, $id) {
      $data = $request->input();
      $arr = array(
         "username" => $data['username'],
         "email" => $data['email'],
         "password" => Hash::make($data['password'])
      );
      return User::updateUser($arr, $id);
    }

    public function deleteUser(Request $request, $id) {
      return User::deleteUser($id);
    } 

}