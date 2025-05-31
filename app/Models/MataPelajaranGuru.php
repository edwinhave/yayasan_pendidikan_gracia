<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MataPelajaranGuru extends Model
{
    use HasFactory;

    protected $table = 'subject_teacher';

    protected $fillable = [
        'teacher_id',
        'subject_id',
    ];

    public function mata_pelajarans()
    {
        return $this->belongsToMany(MataPelajaran::class);
    }
}
