<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admins = array(
            array(
                'full_name' => "samba sallah",
                'email' => 'sambasallah10@gmail.com',
                'username' => 'sambasallah',
                'password' => 'y7enqxal'
            ),
            array(
                'full_name' => "admin admin",
                'email' => 'admin@gmail.com',
                'username' => 'admin',
                'password' => 'y7enqxal'
            )
            );

            foreach($admins as $admin) {
                DB::table('admin')->insert($admin);
            }
    }
}


