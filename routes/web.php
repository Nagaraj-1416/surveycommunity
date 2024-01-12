<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CommunityPostCategoryController;
use App\Http\Controllers\CommunityPostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');



    Route::any('/',[CommunityPostCategoryController::class, 'listbycategory'])->name('communitypost.listbycategory');
    //Route::any('/list',[CommunityPostCategoryController::class, 'listbycategory'])->name('communitypost.listbycategory');
    Route::any('/communitypost/store',[CommunityPostController::class, 'store'])->name('communitypost.store');

//Route::middleware('auth')->group(function () {
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

require __DIR__.'/auth.php';
