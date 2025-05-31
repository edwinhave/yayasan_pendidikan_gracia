<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    use HasFactory;

    protected $table = 'registrations';

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'birth_date',
        'birth_place',
        'address',
        'guardian_name',
        'guardian_phone',
        'previous_school',
        'status',
        'submitted_at',
        'student_id'
    ];

    public function siswa()
    {
        return $this->belongsTo(Siswa::class);
    }
}
