<?php

namespace App\Http\Controllers;

use App\Models\MataPelajaran;
use App\Models\Nilai;
use App\Models\Siswa;
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

    public function create()
    {
        return Inertia::render('Nilai/Create', [
            'students' => Siswa::with('user')->get(),
            'subjects' => MataPelajaran::get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'student_id' => 'required|string|max:100',
            'subject_id' => 'required|string|max:100',
            'score' => 'required|string|max:100',
            'semester' => 'required|string|max:100',
        ]);

        Nilai::create($data);

        return redirect()->route('nilai.index')->with('success', 'Nilai created.');
    }

    public function edit(Nilai $nilai)
    {
        return Inertia::render('Nilai/Edit', [
            'nilai' => $nilai,
            'students' => Siswa::with('user')->get(),
            'subjects' => MataPelajaran::get(),
        ]);
    }

    public function update(Request $request, Nilai $nilai)
    {
        $data = $request->validate([
            'student_id' => 'required|string|max:100',
            'subject_id' => 'required|string|max:100',
            'score' => 'required|string|max:100',
            'semester' => 'required|string|max:100',
        ]);

        $nilai->update($data);

        return redirect()->route('nilai.index')->with('success', 'Nilai updated.');
    }

    public function destroy(Nilai $nilai)
    {
        $nilai->delete();

        return redirect()->route('nilai.index')->with('success', 'Nilai deleted.');
    }
}
