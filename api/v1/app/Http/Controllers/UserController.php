<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller {

    public function allUsers(Request $request) {
       return User::getAllUsers();
    }

    public function singleUser(Request $request,$id) {
       return User::getSingleUser($id); 
    }

}