<?php

namespace Database\Factories;

use App\Models\RentDay;
use App\Models\Rent;
use Illuminate\Database\Eloquent\Factories\Factory;

class RentDayFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = RentDay::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'rent_id' => $this->faker->randomElement(Rent::get(['id'])),
            'date' => $this->faker->dateTimeThisMonth('+30 days'),
        ];
    }
}