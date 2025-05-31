<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Harga extends Model
{
    use HasFactory;

    protected $table = 'prices';

    protected $fillable = [
        'subject_id',
        'amount',
        'description',
    ];

    public function mata_pelajaran()
    {
        return $this->belongsTo(MataPelajaran::class, 'subject_id');
    }
}
