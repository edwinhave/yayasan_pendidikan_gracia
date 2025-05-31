<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use App\Models\Pendaftaran;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $siswaCount = Siswa::count();
        $guruCount = Guru::count();
        $pendaftarCount = Pendaftaran::count();

        $siswaGrowth = $this->calculateRecentGrowth(Siswa::class);
        $guruGrowth = $this->calculateRecentGrowth(Guru::class);
        $pendaftarGrowth = $this->calculateRecentGrowth(Pendaftaran::class);

        return Inertia::render('Dashboard/Index', [
            'siswaCount' => $siswaCount,
            'guruCount' => $guruCount,
            'pendaftarCount' => $pendaftarCount,
            'siswaRecentGrowth' => $siswaGrowth,
            'guruRecentGrowth' => $guruGrowth,
            'pendaftarRecentGrowth' => $pendaftarGrowth,
            'pendaftar' => Pendaftaran::get(),
        ]);
    }

    /**
     * Calculate recent month-over-month growth for a given model.
     */
    private function calculateRecentGrowth(string $model)
    {
        $recentData = $model::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, COUNT(*) as total')
            ->groupBy('month')
            ->orderByDesc('month')
            ->limit(2)
            ->get();

        if ($recentData->isEmpty()) {
            return null;
        }

        $current = $recentData[0];

        if ($recentData->count() === 1) {
            return [
                'current_month' => $current->month,
                'current_total' => $current->total,
                'previous_month' => null,
                'previous_total' => 0,
                'percentage_increase' => 100,
                'note' => 'First month with data.',
            ];
        }

        $previous = $recentData[1];

        $percentageIncrease = $previous->total > 0
            ? round((($current->total - $previous->total) / $previous->total) * 100, 2)
            : 100;

        return [
            'current_month' => $current->month,
            'current_total' => $current->total,
            'previous_month' => $previous->month,
            'previous_total' => $previous->total,
            'percentage_increase' => $percentageIncrease,
        ];
    }
}
