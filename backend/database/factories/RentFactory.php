<?php

namespace Database\Factories;

use App\Models\Rent;
use App\Models\User;
use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

class RentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Rent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->randomElement(User::get(['id'])),
            'car_id' => $this->faker->randomElement(Car::get(['id'])),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'expired' => false,
        ];
    }
}