<?php

namespace App\Repositories;

use App\Models\Car;
use App\Interfaces\CarRepositoryInterface;

class CarRepository implements CarRepositoryInterface
{
    public function getAllCars(int $quantityByPage = 9) 
    {
        return Car::paginate($quantityByPage);
    }

    public function getCarById(int $carId) 
    {
        return Car::findOrFail($carId);
    }

    public function getNextsRentDaysByCarId(int $carId) 
    {
        $car = Car::findOrFail($carId);

        return $car->nextsRentDays;
    }


    public function deleteCar(int $carId) 
    {
        Car::destroy($carId);
    }

    public function createCar(array $data) 
    {
        return Car::create($data);
    }

    public function updateCar(int $carId, array $data) 
    {
        return Car::find($carId)->update($data);
    }
}