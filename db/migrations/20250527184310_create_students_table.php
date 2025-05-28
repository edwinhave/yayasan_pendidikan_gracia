<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateStudentsTable extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change(): void
    {
        $this->table('students')
            ->addColumn('user_id', 'integer', ['signed' => false])
            ->addColumn('nis', 'string', ['limit' => 20])
            ->addColumn('birthdate', 'date')
            ->addColumn('gender', 'enum', ['values' => ['male', 'female']])
            ->addColumn('address', 'text', ['null' => true])
            ->addTimestamps()
            ->addForeignKey('user_id', 'users', 'id', ['delete' => 'CASCADE'])
            ->create();
    }
}
