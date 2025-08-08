<?php

namespace App\Http\Controllers;

use App\Models\MataPelajaran;
use App\Models\Pendaftaran;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Providers\RouteServiceProvider;
use Barryvdh\DomPDF\Facade\Pdf;

class PendaftaranController extends Controller
{
    public function index()
    {
        return Inertia::render('Pendaftaran/Index', [
            'pendaftaran' => Pendaftaran::get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('MataPelajaran/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'full_name'       => ['required', 'string', 'max:255'],
            'email'           => ['required', 'email', 'max:255', 'unique:registrations,email'],
            'phone_mobile'           => ['nullable', 'string', 'max:20'],
            'birth_date'      => ['nullable', 'date'],
            'birth_place'     => ['nullable', 'string', 'max:255'],
            'address'         => ['nullable', 'string', 'max:500'],
            'previous_school' => ['nullable', 'string', 'max:255'],
        ]);

        $user = User::create([
            'name' => $data['full_name'],
            'email' => $data['email'],
            'password' => bcrypt('password'), // default password
        ]);

        $user->assignRole('siswa');

        $student = Siswa::create([
            'user_id' => $user->id,
            'nis' => '',
            'birthdate' => $data['birth_date'],
            'address' => $data['address'],
        ]);

        // Create guru with newly created user_id
        Pendaftaran::create([
            ...$data,
            'student_id' => $student->id
        ]);

        $login = Auth::login($user);

        return redirect()->route('siswaSide.dashboard')->with('success', 'Berhasil Mendaftar.');
    }

    public function edit(MataPelajaran $mataPelajaran)
    {
        return Inertia::render('MataPelajaran/Edit', [
            'mata_pelajaran' => $mataPelajaran,
        ]);
    }

    public function update(Request $request, Pendaftaran $pendaftaran)
    {
        $data = $request->validate([
            'full_name'       => ['required', 'string', 'max:255'],
            'email'           => ['required', 'email', 'max:255', 'unique:registrations,email,' . $pendaftaran->id],
            'phone'           => ['nullable', 'string', 'max:20'],
            'birth_date'      => ['nullable', 'date'],
            'birth_place'     => ['nullable', 'string', 'max:255'],
            'address'         => ['nullable', 'string', 'max:500'],
            'guardian_name'   => ['nullable', 'string', 'max:255'],
            'guardian_phone'  => ['nullable', 'string', 'max:20'],
            'previous_school' => ['nullable', 'string', 'max:255'],
        ]);

        $pendaftaran->update($data);

        return redirect()->route('mata-pelajaran.index')->with('success', 'Mata Pelajaran updated.');
    }

    public function destroy(MataPelajaran $mataPelajaran)
    {
        $mataPelajaran->delete();

        return redirect()->route('mata-pelajaran.index')->with('success', 'Mata Pelajaran deleted.');
    }

    public function register()
    {
        return Inertia::render('Pendaftaran/Daftar');
    }

    public function exportPdf()
    {
        $pendaftar = Pendaftaran::select('full_name', 'created_at', 'status_bayar')->get();

        $pdf = Pdf::loadView('pendaftar_pdf', compact('pendaftar'));

        return $pdf->download('laporan_pendaftar.pdf');
    }
}
