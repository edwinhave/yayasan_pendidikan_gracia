<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateRegistrationsTable extends AbstractMigration
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
        $this->table('registrations')
            ->addColumn('student_id', 'integer', ['signed' => false])
            ->addColumn('registered_at', 'datetime')
            ->addColumn('status', 'enum', ['values' => ['pending', 'accepted', 'rejected']])
            ->addTimestamps()
            ->addForeignKey('student_id', 'students', 'id', ['delete' => 'CASCADE'])
            ->create();
    }
}
