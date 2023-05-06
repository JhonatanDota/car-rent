<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RentDay;

class RentDaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RentDay::factory()->times(30)->create();
    }
}
