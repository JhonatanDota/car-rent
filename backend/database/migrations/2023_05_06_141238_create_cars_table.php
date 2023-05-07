<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->float('value');
            $table->string('color');
            $table->integer('year');
            $table->enum('brand', [
                'CHEVROLET',
                'NISSAN',
                'CITROEN',
                'AUDI',
                'RENAULT',
                'FIAT',
                'PEUGEOT',
                'FORD',
                'HYUNDAI',
                'BMW',
            ]);
            $table->float('kilometers');
            $table->enum('transmision_type', [
                'MANUAL',
                'AUTOMATIC'
            ]);
            $table->integer('doors');
            $table->enum('fuel_type', [
                'FLEX',
                'GASOLINE',
                'ETHANOL',
            ]);
            $table->boolean('air_conditioning');
            $table->string('image');
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
        Schema::dropIfExists('cars');
    }
}