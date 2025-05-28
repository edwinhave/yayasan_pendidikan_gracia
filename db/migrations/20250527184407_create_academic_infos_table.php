<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreateAcademicInfosTable extends AbstractMigration
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
        $this->table('academic_infos')
            ->addColumn('student_id', 'integer', ['signed' => false])
            ->addColumn('info_type', 'string')
            ->addColumn('description', 'text')
            ->addColumn('date', 'date')
            ->addTimestamps()
            ->addForeignKey('student_id', 'students', 'id', ['delete' => 'CASCADE'])
            ->create();
    }
}
