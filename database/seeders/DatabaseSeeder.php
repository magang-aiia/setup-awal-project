<?php

namespace Database\Seeders;

use App\Models\Mading;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(4)->create();
        Mading::factory(10)->create();
    }
}
