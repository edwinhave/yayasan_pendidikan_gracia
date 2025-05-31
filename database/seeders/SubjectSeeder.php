<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            ['name' => 'Matematika', 'code' => 'MATH'],
            ['name' => 'Inggris', 'code' => 'ENG'],
            ['name' => 'Biologi', 'code' => 'BIO'],
            ['name' => 'Fisika', 'code' => 'PHYS'],
            ['name' => 'Sejarah', 'code' => 'HIST'],
            ['name' => 'Geografi', 'code' => 'GEO'],
            ['name' => 'Computer Science', 'code' => 'CS'],
            ['name' => 'Ekonomi', 'code' => 'ECON'],
        ];

        DB::table('subjects')->insert($subjects);
    }
}
