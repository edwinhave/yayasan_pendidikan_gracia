import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
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
                                    <div className="*:data-[slot=card]:shadow-xs grid-cols-3 grid gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
                                        <Card className="@container/card">
                                            <CardHeader className="relative">
                                                <CardDescription>Siswa</CardDescription>
                                                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                                    {siswaCount}
                                                </CardTitle>
                                                <div className="absolute right-4 top-4">
                                                    <Badge
                                                        variant="outline"
                                                        className="flex gap-1 rounded-lg text-xs"
                                                    >
                                                        <TrendingUpIcon className="size-3" />+
                                                        {siswaRecentGrowth
                                                            ? siswaRecentGrowth.percentage_increase
                                                            : 0}
                                                        %
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="flex-col items-start gap-1 text-sm">
                                                <div className="line-clamp-1 flex gap-2 font-medium">
                                                    Jumlah siswa bertambah{' '}
                                                    <TrendingUpIcon className="size-4" />
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Jumlah siswa dalam 1 bulan terakhir
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card className="@container/card">
                                            <CardHeader className="relative">
                                                <CardDescription>Guru</CardDescription>
                                                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                                    {guruCount}
                                                </CardTitle>
                                                <div className="absolute right-4 top-4">
                                                    <Badge
                                                        variant="outline"
                                                        className="flex gap-1 rounded-lg text-xs"
                                                    >
                                                        <TrendingDownIcon className="size-3" />+
                                                        {guruRecentGrowth
                                                            ? guruRecentGrowth.percentage_increase
                                                            : 0}
                                                        %
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="flex-col items-start gap-1 text-sm">
                                                <div className="line-clamp-1 flex gap-2 font-medium">
                                                    Jumlah guru bertambah{' '}
                                                    <TrendingUpIcon className="size-4" />
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Jumlah guru dalam 1 bulan terakhir
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card className="@container/card">
                                            <CardHeader className="relative">
                                                <CardDescription>Pendaftar</CardDescription>
                                                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                                    {pendaftarCount}
                                                </CardTitle>
                                                <div className="absolute right-4 top-4">
                                                    <Badge
                                                        variant="outline"
                                                        className="flex gap-1 rounded-lg text-xs"
                                                    >
                                                        <TrendingUpIcon className="size-3" />+
                                                        {pendaftarRecentGrowth
                                                            ? pendaftarRecentGrowth.percentage_increase
                                                            : 0}
                                                        %
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="flex-col items-start gap-1 text-sm">
                                                <div className="line-clamp-1 flex gap-2 font-medium">
                                                    Strong user retention{' '}
                                                    <TrendingUpIcon className="size-4" />
                                                </div>
                                                <div className="text-muted-foreground">
                                                    Engagement exceed targets
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>

                                    <div className="mt-12">
                                        <div className="px-4 lg:px-6 font-bold text-lg">
                                            Calon Siswa
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
