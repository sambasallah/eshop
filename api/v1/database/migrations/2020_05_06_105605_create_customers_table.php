<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('full_name');
            $table->string('address')->nullable();
            $table->string('country')->nullable();
            $table->string('town_city')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email');
            $table->string('username')->nullable();
            $table->string('password')->nullable();
            $table->unsignedBigInteger('admin_customers_id')->nullable();
            $table->foreign('admin_customers_id')->references('id')->on('admin_customers')->onDelete('cascade')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
