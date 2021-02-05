<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\DataController;
use App\Http\Controllers\API\AuthController;
// use App\Http\Controllers\API\BPJS\TestController;
use App\Http\Controllers\API\TestController;
use App\Http\Controllers\API\Admin\MootaController;

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

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('register', [AuthController::class, 'register'])->name('register');
    Route::post('logout', [AuthController::class, 'logout']);

    Route::group(['middleware' => ['auth:api', 'is-admin']], function () {
        Route::post('user', [AuthController::class, 'user']);
    });
});