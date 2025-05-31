<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MataPelajaran extends Model
{
    use HasFactory;

    protected $table = 'subjects';

    protected $fillable = [
        'name',
        'code',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function gurus()
    {
        return $this->belongsToMany(Guru::class, 'subject_teacher', 'subject_id', 'teacher_id');
    }
}
