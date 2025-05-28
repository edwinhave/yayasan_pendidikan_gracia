<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateGradesTable extends AbstractMigration
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
        $this->table('grades')
            ->addColumn('student_id', 'integer', ['signed' => false])
            ->addColumn('subject_id', 'integer', ['signed' => false])
            ->addColumn('score', 'integer')
            ->addColumn('semester', 'string')
            ->addTimestamps()
            ->addForeignKey('student_id', 'students', 'id', ['delete' => 'CASCADE'])
            ->addForeignKey('subject_id', 'subjects', 'id', ['delete' => 'CASCADE'])
            ->create();
    }
}
