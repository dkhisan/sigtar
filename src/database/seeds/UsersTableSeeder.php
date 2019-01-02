<?php

use Illuminate\Database\Seeder;
use App\User;

use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
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
        //User::truncate();

        $faker = \Faker\Factory::create();
        $phash = Hash::make('12345');

        User::create([
            'name' => 'John Doe',
            'username' => 'test.john',
            'password' => $phash,
            'email' => $faker->email
        ]);
    }
}
