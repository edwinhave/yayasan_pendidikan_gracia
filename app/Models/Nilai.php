<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nilai extends Model
{
    use HasFactory;

    protected $table = 'grades';

    protected $fillable = [
        'student_id',
        'subject_id',
        'score',
        'semester'
    ];

    public function siswa()
    {
        return $this->belongsTo(Siswa::class, 'student_id');
    }

    public function mata_pelajaran()
    {
        return $this->belongsTo(MataPelajaran::class, 'subject_id');
    }
}
