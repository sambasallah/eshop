<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = array(
            array(
                'product_status_id' => 1,
                'name' => 'Samsung Galaxy A20s',
                'description' => '
                    Ram : 2GB
                    Storage : 32GB
                    Network : GSM/HSPA/LTE
                ',
                'regular_price' => '8500',
                'discount_price' => '',
                'quantity' => '100'
            ),
            array(
                'product_status_id' => 2,
                'name' => 'Fridge',
                'description' => '
                    Long Lasting
                    Durable
                    Deep Freezer
                ',
                'regular_price' => '18500',
                'discount_price' => '',
                'quantity' => '5'
            )
            );

            foreach($products as $product) {
                DB::table('products')->insert($product);
            }
    }
}
