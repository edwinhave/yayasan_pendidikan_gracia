import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { PageProps } from '@/types';
import { MultiSelect } from '@/Components/ui/multi-select';

export default function Edit({ auth, mata_pelajaran }: PageProps & { mata_pelajaran: any }) {
    const { data, setData, put, processing, errors } = useForm({
        code: mata_pelajaran.code,
        name: mata_pelajaran.name,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/mata-pelajaran/${mata_pelajaran.id}`);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Mata Pelajaran
                </h2>
            }
        >
            <Head title="Mata Pelajaran" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold">Tambah Mata Pelajaran</h2>

                            <Input
                                placeholder="Kode Mata Pelajaran"
                                value={data.code}
                                onChange={(e) => setData('code', e.target.value)}
                            />
                            {errors.code && (
                                <div className="text-red-500 text-sm">{errors.code}</div>
                            )}

                            <Input
                                placeholder="Nama Mata Pelajaran"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            {errors.name && (
                                <div className="text-red-500 text-sm">{errors.name}</div>
                            )}

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                                <Link href="/mata-pelajaran">
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
