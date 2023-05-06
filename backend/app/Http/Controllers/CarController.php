<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repositories\CarRepository;

class CarController extends Controller
{
    public function __construct(CarRepository $carRepository)
    {
        $this->carRepository = $carRepository;
    }

    public function getAllCars(){
        return response()->json($this->carRepository->getAllCars(), 200);
    }

    public function getCarById(int $carId){
        return response()->json($this->carRepository->getCarById($carId), 200);
    }

    public function getNextsRentDaysByCarId(int $carId){
        return response()->json($this->carRepository->getNextsRentDaysByCarId($carId), 200);
    }
}