<?php

namespace App\Http\Controllers;

use App\Models\MataPelajaran;
use App\Models\Nilai;
use App\Models\Siswa;
use Barryvdh\DomPDF\Facade\Pdf; // Tambahkan import library PDF
use Illuminate\Http\Request;
use Inertia\Inertia;

class NilaiController extends Controller
{
    public function index()
    {
        return Inertia::render('Nilai/Index', [
            'grades' => Nilai::with(['siswa', 'siswa.user', 'mata_pelajaran'])->get(),
        ]);
    }

    // ... (metode create, store, edit, update, destroy yang sudah ada)

    /**
     * Generate PDF report for all grades.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateAllGradesReport()
    {
        $grades = Nilai::with(['siswa.user', 'mata_pelajaran'])->get();
        $pdf = Pdf::loadView('reports.nilai_report', ['grades' => $grades, 'title' => 'Laporan Nilai Keseluruhan']);
        return $pdf->download('laporan-nilai-keseluruhan.pdf');
    }

    /**
     * Generate PDF report for the last 5 semesters.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateLastFiveSemestersReport()
    {
        // Ambil 5 semester terakhir dari database
        // Asumsi kolom `semester` adalah integer dan kita mengurutkan dari yang terbesar
        $grades = Nilai::with(['siswa.user', 'mata_pelajaran'])
            ->orderBy('semester', 'desc')
            ->take(5)
            ->get();

        $pdf = Pdf::loadView('reports.nilai_report', ['grades' => $grades, 'title' => 'Laporan Nilai 5 Semester Terakhir']);
        return $pdf->download('laporan-nilai-5-semester-terakhir.pdf');
    }
}
