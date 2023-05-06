<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repositories\RentRepository;

class RentController extends Controller
{
    public function __construct(RentRepository $rentRepository)
    {
        $this->rentRepository = $rentRepository;
    }

    public function getAllRents(){
        $this->authorize('viewAny', [Rent::class]);

        return response()->json($this->rentRepository->getAllRents(), 200);
    }

    public function getRentsByUserId(int $userId){
        $this->authorize('viewRentsByUser', [Rent::class, $userId]);

        return response()->json($this->rentRepository->getRentsByUserId($userId));
    }
}