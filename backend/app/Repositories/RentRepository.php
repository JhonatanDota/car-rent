<?php

namespace App\Repositories;

use App\Models\Rent;
use App\Interfaces\RentRepositoryInterface;

class RentRepository implements RentRepositoryInterface
{
    public function getAllRents(int $quantityByPage = 8) 
    {
        return Rent::paginate($quantityByPage);
    }

    public function getRentById(int $rentId) 
    {
        return Rent::findOrFail($rentId);
    }

    public function getRentsByUserId(int $userId) 
    {
        return Rent::where('user_id', $userId)->get();
    }

    public function deleteRent(int $rentId) 
    {
        Rent::destroy($rentId);
    }

    public function createRent(array $data) 
    {
        return Rent::create($data);
    }

    public function updateRent(int $rentId, array $data) 
    {
        return Rent::find($rentId)->update($data);
    }
}