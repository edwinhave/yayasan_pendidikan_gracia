import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Plus } from 'lucide-react';
import { DataTable } from '@/Components/DataTable';
import { columns } from './Columns';
import { Button } from '@/Components/ui/button';
import { useCallback, useMemo, useState } from 'react';
import AlertConfirmed from '@/Components/reusable/alert-confirmed';
import AlertConfirmation from '@/Components/reusable/alert-confirmation';

export default function Pendaftaran({ auth, pendaftaran }: PageProps & { pendaftaran: any[] }) {
    const getColumns = useMemo(() => columns(), []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Pendaftaran</h2>
            }
        >
            <Head title="Pendaftaran" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-1 flex-col">
                            <div className="@container/main flex flex-1 flex-col gap-2 py-4">
                                <div className="flex flex-col">
                                    <DataTable data={pendaftaran} columns={getColumns} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
