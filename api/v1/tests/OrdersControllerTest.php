<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\OrdersController;

class OrdersControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_save_order()
    {
        $ordersController = App::make(OrdersController::class);

        $this->assertTrue($ordersController->saveOrderInfo(['product_id' => 32, 'qty' => 1],'Sn-3262', 4));

    }
}
