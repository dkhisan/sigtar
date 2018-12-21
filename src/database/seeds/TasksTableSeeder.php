<?php

use Illuminate\Database\Seeder;
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * this will empty our current records
         */
        Task::truncate();

        /*
         * populate db with random data
         */
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Task::create([
                'user_id' => 1, // only for test proposes
                'name' => $faker->sentence,
                'description' => $faker->paragraph,
                'deadline' => $faker->dateTime
            ]);
        }
    }
}
