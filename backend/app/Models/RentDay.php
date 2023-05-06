<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentDay extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'rent_id',
        'date',
    ];

    /**
     * The attributes to hide.
    */

    protected $hidden = ['created_at', 'updated_at', 'laravel_through_key'];

    /**
     * The attributes that should be casted to native types
     */
    protected $casts = [
        'rent_id' => 'integer',
        'date' => 'string',
    ];
}
