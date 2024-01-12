<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $community_post_categories = array(
            array('id' => '1','category_name' => 'Total Station Operator','status' => '1','created_by' => NULL,'updated_by' => NULL,'created_at' => '2023-09-21 20:55:50','updated_at' => '2023-09-21 20:55:50'),
            array('id' => '2','category_name' => 'Assistant Surveyor','status' => '1','created_by' => NULL,'updated_by' => NULL,'created_at' => '2023-09-21 20:55:50','updated_at' => '2023-09-21 20:55:50'),
            array('id' => '3','category_name' => 'Land Surveyor','status' => '1','created_by' => NULL,'updated_by' => NULL,'created_at' => '2023-09-21 20:55:50','updated_at' => '2023-09-21 20:55:50'),
            array('id' => '4','category_name' => 'Machine Rent','status' => '1','created_by' => NULL,'updated_by' => NULL,'created_at' => '2023-09-21 20:55:50','updated_at' => '2023-09-21 20:55:50')
          );
            DB::table('community_post_categories')->insert($community_post_categories);
    }
}
