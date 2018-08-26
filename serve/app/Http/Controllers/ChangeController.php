<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;

class ChangeController extends Controller
{
    public function process (ChangePasswordRequest $request)
    {
        return $this->getPasswordReset($request)->count() > 0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordReset($request)
    {
        return DB::table('password_resets')->where(['email' => $request->email, 'token' => $request->resetToken]);
    }

    private function tokenNotFoundResponse ()
    {
        return response()->json(['error' => 'Token or Email is incorrect'], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    private function changePassword ($request)
    {
        $user = User::whereEmail($request->email)->first();
        $user->update(['password' => bcrypt($request->password)]);
        $this->getPasswordReset($request)->delete();

        return response()->json(['data' => 'Password Successfully Change'], Response::HTTP_CREATED);
    }

}
