<?php

namespace App\Interfaces;

interface RentRepositoryInterface 
{
    public function getAllRents(int $quantityByPage);
    public function getRentById(int $rentId);
    public function getRentsByUserId(int $userId);
    public function deleteRent(int $rentId);
    public function createRent(array $data);
    public function updateRent(int $rentId, array $data);
}