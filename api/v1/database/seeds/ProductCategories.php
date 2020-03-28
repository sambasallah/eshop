<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product_cateogories = [
            ['category_id' => 2, 'product_id' => 1],
            ['category_id' => 4, 'product_id' => 2]
        ];

        foreach($product_cateogories as $product_category) {
            DB::table('product_categories')->insert($product_category);
        }
    }
}
