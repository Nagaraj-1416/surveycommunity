<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class users extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $users = array(
            array('id' => '1','name' => 'Aadhi','email' => 'admin@gmail.com','email_verified_at' => NULL,'password' => '$2y$10$XizyCHFtpzWZcfpQVUaj0eac7gctBSgzIlP/YVEMqIVeZU/nlwoie','remember_token' => 'MpkCBMF4n5mUcU5TdZrRwhyogkh0MD1epy0cmvTY5lelHwBtJZg02A3lI1p4','created_at' => '2023-04-02 07:11:51','updated_at' => '2023-06-29 09:34:35'),
          );

        
          DB::table('users')->insert($users);
    }
}
