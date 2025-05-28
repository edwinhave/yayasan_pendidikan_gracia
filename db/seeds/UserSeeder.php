<?php

declare(strict_types=1);

use Phinx\Seed\AbstractSeed;

class UserSeeder extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * https://book.cakephp.org/phinx/0/en/seeding.html
     */
    public function run(): void
    {
        $password = password_hash('password123', PASSWORD_DEFAULT); // change this as needed

        $data = [
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => $password,
                'role' => 'guru',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ],
        ];

        $this->table('users')->insert($data)->saveData();
    }
}
