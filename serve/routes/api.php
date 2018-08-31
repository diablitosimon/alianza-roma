<?php
Route::group(['middleware' => 'api'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('signup', 'AuthController@signup');
    Route::put('updateProfile/{user}', 'AuthController@updateProfile');
    Route::post('me', 'AuthController@me');
    Route::post('reset', 'ResetController@sendEmail');
    Route::post('changePassword', 'ChangeController@process');
});

