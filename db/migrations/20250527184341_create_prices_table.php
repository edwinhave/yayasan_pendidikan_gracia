<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class CreatePricesTable extends AbstractMigration
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
        $this->table('prices')
            ->addColumn('subject_id', 'integer', ['signed' => false])
            ->addColumn('amount', 'decimal', ['precision' => 10, 'scale' => 2])
            ->addColumn('description', 'string', ['null' => true])
            ->addTimestamps()
            ->addForeignKey('subject_id', 'subjects', 'id', ['delete' => 'SET_NULL'])
            ->create();
    }
}
