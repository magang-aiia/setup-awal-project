<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class MadingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = User::pluck('id')->toArray();
        return [
            'judul' => $this->faker->title(),
            'caption' => $this->faker->paragraph(),
            'user_id' => $this->faker->randomElement($users),
        ];
    }
}
