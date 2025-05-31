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

export default function MataPelajaran({ auth, grades }: PageProps & { grades: any[] }) {
    const [open, setOpen] = useState<boolean>(false);
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);

    const [idDelete, setIdDelete] = useState<string>('');
    const [nameDelete, setNameDelete] = useState<string>('');

    const useDelete = useCallback(async (id: string, name: string) => {
        setNameDelete(name);
        setIdDelete(id);
        setOpenConfirmation(true);
    }, []);

    const getColumns = useMemo(() => columns({ onDelete: useDelete }), [useDelete]);

    const handleDeleteType = async () => {
        try {
            setOpenConfirmation(false);
            router.delete(`/nilai/${idDelete}`, {
                onSuccess: () => {
                    router.reload();
                },
            });
            setIdDelete('');
            setNameDelete('');
            setOpen(true);
        } catch (error) {
            setOpenConfirmation(false);
            console.error('Delete type failed:', (error as Error).message);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nilai</h2>}
        >
            <Head title="Nilai" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-1 flex-col">
                            <div className="@container/main flex flex-1 flex-col gap-2 py-4">
                                <div className="flex justify-end px-6">
                                    <Button id="add-account-info" asChild>
                                        <Link href={route('nilai.create')}>
                                            <Plus className="mr-2 h-4 w-4" /> Tambah Nilai
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex flex-col">
                                    <DataTable data={grades} columns={getColumns} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AlertConfirmed
                open={open}
                onOpenChange={setOpen}
                description={`User ${nameDelete} has been deleted successfully`}
                onConfirmError={() => setOpen(false)}
                onConfirmSuccess={() => setOpen(false)}
                isError={false}
            />
            <AlertConfirmation
                openConfirmation={openConfirmation}
                setOpenConfirmation={setOpenConfirmation}
                alertConfirmationText={`Are you sure you want to delete ${nameDelete}?`}
                textConfirm="Yes"
                variant="destructive"
                onConfirm={handleDeleteType}
                onCancel={() => setOpenConfirmation(false)}
            />
        </AuthenticatedLayout>
    );
}
