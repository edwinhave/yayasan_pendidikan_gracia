<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateTeachersTable extends AbstractMigration
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
        $this->table('teachers')
            ->addColumn('user_id', 'integer', ['signed' => false])
            ->addColumn('nip', 'string', ['limit' => 20])
            ->addColumn('specialization', 'string', ['null' => true])
            ->addTimestamps()
            ->addForeignKey('user_id', 'users', 'id', ['delete' => 'CASCADE'])
            ->create();
    }
}
