<?php

namespace App\Http\Controllers;

use App\Admin;

use Illuminate\Http\Request;

class AdminController extends Controller {

    public function admin(Request $request, $id) {
        return Admin::getSingleAdmin($id);
    }

    public function allAdmin(Request $request) {
        return Admin::getAllAdmin();
    }

    public function registerAdmin(Request $request) {
        $admin = $request->input();
        $data = array(
            "full_name" => $admin['full_name'],
            "email" => $admin['email'],
            "username" => $admin['username'],
            "password" => $admin['password']
        );

        return Admin::register($data);
    }

    public function updateAdmin(Request $request, $id) {
        $admin = $request->input();
        $data = array(
            "id" => $id,
            "full_name" => $admin['full_name'],
            "email" => $admin['email'],
            "username" => $admin['username'],
            "password" => $admin['password']
        );
        // return response()->json($data);
        return Admin::update($data);
    }
}