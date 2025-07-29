<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Nilai;
use App\Models\Pendaftaran;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaSideController extends Controller
{
    public function dashboard()
    {
        $siswa = Siswa::where('user_id', auth()->user()->id)->with('user')->first();

        $sudahDaftar = Pendaftaran::where('student_id', $siswa->id)->first()->is_drafted == false;
        // $sudahBayar = $siswa->pembayaran()->where('status', 'lunas')->exists();
        $nilai = Nilai::with('mata_pelajaran')->where('student_id', $siswa->id)->get();

        return Inertia::render('SiswaSide/Dashboard/Index', [
            'siswa' => $siswa,
            'sudahDaftar' => $sudahDaftar,
            'sudahBayar' => true,
            'nilai' => $nilai->map(function ($n) {
                return [
                    'mapel' => $n->mata_pelajaran->name,
                    'nilai' => $n->score,
                    'semester' => $n->semester,
                ];
            }),
        ]);
    }

    public function pendaftaran()
    {
        $siswa = Siswa::where('user_id', auth()->user()->id)->first();

        $pendaftaran = Pendaftaran::where('student_id', $siswa->id)->first()->is_drafted == false;

        return Inertia::render('SiswaSide/Pendaftaran/Index', [
            'siswa' => $siswa->only(['nama_lengkap', 'nis', 'kelas', 'tahun_ajaran']),
            '$pendaftaran' => $pendaftaran,
        ]);
    }

    public function pembayaran()
    {
        $siswa = Siswa::where('user_id', auth()->user()->id)->first();

        // $sudahDaftar = $siswa->pendaftaran()->exists();
        // $sudahBayar = $siswa->pembayaran()->where('status', 'lunas')->exists();
        $nilai = Nilai::with('mata_pelajaran')->where('student_id', $siswa->id)->get();

        return Inertia::render('SiswaSide/Dashboard/Index', [
            'siswa' => $siswa->only(['nama_lengkap', 'nis', 'kelas', 'tahun_ajaran']),
            'sudahDaftar' => false,
            'sudahBayar' => false,
            'nilai' => $nilai->map(function ($n) {
                return [
                    'mapel' => $n->mataPelajaran->nama,
                    'nilai' => $n->nilai,
                ];
            }),
        ]);
    }
}
