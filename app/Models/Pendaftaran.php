<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    use HasFactory;

    protected $table = 'registrations';

    protected $fillable = [
        // Data Pribadi
        'full_name',
        'gender',
        'nisn',
        'nik',
        'no_kk',
        'birth_place',
        'birth_date',
        'birth_certificate_no',
        'religion',
        'citizenship',
        'special_needs',

        // Alamat
        'address',
        'rt',
        'rw',
        'dusun',
        'kelurahan',
        'kecamatan',
        'postal_code',
        'latitude',
        'longitude',
        'residence_type',
        'transportation',

        // Informasi Keluarga
        'child_number',
        'work',
        'has_kip',
        'receive_kip',
        'pip_reason',

        // Data Ayah
        'father_name',
        'father_nik',
        'father_birth_year',
        'father_education',
        'father_occupation',
        'father_income',
        'father_special_needs',

        // Data Ibu
        'mother_name',
        'mother_nik',
        'mother_birth_year',
        'mother_education',
        'mother_occupation',
        'mother_income',
        'mother_special_needs',

        // Data Wali
        'guardian_name',
        'guardian_nik',
        'guardian_birth_year',
        'guardian_education',
        'guardian_occupation',
        'guardian_income',

        // Kontak
        'phone_home',
        'phone_mobile',
        'email',

        // Data Periodik
        'height',
        'weight',
        'head_circumference',
        'distance_to_school',
        'distance_km',
        'travel_time',
        'siblings',

        // Kompetensi & Status Masuk
        'skill_competency',
        'registration_type',
        'student_number',
        'entry_date',
        'previous_school',
        'un_number',
        'ijazah_number',
        'skhun_number',

        // Kesejahteraan
        'welfare_type',
        'welfare_card_number',
        'welfare_name_on_card',

        // Status
        'status',
        'submitted_at',
        'student_id',
    ];

    protected $dates = ['birth_date', 'entry_date', 'submitted_at'];

    public function siswa()
    {
        return $this->belongsTo(Siswa::class, 'student_id');
    }
}
