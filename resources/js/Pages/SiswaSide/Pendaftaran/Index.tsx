import SiswaLayout from '@/Layouts/SiswaLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useMemo, useState } from 'react';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/Components/ui/select';

export default function Pendaftaran({
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
    const [step, setStep] = useState(1);

    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        gender: '',
        nisn: '',
        nik: '',
        no_kk: '',
        birth_place: '',
        birth_date: '',
        religion: '',
        address: '',
        rt: '',
        rw: '',
        kelurahan: '',
        kecamatan: '',
        phone_mobile: '',
        email: '',
        father_name: '',
        father_occupation: '',
        mother_name: '',
        mother_occupation: '',
        guardian_name: '',
        registration_type: '',
        skill_competency: '',
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);
    const submit = (e: any) => {
        e.preventDefault();
        post('/registration-ppdb');
    };

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
                                    <div className="max-w-3xl mx-auto p-6">
                                        <h2 className="text-xl font-bold mb-4">
                                            Formulir Pendaftaran Peserta Didik Baru
                                        </h2>

                                        <form onSubmit={submit} className="space-y-4">
                                            {step === 1 && (
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label>Nama Lengkap</Label>
                                                        <Input
                                                            value={data.full_name}
                                                            onChange={(e) =>
                                                                setData('full_name', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Jenis Kelamin</Label>
                                                        <Select
                                                            onValueChange={(val) =>
                                                                setData('gender', val)
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Pilih" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Laki-laki">
                                                                    Laki-laki
                                                                </SelectItem>
                                                                <SelectItem value="Perempuan">
                                                                    Perempuan
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div>
                                                        <Label>NIK</Label>
                                                        <Input
                                                            value={data.nik}
                                                            onChange={(e) =>
                                                                setData('nik', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Tempat Lahir</Label>
                                                        <Input
                                                            value={data.birth_place}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'birth_place',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Tanggal Lahir</Label>
                                                        <Input
                                                            type="date"
                                                            value={data.birth_date}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'birth_date',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 2 && (
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label>Alamat</Label>
                                                        <Input
                                                            value={data.address}
                                                            onChange={(e) =>
                                                                setData('address', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>RT</Label>
                                                        <Input
                                                            value={data.rt}
                                                            onChange={(e) =>
                                                                setData('rt', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>RW</Label>
                                                        <Input
                                                            value={data.rw}
                                                            onChange={(e) =>
                                                                setData('rw', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Kelurahan</Label>
                                                        <Input
                                                            value={data.kelurahan}
                                                            onChange={(e) =>
                                                                setData('kelurahan', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Kecamatan</Label>
                                                        <Input
                                                            value={data.kecamatan}
                                                            onChange={(e) =>
                                                                setData('kecamatan', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label>Nama Ayah</Label>
                                                        <Input
                                                            value={data.father_name}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'father_name',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Pekerjaan Ayah</Label>
                                                        <Input
                                                            value={data.father_occupation}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'father_occupation',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Nama Ibu</Label>
                                                        <Input
                                                            value={data.mother_name}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'mother_name',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Pekerjaan Ibu</Label>
                                                        <Input
                                                            value={data.mother_occupation}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'mother_occupation',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 4 && (
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label>Nomor HP</Label>
                                                        <Input
                                                            value={data.phone_mobile}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'phone_mobile',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label>Email</Label>
                                                        <Input
                                                            value={data.email}
                                                            onChange={(e) =>
                                                                setData('email', e.target.value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 5 && (
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label>Jenis Pendaftaran</Label>
                                                        <Select
                                                            onValueChange={(val) =>
                                                                setData('registration_type', val)
                                                            }
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Pilih" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Siswa Baru">
                                                                    Siswa Baru
                                                                </SelectItem>
                                                                <SelectItem value="Pindahan">
                                                                    Pindahan
                                                                </SelectItem>
                                                                <SelectItem value="Kembali Bersekolah">
                                                                    Kembali Bersekolah
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div>
                                                        <Label>
                                                            Kompetensi Keahlian (Jika SMK)
                                                        </Label>
                                                        <Input
                                                            value={data.skill_competency}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'skill_competency',
                                                                    e.target.value,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex justify-between pt-4">
                                                {step > 1 && (
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={prevStep}
                                                    >
                                                        Sebelumnya
                                                    </Button>
                                                )}
                                                {step < 5 && (
                                                    <Button type="button" onClick={nextStep}>
                                                        Lanjut
                                                    </Button>
                                                )}
                                                {step === 5 && (
                                                    <Button type="submit" disabled={processing}>
                                                        Kirim
                                                    </Button>
                                                )}
                                            </div>
                                        </form>
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
