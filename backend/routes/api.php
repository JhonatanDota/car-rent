<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RentController;
use App\Http\Controllers\CarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);


Route::group(['middleware' => 'jwt.auth'], function () {
    Route::prefix('rents')->group(function () {
        Route::get('/', [RentController::class,  'getAllRents']);
        Route::get('user/{userId}', [RentController::class,  'getRentsByUserId']);
    });

    Route::prefix('cars')->group(function () {
        Route::get('/', [CarController::class,  'getAllCars']);
        Route::get('/{carId}', [CarController::class,  'getCarById']);

        Route::get('/{carId}/nexts-rent-days', [CarController::class,  'getNextsRentDaysByCarId']);
    });
});
