<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\MataPelajaran;
use App\Models\User;
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
}
