<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    use HasFactory;

    protected $table = 'teachers';

    protected $fillable = [
        'user_id',
        'nip',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mata_pelajarans()
    {
        return $this->belongsToMany(MataPelajaran::class, 'subject_teacher', 'teacher_id', 'subject_id');
    }
}
