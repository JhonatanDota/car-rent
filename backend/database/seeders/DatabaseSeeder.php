<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(CarSeeder::class);
        $this->call(RentSeeder::class);
        $this->call(RentDaySeeder::class);
    }
}
