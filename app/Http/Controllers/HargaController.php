<?php

namespace App\Http\Controllers;

use App\Models\Harga;
use App\Models\MataPelajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HargaController extends Controller
{
    public function index()
    {
        return Inertia::render('Harga/Index', [
            'prices' => Harga::with('mata_pelajaran')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Harga/Create', ['subjects' => MataPelajaran::get(),]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'subject_id' => 'required|string|max:20',
            'amount' => 'required|string|max:100',
            'description' => 'required|string|max:256',
        ]);

        // Create guru with newly created user_id
        Harga::create($data);

        return redirect()->route('harga.index')->with('success', 'Harga created.');
    }

    public function edit(Harga $harga)
    {
        return Inertia::render('Harga/Edit', [
            'harga' => $harga,
            'subjects' => MataPelajaran::get(),
        ]);
    }

    public function update(Request $request, Harga $harga)
    {
        $data = $request->validate([
            'subject_id' => 'required|string|max:20',
            'amount' => 'required|string|max:100',
            'description' => 'required|string|max:256',
        ]);

        $harga->update($data);

        return redirect()->route('harga.index')->with('success', 'Harga updated.');
    }

    public function destroy(Harga $harga)
    {
        $harga->delete();

        return redirect()->route('harga.index')->with('success', 'Harga deleted.');
    }
}
