<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiswaController extends Controller
{
    public function index()
    {
        return Inertia::render('Siswa/Index', [
            'students' => Siswa::with('user')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Siswa/Create', [
            'users' => User::select('id', 'name')->get()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'user_name' => 'required|string|max:255',
            'nis' => 'required|string|max:20',
            'birthdate' => 'required|date',
            'gender' => 'required|in:laki-laki,perempuan',
            'address' => 'nullable|string',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $data['user_name'],
            'email' => uniqid('user') . '@example.com', // dummy email
            'password' => bcrypt('password'), // default password
        ]);

        $user->assignRole('siswa');

        // Create siswa with newly created user_id
        Siswa::create([
            'user_id' => $user->id,
            'nis' => $data['nis'],
            'birthdate' => $data['birthdate'],
            'gender' => $data['gender'],
            'address' => $data['address'],
        ]);

        return redirect()->route('siswa.index')->with('success', 'Siswa created.');
    }

    public function edit(Siswa $siswa)
    {
        // dd($siswa);
        return Inertia::render('Siswa/Edit', [
            'siswa' => $siswa->load('user'),
            'users' => User::select('id', 'name')->get()
        ]);
    }

    public function update(Request $request, Siswa $siswa)
    {
        $data = $request->validate([
            'user_name' => 'required|string|max:255',
            'nis' => 'required|string|max:20',
            'birthdate' => 'required|date',
            'gender' => 'required|in:laki-laki,perempuan',
            'address' => 'nullable|string',
        ]);

        // Create a new user
        $siswa->user->update([
            'name' => $data['user_name'],
        ]);

        $siswa->update($data);

        return redirect()->route('siswa.index')->with('success', 'Siswa updated.');
    }

    public function destroy(Siswa $siswa)
    {
        $siswa->delete();

        return redirect()->route('siswa.index')->with('success', 'Siswa deleted.');
    }
}
