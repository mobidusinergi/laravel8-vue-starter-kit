<?php

namespace App\Http\Middleware;

use Closure;

use Auth;

class CheckApoteker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        if($user->user_type === 'apoteker') {
            return $next($request);
        }
        else
        {
            return response()->json([
                'success' => 0,
                'message' => 'This page is limited for Apoteker',
                'data' => []
            ], 401);
        }

        return $next($request);
    }
}