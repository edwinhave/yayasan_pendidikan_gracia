<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pembayaran extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     */
    protected $table = 'payments';

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'student_id',
        'amount',
        'paid_at',
        'method',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'amount' => 'decimal:2',
        'paid_at' => 'datetime',
    ];

    /**
     * Get the student that owns the payment.
     */
    public function student()
    {
        return $this->belongsTo(Siswa::class, 'student_id', 'id');
    }
}
