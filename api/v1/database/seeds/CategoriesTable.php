<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $categories = [
            ['category_name' => 'Fashion'],
            ['category_name' => 'Technology'],
            ['category_name' => 'Groceries'],
            ['Category_name' => 'Accessories']
        ];

        foreach($categories as $category) {
            DB::table('categories')->insert($category);
        }
    }
}
