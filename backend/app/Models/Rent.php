<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rent extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'user_id',
        'car_id',
        'start_date',
        'end_date',
        'expired',
    ];

    /**
     * The attributes that should be casted to native types
     */
    protected $casts = [
        'user_id' => 'integer',
        'car_id' => 'integer',
        'start_date' => 'string',
        'end_date' => 'string',
        'expired' => 'boolean',
    ];
}
