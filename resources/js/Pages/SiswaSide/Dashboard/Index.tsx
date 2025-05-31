import SiswaLayout from '@/Layouts/SiswaLayout';
import { Head, router } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Alert, AlertTitle, AlertDescription } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { DataTable } from '@/Components/DataTable';
import { useMemo } from 'react';
import { columns } from './Columns';

export default function Dashboard({
    auth,
    siswa,
    sudahDaftar,
    sudahBayar,
    nilai,
}: PageProps & {
    siswa: any;
    sudahDaftar: boolean;
    sudahBayar: boolean;
    nilai: any[];
}) {
    const getColumns = useMemo(() => columns(), []);

    return (
        <SiswaLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-1 flex-col">
                            <div className="@container/main flex flex-1 flex-col gap-2">
                                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                    <div className="p-6 space-y-4">
                                        <h1 className="text-2xl font-bold">Informasi Akademik</h1>

                                        {!sudahDaftar && (
                                            <Alert variant="destructive">
                                                <AlertTitle>Pendaftaran Belum Selesai</AlertTitle>
                                                <AlertDescription>
                                                    Anda belum melengkapi pendaftaran. Silakan
                                                    lengkapi terlebih dahulu.
                                                </AlertDescription>
                                                <Button
                                                    className="mt-2"
                                                    onClick={() =>
                                                        router.visit('/pendaftaran-siswa')
                                                    }
                                                >
                                                    Lengkapi Pendaftaran
                                                </Button>
                                            </Alert>
                                        )}

                                        {sudahDaftar && !sudahBayar && (
                                            <Alert variant="destructive">
                                                <AlertTitle>Belum Membayar</AlertTitle>
                                                <AlertDescription>
                                                    Anda belum melakukan pembayaran. Silakan bayar
                                                    terlebih dahulu.
                                                </AlertDescription>
                                                <Button
                                                    className="mt-2"
                                                    onClick={() =>
                                                        router.visit('/pembayaran-siswa')
                                                    }
                                                >
                                                    Bayar Sekarang
                                                </Button>
                                            </Alert>
                                        )}

                                        {sudahDaftar && sudahBayar && (
                                            <div className="space-y-4">
                                                <div className="bg-muted p-4 rounded-lg">
                                                    <p>
                                                        <strong>Nama:</strong> {siswa.user.name}
                                                    </p>
                                                    <p>
                                                        <strong>NIS:</strong> {siswa.nis}
                                                    </p>
                                                    <p>
                                                        <strong>Kelas:</strong> {siswa.kelas}
                                                    </p>
                                                    <p>
                                                        <strong>Tahun Ajaran:</strong>{' '}
                                                        {siswa.tahun_ajaran}
                                                    </p>
                                                </div>

                                                <h2 className="text-xl font-semibold">Nilai</h2>
                                                {nilai.length > 0 ? (
                                                    <DataTable data={nilai} columns={getColumns} />
                                                ) : (
                                                    <div>Belum ada Data</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SiswaLayout>
    );
}
