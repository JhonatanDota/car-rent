<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Car::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'value' => $this->faker->randomFloat(2, 100, 10000),
            'color' => $this->faker->colorName(),
            'year' => $this->faker->year(),
            'brand' => $this->faker->randomElement(Car::BRAND_POSSILITIES),
            'kilometers' => $this->faker->randomFloat(2, 100, 10000),
            'transmision_type' => $this->faker->randomElement(Car::TRANSMISION_TYPE_POSSILITIES),
            'doors' => $this->faker->randomNumber(2),
            'fuel_type' => $this->faker->randomElement(Car::FUEL_TYPE_POSSILITIES),
            'air_conditioning' => true,
            'image' => $this->faker->imageUrl(),
        ];
    }
}