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

    public function getProfilePicture(Request $request) {
        $profile_url = DB::table('admin')->where('email', $request->input('email'))->first();
        return response()->json(['Img' => $profile_url->img]);
    }

    public function updateAdmin(Request $request) {
        $data = $request->input();

        if($data['oldPassword'] === $data['password']) {
            $updated_admin = DB::table('admin')
            ->where('email', $data['email'])
            ->update([
                'full_name' => $data['fullName'],
                'username' => $data['username'],
                'img' => $data['image']
                ]
            );
            if($updated_admin || $updated_admin === 0) {
                return response()->json(['Updated' => true]);
            } 
        } else {
            $updated_admin = DB::table('admin')
            ->where('email', $data['email'])
            ->update([
                'full_name' => $data['fullName'],
                'username' => $data['username'],
                'password' => Hash::make($data['password']),
                'img' => $data['image']
                ]
            );
            if($updated_admin || $updated_admin === 0) {
                return response()->json(['Updated' => true]);
            }
        }
        return response()->json(['Updated' => false]);
    }


}