<?php

namespace App\Http\Controllers;

use App\Models\MataPelajaran;
use App\Models\Pembayaran;
use App\Models\Siswa;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PembayaranController extends Controller
{
    public function index()
    {
        return Inertia::render('Pembayaran/Index', [
            'payments' => Pembayaran::with(['user', 'mata_pelajarans'])->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Pembayaran/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'code' => 'required|string|max:20',
            'name' => 'required|string|max:100',
        ]);

        // Create guru with newly created user_id
        MataPelajaran::create($data);

        return redirect()->route('pembayaran.index')->with('success', 'Mata Pelajaran created.');
    }

    public function edit(MataPelajaran $mataPelajaran)
    {
        return Inertia::render('Pembayaran/Edit', [
            'mata_pelajaran' => $mataPelajaran,
        ]);
    }

    public function update(Request $request, MataPelajaran $mataPelajaran)
    {
        $data = $request->validate([
            'code' => 'required|string|max:20',
            'name' => 'required|string|max:100',
        ]);

        $mataPelajaran->update($data);

        return redirect()->route('mata-pelajaran.index')->with('success', 'Mata Pelajaran updated.');
    }

    public function destroy(MataPelajaran $mataPelajaran)
    {
        $mataPelajaran->delete();

        return redirect()->route('mata-pelajaran.index')->with('success', 'Mata Pelajaran deleted.');
    }

    /**
     * Generate PDF report for teachers who have not entered grades.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateReport()
    {
        // Ambil semua guru
        $studentsNotPaid = Siswa::doesntHave('payments')->get();;

        // Load template dan kirim data guru yang belum input
        $pdf = Pdf::loadView('reports.payment_report', [
            'data' => $studentsNotPaid,
            'title' => 'Daftar Murid Belum Bayar',
        ]);

        return $pdf->download('Laporan-Pembayaran.pdf');
    }
}
