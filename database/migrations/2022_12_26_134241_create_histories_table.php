<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->string('from', 3)->default('BRL');
            $table->string('to', 3)->default('USD');
            $table->decimal('from_price', 8, 2)->default(1.00);
            $table->decimal('to_price', 8, 2)->default(1.00);
            $table->decimal('cotation', 8, 2)->default(1.00);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histories');
    }
};
