<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        Validator::make($request->all(), [
            'username' => 'required|max:255',
            'password' => 'required|max:20'
        ])->validate();

        $username = trim($request->username);
        $password = trim($request->password);

        $result = DB::table('users')
            ->where([
                ['username', $username],
                ['active', true]
            ])->first();

        if (!$result) {
            return response()->json([
                'errors' => ['Usuário não foi encontrado ou não está ativo.']
            ], 422);
        }

        if (!Hash::check($password, $result->password)) {
            return response()->json([
                'errors' => ['Senha incorreta, tente novamente.']
            ], 422);
        }

        $user = [
            'id' => $result->id,
            'name' => $result->name,
            'username' => $result->username,
            'email' => $result->email,
            'remember_token' => $result->remember_token,
            'created_at' => $result->created_at,
            'updated_at' => $result->updated_at
        ];

        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $result->email,
            'password' => $password,
            'scopes' => ['*']
        ];

        $request = Request::create('/oauth/token', 'post', $data);

        $response = app()->handle($request);

        if ($response->getStatusCode() != 200) {
            return response()->json([
                'errors' => ['Something went wrong while retrieving data. Try again later.'],
                'res' => $response
            ], 422);
        }

        $content = json_decode($response->getContent());

        return response()->json([
            'token' => $content->access_token,
            'user' => $user
        ], 200);
    }

    public function logout()
    {
        $token = auth()->user()->token();

        $refresh_token = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $token->id)
            ->update([
                'revoked' => true
            ]);

        $token->revoke();

        return response()->json(null, 200);
    }
}
