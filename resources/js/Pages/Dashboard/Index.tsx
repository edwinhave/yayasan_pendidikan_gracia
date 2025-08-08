import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Badge } from '@/Components/ui/badge';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import { DataTable } from '@/Components/DataTable';
import { columns } from './Columns';

export default function Dashboard({
    auth,
    siswaCount,
    guruCount,
    pendaftarCount,
    siswaRecentGrowth,
    guruRecentGrowth,
    pendaftarRecentGrowth,
    pendaftar,
}: PageProps & {
    siswaCount: number;
    guruCount: number;
    pendaftarCount: number;
    siswaRecentGrowth: any;
    guruRecentGrowth: any;
    pendaftarRecentGrowth: any;
    pendaftar: any[];
}) {
    return (
        <AuthenticatedLayout
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
                                    {/* Kartu Statistik */}
                                    <div className="grid-cols-3 grid gap-4 px-4 lg:px-6">
                                        <Card>
                                            <CardHeader className="relative">
                                                <CardDescription>Siswa</CardDescription>
                                                <CardTitle className="text-2xl font-semibold">
                                                    {siswaCount}
                                                </CardTitle>
                                                <div className="absolute right-4 top-4">
                                                    <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                                                        <TrendingUpIcon className="size-3" />+
                                                        {siswaRecentGrowth
                                                            ? siswaRecentGrowth.percentage_increase
                                                            : 0}
                                                        %
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="flex-col items-start gap-1 text-sm">
                                                <div className="flex gap-2 font-medium">
                                                    Jumlah siswa bertambah <TrendingUpIcon className="size-4" />
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Dalam 1 bulan terakhir
                                                </div>
                                            </CardFooter>
                                        </Card>

                                        <Card>
                                            <CardHeader className="relative">
                                                <CardDescription>Guru</CardDescription>
                                                <CardTitle className="text-2xl font-semibold">
                                                    {guruCount}
                                                </CardTitle>
                                                <div className="absolute right-4 top-4">
                                                    <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                                                        <TrendingDownIcon className="size-3" />+
                                                        {guruRecentGrowth
                                                            ? guruRecentGrowth.percentage_increase
                                                            : 0}
                                                        %
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="flex-col items-start gap-1 text-sm">
                                                <div className="flex gap-2 font-medium">
                                                    Jumlah guru bertambah <TrendingUpIcon className="size-4" />
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Dalam 1 bulan terakhir
                                                </div>
                                            </CardFooter>
                                        </Card>

                                        <Card>
                                            <CardHeader className="relative">
                                                <CardDescription>Pendaftar</CardDescription>
                                                <CardTitle className="text-2xl font-semibold">
                                                    {pendaftarCount}
                                                </CardTitle>
                                                <div className="absolute right-4 top-4">
                                                    <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                                                        <TrendingUpIcon className="size-3" />+
                                                        {pendaftarRecentGrowth
                                                            ? pendaftarRecentGrowth.percentage_increase
                                                            : 0}
                                                        %
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="flex-col items-start gap-1 text-sm">
                                                <div className="flex gap-2 font-medium">
                                                    User retention <TrendingUpIcon className="size-4" />
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Engagement exceed targets
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>

                                    {/* Tabel Calon Siswa */}
                                    <div className="mt-12">
                                        <div className="px-4 lg:px-6 flex justify-between items-center">
                                            <h3 className="font-bold text-lg">Calon Siswa</h3>

                                            {/* Tombol Cetak PDF */}
                                            <Link
                                                href={route('pendaftar.export.pdf')}
                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                            >
                                                Cetak PDF
                                            </Link>
                                        </div>
                                        <DataTable data={pendaftar} columns={columns} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
