<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'user_id',
        'nis',
        'birthdate',
        'gender',
        'address',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
