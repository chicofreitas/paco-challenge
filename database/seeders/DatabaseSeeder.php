<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
             'name' => 'Guest',
             'email' => 'guest@paco.com',
         ]);

         \App\Models\History::factory()
            ->count(5)
            ->state( new Sequence(
                ['to' => 'BRL'],
                ['to' => 'CAD'],
                ['to' => 'USD'],
            ))
            ->create();
    }
}
