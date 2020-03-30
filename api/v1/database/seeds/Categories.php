<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['category_name' => 'Technology'],
            ['category_name' => 'Fashion'],
            ['category_name' => 'Groceries'],
            ['category_name' => 'Household Material']
        ];

        foreach($categories as $category) {
            DB::table('categories')->insert($category);
        }
    }
}
