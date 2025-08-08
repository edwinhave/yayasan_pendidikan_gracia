<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\MataPelajaran;
use App\Models\User;
use App\Models\Grade;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function index()
    {
        return Inertia::render('Guru/Index', [
            'students' => Guru::with(['user', 'mata_pelajarans'])->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/Create', [
            'users' => User::select('id', 'name')->get(),
            'subjects' => MataPelajaran::select('id', 'name')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'user_name' => 'required|string|max:255',
            'nip' => 'required|string|max:20',
            'subject_ids' => 'array|required',
            'subject_ids.*' => 'exists:subjects,id',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $data['user_name'],
            'email' => uniqid('user') . '@example.com', // dummy email
            'password' => bcrypt('password'), // default password
        ]);

        $user->assignRole('guru');

        // Create guru with newly created user_id
        $teacher = Guru::create([
            'user_id' => $user->id,
            'nip' => $data['nip'],
        ]);

        $teacher->mata_pelajarans()->sync($data['subject_ids']);

        return redirect()->route('guru.index')->with('success', 'Guru created.');
    }

    public function edit(Guru $guru)
    {
        return Inertia::render('Guru/Edit', [
            'guru' => $guru->load(['user', 'mata_pelajarans']),
            'users' => User::select('id', 'name')->get(),
            'subjects' => MataPelajaran::select('id', 'name')->get(),
        ]);
    }

    public function update(Request $request, Guru $guru)
    {
        $data = $request->validate([
            'user_name' => 'required|string|max:255',
            'nip' => 'required|string|max:20',
            'subject_ids' => 'array|required',
            'subject_ids.*' => 'exists:subjects,id',
        ]);

        // Create a new user
        $guru->user->update([
            'name' => $data['user_name'],
        ]);

        $guru->update([
            'nip' => $data['nip'],
        ]);

        $guru->mata_pelajarans()->sync($data['subject_ids']);

        return redirect()->route('guru.index')->with('success', 'Guru updated.');
    }

    public function destroy(Guru $guru)
    {
        $guru->delete();

        return redirect()->route('guru.index')->with('success', 'Guru deleted.');
    }

    /**
     * Generate a PDF report of teachers' grade input status.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateReportPdf()
    {
        // 1. Get all teacher data
        $gurus = Guru::with('user')->get();

        // 2. Determine the status for each teacher
        $data = $gurus->map(function ($guru) {
            // Check if the teacher has entered any grades.
            $hasInputtedGrades = Grade::where('guru_id', $guru->id)->exists();

            return [
                'nama' => $guru->user->name,
                'status' => $hasInputtedGrades ? 'Sudah Input Nilai' : 'Belum Input Nilai',
            ];
        });

        // 3. Load the Blade template and pass the data to it
        $pdf = Pdf::loadView('reports.guru_status_report', ['data' => $data]);

        // 4. Download the PDF file with a meaningful name
        return $pdf->download('Laporan-Status-Input-Nilai-Guru.pdf');
    }

    /**
     * Generate PDF report for teachers who have not entered grades.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateUnfinishedReportPdf()
    {
        // Ambil semua guru
        $gurus = Guru::with('user')->get();

        // Filter guru yang belum input nilai
        $gurusBelumInput = $gurus->filter(function ($guru) {
            return !Grade::where('guru_id', $guru->id)->exists();
        });

        // Load template dan kirim data guru yang belum input
        $pdf = Pdf::loadView('reports.guru_belum_input_report', [
            'data' => $gurusBelumInput,
            'title' => 'Daftar Guru Belum Input Nilai',
        ]);

        return $pdf->download('Laporan-Guru-Belum-Input-Nilai.pdf');
    }
}
