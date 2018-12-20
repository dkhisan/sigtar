<?php

use Illuminate\Database\Seeder;
use App\User;

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

        User::create([
            'name' => 'John Doe',
            'username' => 'john_test',
            'password' => bcrypt(str_random(6))
        ]);
    }
}
