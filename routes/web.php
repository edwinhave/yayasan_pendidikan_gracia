<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\HargaController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\MataPelajaranController;
use App\Http\Controllers\NilaiController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\SiswaSideController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/registration-ppdb/register', [PendaftaranController::class, 'register'])->name('registration-ppdb.register');
Route::resource('/registration-ppdb', PendaftaranController::class);


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('/siswa', SiswaController::class);
    Route::resource('/guru', GuruController::class);
    Route::resource('/mata-pelajaran', MataPelajaranController::class);
    Route::resource('/nilai', NilaiController::class);
    Route::resource('/harga', HargaController::class);
    Route::resource('/pendaftaran', PendaftaranController::class);
    Route::resource('/pembayaran', PembayaranController::class);

    Route::get('/dashboard-siswa', [SiswaSideController::class, 'dashboard'])->name('siswaSide.dashboard');
    Route::get('/pendaftaran-siswa', [SiswaSideController::class, 'pendaftaran'])->name('siswaSide.pendaftaran');
    Route::get('/pembayaran-siswa', [SiswaSideController::class, 'pembayaran'])->name('siswaSide.pembayaran');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
