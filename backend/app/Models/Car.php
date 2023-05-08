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
        'image',
    ];

    /**
     * The attributes that should be casted to native types
     */
    protected $casts = [
        'name' => 'string',
        'value' => 'float',
        'color' => 'string',
        'year' => 'integer',
        'brand' => 'string',
        'kilometers' => 'float',
        'transmision_type' => 'string',
        'doors' => 'integer',
        'fuel_type' => 'string',
        'air_conditioning' => 'boolean',
        'image' => 'string',
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

    /**
     * Relationships.
     */

    public function rents()
    {
        return $this->hasMany(Rent::class);
    }

    public function nextsRentDays()
    {
        return $this->hasManyThrough(RentDay::class, Rent::class)->where('rent_days.date', '>=' , date('Y-m-d'))->orderBy('rent_days.date', 'ASC');
    }
}
