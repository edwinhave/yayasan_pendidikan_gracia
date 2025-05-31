import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { PageProps } from '@/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';

export default function Edit({
    auth,
    harga,
    subjects,
}: PageProps & { harga: any; subjects: any[] }) {
    const { data, setData, put, processing, errors, transform } = useForm({
        subject_id: harga.subject_id,
        amount: harga.amount,
        description: harga.description,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        transform((data) => ({
            ...data,
            subject_id: String(data.subject_id),
        }));
        put(`/harga/${harga.id}`);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Harga</h2>}
        >
            <Head title="Harga" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold">Ubah Harga</h2>

                            <Select
                                onValueChange={(val) => setData('subject_id', val)}
                                defaultValue={data.subject_id}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Mata Pelajaran" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map((s) => (
                                        <SelectItem key={s.id} value={s.id}>
                                            {s.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.subject_id && (
                                <div className="text-red-500">{errors.subject_id}</div>
                            )}

                            <Input
                                placeholder="Masukkan Biaya"
                                type="number"
                                value={data.amount}
                                onChange={(e) => setData('amount', parseInt(e.target.value))}
                            />
                            {errors.amount && <div className="text-red-500">{errors.amount}</div>}

                            <Textarea
                                placeholder="Masukkan Deskripsi"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            {errors.description && (
                                <div className="text-red-500">{errors.description}</div>
                            )}

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                                <Link href="/harga">
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
