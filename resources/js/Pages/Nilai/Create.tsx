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

export default function Create({
    auth,
    students,
    subjects,
}: PageProps & { students: any[]; subjects: any[] }) {
    const { data, setData, post, errors, processing, transform } = useForm({
        student_id: '',
        subject_id: '',
        score: '',
        semester: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        transform((data) => ({
            ...data,
            score: data.score.toString(),
        }));
        post('/nilai');
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Nilai
                </h2>
            }
        >
            <Head title="Nilai" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
                            <h2 className="text-xl font-semibold">Tambah Nilai</h2>

                            <Select
                                onValueChange={(val) => setData('student_id', val)}
                                defaultValue={data.student_id}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Siswa" />
                                </SelectTrigger>
                                <SelectContent>
                                    {students.map((s) => (
                                        <SelectItem key={s.id} value={String(s.id)}>
                                            {s.user.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.student_id && (
                                <div className="text-red-500">{errors.student_id}</div>
                            )}

                            <Select
                                onValueChange={(val) => setData('subject_id', val)}
                                defaultValue={data.subject_id}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Mata Pelajaran" />
                                </SelectTrigger>
                                <SelectContent>
                                    {subjects.map((s) => (
                                        <SelectItem key={s.id} value={String(s.id)}>
                                            {s.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.subject_id && (
                                <div className="text-red-500">{errors.subject_id}</div>
                            )}

                            <Input
                                placeholder="Masukkan Nilai"
                                type="number"
                                value={data.score}
                                onChange={(e) => setData('score', parseInt(e.target.value))}
                            />
                            {errors.score && <div className="text-red-500">{errors.score}</div>}

                            <Input
                                placeholder="Masukkan Semester"
                                value={data.semester}
                                onChange={(e) => setData('semester', e.target.value)}
                            />
                            {errors.semester && (
                                <div className="text-red-500">{errors.semester}</div>
                            )}

                            <div className="flex gap-2">
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                                <Link href="/nilai">
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
