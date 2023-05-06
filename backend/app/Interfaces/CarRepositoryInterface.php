<?php

namespace App\Interfaces;

interface CarRepositoryInterface 
{
    public function getAllCars(int $quantityByPage);
    public function getCarById(int $carId);
    public function getNextsRentDaysByCarId(int $carId);
    public function deleteCar(int $carId);
    public function createCar(array $data);
    public function updateCar(int $carId, array $data);
}