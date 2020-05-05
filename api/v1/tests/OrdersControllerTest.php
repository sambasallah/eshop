<?php

use App\Http\Controllers\AdminController;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\AdminCustomerController;

class OrdersControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_save_order()
    {
        $ordersController = App::make(AdminCustomerController::class);

        $this->assertTrue($ordersController->emailExists('sambasallah10@gmail.com', 'customers'));

    }
}
