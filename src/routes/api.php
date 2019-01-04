<?php

use Illuminate\Support\Facades\Route;

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

/*
 * protected route
 */
Route::middleware('auth:api')->group(function () {
    /*
     * group 'users'
     */
    Route::prefix('users')->group(function () {
        Route::post('logout', 'api\AuthController@logout');
        Route::get('get', 'UserController@get');
    });

    /*
     * group 'tasks'
     */
    Route::prefix('tasks')->group(function () {
        Route::get('/', 'api\TaskController@index');
        Route::get('{id}', 'api\TaskController@show');
        Route::post('create', 'api\TaskController@store');
        Route::patch('{id}/edit', 'api\TaskController@edit');
        Route::delete('{id}/remove', 'api\TaskController@destroy');
    });
});

/*
 * free route
 */
Route::post('register', 'api\UserController@register');
Route::post('login', 'api\AuthController@login')->name('login');