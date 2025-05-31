import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { PageProps } from '@/types';
import { MultiSelect } from '@/Components/ui/multi-select';

export default function Edit({
    users,
    auth,
    guru,
    subjects,
}: PageProps & { users: any[]; guru: any; subjects: any[] }) {
    const { data, setData, put, processing, errors } = useForm({
        user_name: guru.user.name,
        nip: guru.nip,
        subject_ids: guru.mata_pelajarans.map((val) => val.id),
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/guru/${guru.id}`);
    }

    const subjectList = subjects.map((val) => ({
        label: val.name,
        value: val.id,
    }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Guru</h2>}
        >
            <Head title="Guru" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold">Ubah Guru</h2>

                            <Input
                                placeholder="Nama Lengkap"
                                value={data.user_name}
                                onChange={(e) => setData('user_name', e.target.value)}
                            />
                            {errors.user_name && (
                                <div className="text-red-500 text-sm">{errors.user_name}</div>
                            )}

                            <Input
                                placeholder="NIP"
                                value={data.nip}
                                onChange={(e) => setData('nip', e.target.value)}
                            />
                            {errors.nip && <div className="text-red-500 text-sm">{errors.nip}</div>}

                            <MultiSelect
                                options={subjectList}
                                defaultValue={data.subject_ids}
                                onValueChange={(val) => setData('subject_ids', val)}
                                placeholder="Pilih mata pelajaran..."
                            />
                            {errors.subject_ids && (
                                <div className="text-red-500 text-sm">{errors.subject_ids}</div>
                            )}

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                                <Link href="/guru">
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
