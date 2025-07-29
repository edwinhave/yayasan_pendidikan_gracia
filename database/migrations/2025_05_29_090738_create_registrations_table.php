<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();

            // Data Pribadi
            $table->string('full_name');
            $table->enum('gender', ['Laki-laki', 'Perempuan']);
            $table->string('nisn', 20)->nullable();
            $table->string('nik', 20)->nullable();
            $table->string('no_kk', 20)->nullable();
            $table->string('birth_place')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('birth_certificate_no')->nullable();
            $table->string('religion')->nullable();
            $table->string('citizenship')->default('WNI');
            $table->string('special_needs')->nullable();

            // Alamat
            $table->string('address')->nullable();
            $table->string('rt', 5)->nullable();
            $table->string('rw', 5)->nullable();
            $table->string('dusun')->nullable();
            $table->string('kelurahan')->nullable();
            $table->string('kecamatan')->nullable();
            $table->string('postal_code', 10)->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->string('residence_type')->nullable();
            $table->string('transportation')->nullable();

            // Informasi Keluarga
            $table->string('child_number')->nullable();
            $table->string('work')->nullable();
            $table->boolean('has_kip')->default(false);
            $table->boolean('receive_kip')->default(false);
            $table->string('pip_reason')->nullable();

            // Data Ayah
            $table->string('father_name')->nullable();
            $table->string('father_nik')->nullable();
            $table->year('father_birth_year')->nullable();
            $table->string('father_education')->nullable();
            $table->string('father_occupation')->nullable();
            $table->string('father_income')->nullable();
            $table->string('father_special_needs')->nullable();

            // Data Ibu
            $table->string('mother_name')->nullable();
            $table->string('mother_nik')->nullable();
            $table->year('mother_birth_year')->nullable();
            $table->string('mother_education')->nullable();
            $table->string('mother_occupation')->nullable();
            $table->string('mother_income')->nullable();
            $table->string('mother_special_needs')->nullable();

            // Data Wali
            $table->string('guardian_name')->nullable();
            $table->string('guardian_nik')->nullable();
            $table->year('guardian_birth_year')->nullable();
            $table->string('guardian_education')->nullable();
            $table->string('guardian_occupation')->nullable();
            $table->string('guardian_income')->nullable();

            // Kontak
            $table->string('phone_home')->nullable();
            $table->string('phone_mobile')->nullable();
            $table->string('email')->nullable();

            // Data Periodik
            $table->integer('height')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('head_circumference')->nullable();
            $table->string('distance_to_school')->nullable();
            $table->string('distance_km')->nullable();
            $table->string('travel_time')->nullable();
            $table->integer('siblings')->nullable();

            // Kompetensi & Status Masuk
            $table->string('skill_competency')->nullable(); // khusus SMK
            $table->enum('registration_type', ['Siswa Baru', 'Pindahan', 'Kembali Bersekolah'])->nullable();
            $table->string('student_number')->nullable();
            $table->date('entry_date')->nullable();
            $table->string('previous_school')->nullable();
            $table->string('un_number')->nullable();
            $table->string('ijazah_number')->nullable();
            $table->string('skhun_number')->nullable();

            // Kesejahteraan
            $table->string('welfare_type')->nullable();
            $table->string('welfare_card_number')->nullable();
            $table->string('welfare_name_on_card')->nullable();

            // Status Pendaftaran
            $table->boolean('is_drafted')->default(true);
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->timestamp('submitted_at')->useCurrent();

            $table->foreignId('student_id')
                ->constrained()
                ->onDelete('cascade')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
