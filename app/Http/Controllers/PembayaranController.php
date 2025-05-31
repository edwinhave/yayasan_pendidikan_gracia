<?php

namespace App\Http\Controllers;

use App\Models\MataPelajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PembayaranController extends Controller
{
    public function index()
    {
        return Inertia::render('MataPelajaran/Index', [
            'subjects' => MataPelajaran::get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('MataPelajaran/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'code' => 'required|string|max:20',
            'name' => 'required|string|max:100',
        ]);

        // Create guru with newly created user_id
        MataPelajaran::create($data);

        return redirect()->route('mata-pelajaran.index')->with('success', 'Mata Pelajaran created.');
    }

    public function edit(MataPelajaran $mataPelajaran)
    {
        return Inertia::render('MataPelajaran/Edit', [
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
}
