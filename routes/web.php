<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', [App\Http\Controllers\PageController::class, 'index'])->where('any', '.*');
