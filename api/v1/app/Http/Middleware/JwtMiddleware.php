<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

class JwtMiddleware
{
    public function handle($request, Closure $next, $guard = null)
    {
        $token = $request->get('token');
        
        if(!$token) {
            // Unauthorized response if token not there
            return response()->json([
                'error' => 'Token not provided.'
            ], 401);
        }

        try {
            $credentials = JWT::decode($token, env('JWT_SECRET'), ['HS256']);
        } catch(ExpiredException $e) {
            // return response()->json([
            //     'Expired' => 'Provided token is expired.' . $e->getMessage()
            // ], 400);
            $payload = [
                'iss' => "ebaaba-jwt", // Issuer of the token
                'sub' => '12345', // Subject of the token
                'iat' => time(), // Time when JWT was issued. 
                'exp' => time() + 60 * 1 // Expiration time
            ];
            $newToken = JWT::encode($payload, env('JWT_SECRET'));
            $credentials = JWT::decode($newToken, env('JWT_SECRET'), ['HS256']);
        } catch(Exception $e) {
            return response()->json([
                'error' => 'An error while decoding token.'
            ], 400);
        }

        $user = $credentials->sub;

        // Now let's put the user in the request class so that you can grab it from there
        $request->auth = $user;

        return $next($request);
    }
}
