<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'value',
        'color',
        'year',
        'brand',
        'kilometers',
        'transmision_type',
        'doors',
        'fuel_type',
        'air_conditioning',
    ];

    /**
     * Enums.
     */
    const BRAND_POSSILITIES = [
        'CHEVROLET',
        'NISSAN',
        'CITROEN',
        'AUDI',
        'RENAULT',
        'FIAT',
        'PEUGEOT',
        'FORD',
        'HYUNDAI',
        'BMW',
    ];

    const TRANSMISION_TYPE_POSSILITIES = ['MANUAL', 'AUTOMATIC'];

    const FUEL_TYPE_POSSILITIES = ['FLEX', 'GASOLINE', 'ETHANOL'];
}
