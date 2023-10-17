<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index', [
        'title'=> 'Home',
        'name' => 'Anon'
    ]);
});

Route::get('/secondLink', function () {
    return Inertia::render('SecondPage', [
        'title'=> 'SecondPage',
    ]);
});


// Route::get('/', function () {
//     return view('welcome');
// });
