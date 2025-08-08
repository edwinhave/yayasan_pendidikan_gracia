<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'guru_id',
        'mata_pelajaran_id',
        'nilai',
        'keterangan',
        // Tambahkan kolom lain yang relevan seperti 'student_id', 'semester', 'tahun_ajaran'
    ];

    /**
     * Get the teacher that owns the grade.
     */
    public function guru()
    {
        return $this->belongsTo(Guru::class);
    }

    /**
     * Get the subject that the grade belongs to.
     */
    public function mataPelajaran()
    {
        return $this->belongsTo(MataPelajaran::class);
    }
}
