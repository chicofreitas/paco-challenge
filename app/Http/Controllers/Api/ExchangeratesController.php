<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ExchangeratesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $response = Http::get('http://api.exchangeratesapi.io/v1/latest?access_key=bb1974e5179abbca1d91e08126351a8b');
            return $response->json();
        } catch (\Throwable $th) {
            throw $th;
        }
    }

}
