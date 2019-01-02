<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /*
     * insert a new user in db
     */
    public function register(Request $request)
    {
        Validator::make($request->all(), [
            'name' => 'required|max:255',
            'username' => 'required|unique:users|max:255',
            'password' => 'required|max:20',
            'email' => 'required|unique:users|max:255'
        ])->validate();

        $phash = Hash::make(trim($request->password));

        $user = [
            'name' => trim($request->name),
            'username' => trim(strtolower($request->username)),
            'password' => $phash,
            'email' => trim($request->email),
            'active' => true
        ];

        $userCreated = User::firstOrCreate($user);

        return response()->json($userCreated, 201);
    }

    public function get()
    {
        $response = auth()->user();

        return response()->json($response, 200);
    }
}
