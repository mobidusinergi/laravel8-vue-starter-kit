<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\Admin\DashboardController;

Route::name('admin.')->middleware(['is-admin'])->group(function () {

    Route::get('dashboard', [DashboardController::class, 'index']);

});
