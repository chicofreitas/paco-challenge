<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\History>
 */
class HistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
                'user_id' => 1,
                'from' => 'USD',
                'to' => 'BRL',
                'from_price' => 1.00,
                'to_price' => 5.10, // password
                'cotation' => 5.19,
        ];
    }
}
