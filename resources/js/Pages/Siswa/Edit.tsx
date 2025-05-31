import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectItem,
    SelectContent,
} from '@/Components/ui/select';
import { PageProps } from '@/types';
import { useEffect } from 'react';

export default function Create({ users, auth, siswa }: PageProps & { users: any[]; siswa: any }) {
    const { data, setData, put, processing, errors } = useForm({
        user_name: siswa.user.name,
        nis: siswa.nis,
        birthdate: siswa.birthdate,
        gender: siswa.gender,
        address: siswa.address,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/siswa/${siswa.id}`);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Siswa</h2>}
        >
            <Head title="Siswa" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold">Tambah Siswa</h2>

                            <Input
                                placeholder="Nama Lengkap"
                                value={data.user_name}
                                onChange={(e) => setData('user_name', e.target.value)}
                            />
                            {errors.user_name && (
                                <div className="text-red-500 text-sm">{errors.user_name}</div>
                            )}

                            <Input
                                placeholder="NIS"
                                value={data.nis}
                                onChange={(e) => setData('nis', e.target.value)}
                            />
                            {errors.nis && <div className="text-red-500 text-sm">{errors.nis}</div>}

                            <Input
                                type="date"
                                value={data.birthdate}
                                onChange={(e) => setData('birthdate', e.target.value)}
                            />
                            {errors.birthdate && (
                                <div className="text-red-500 text-sm">{errors.birthdate}</div>
                            )}

                            <Select
                                onValueChange={(val) => setData('gender', val)}
                                defaultValue="laki-laki"
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                    <SelectItem value="perempuan">Perempuan</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.gender && (
                                <div className="text-red-500 text-sm">{errors.gender}</div>
                            )}

                            <Textarea
                                placeholder="Alamat"
                                value={data.address}
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            {errors.address && (
                                <div className="text-red-500 text-sm">{errors.address}</div>
                            )}

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                                <Link href="/siswa">
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
