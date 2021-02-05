<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use Auth;

class CheckFO
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        if($user->user_type === 'frontoffice') {
            return $next($request);
        }
        else
        {
            return response()->json([
                'success' => 0,
                'message' => 'This page is limited for Front Office User',
                'data' => []
            ], 401);
        }

        return $next($request);
    }
}
