// resources/js/Pages/Registrations/Form.tsx

import React from 'react';
import { useForm } from '@inertiajs/react';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';

type RegistrationFormProps = {
    registration?: {
        id: number;
        full_name: string;
        email: string;
        phone_mobile?: string;
        birth_date?: string; // ISO date string
        birth_place?: string;
        address?: string;
        previous_school?: string;
        status: 'pending' | 'approved' | 'rejected';
    };
};

export default function RegistrationForm({ registration }: RegistrationFormProps) {
    const isEdit = Boolean(registration);

    const form = useForm({
        full_name: registration?.full_name || '',
        email: registration?.email || '',
        phone_mobile: registration?.phone_mobile || '',
        birth_date: registration?.birth_date || '',
        birth_place: registration?.birth_place || '',
        address: registration?.address || '',
        previous_school: registration?.previous_school || '',
        status: 'pending',
    });

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (isEdit) {
            form.put(route('registration-ppdb.update', registration!.id), {
                preserveScroll: true,
            });
        } else {
            form.post(route('registration-ppdb.store'), {
                preserveScroll: true,
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <form
                onSubmit={onSubmit}
                className="max-w-3xl w-full p-6 bg-white rounded shadow space-y-6"
            >
                <h2 className="text-2xl font-semibold">
                    {isEdit ? 'Perbarui Formulir Pendaftaran' : 'Formulir Pendaftaran'}
                </h2>

                <div>
                    <Label htmlFor="full_name">Nama Lengkap</Label>
                    <Input
                        id="full_name"
                        value={form.data.full_name}
                        onChange={(e) => form.setData('full_name', e.target.value)}
                        className={form.errors.full_name ? 'border-red-500' : ''}
                        required
                    />
                    {form.errors.full_name && (
                        <p className="text-red-500 text-sm mt-1">{form.errors.full_name}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={form.data.email}
                        onChange={(e) => form.setData('email', e.target.value)}
                        className={form.errors.email ? 'border-red-500' : ''}
                        required
                    />
                    {form.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{form.errors.email}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="phone_mobile">Nomor Telepon</Label>
                    <Input
                        id="phone_mobile"
                        value={form.data.phone_mobile}
                        onChange={(e) => form.setData('phone_mobile', e.target.value)}
                        className={form.errors.phone_mobile ? 'border-red-500' : ''}
                    />
                    {form.errors.phone_mobile && (
                        <p className="text-red-500 text-sm mt-1">{form.errors.phone_mobile}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="birth_date">Tanggal Lahir</Label>
                        <Input
                            id="birth_date"
                            type="date"
                            value={form.data.birth_date}
                            onChange={(e) => form.setData('birth_date', e.target.value)}
                            className={form.errors.birth_date ? 'border-red-500' : ''}
                        />
                        {form.errors.birth_date && (
                            <p className="text-red-500 text-sm mt-1">{form.errors.birth_date}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="birth_place">Tempat Lahir</Label>
                        <Input
                            id="birth_place"
                            value={form.data.birth_place}
                            onChange={(e) => form.setData('birth_place', e.target.value)}
                            className={form.errors.birth_place ? 'border-red-500' : ''}
                        />
                        {form.errors.birth_place && (
                            <p className="text-red-500 text-sm mt-1">{form.errors.birth_place}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="address">Alamat</Label>
                    <Textarea
                        id="address"
                        value={form.data.address}
                        onChange={(e) => form.setData('address', e.target.value)}
                        className={form.errors.address ? 'border-red-500' : ''}
                        rows={3}
                    />
                    {form.errors.address && (
                        <p className="text-red-500 text-sm mt-1">{form.errors.address}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="previous_school">Sekolah Asal</Label>
                    <Input
                        id="previous_school"
                        value={form.data.previous_school}
                        onChange={(e) => form.setData('previous_school', e.target.value)}
                        className={form.errors.previous_school ? 'border-red-500' : ''}
                    />
                    {form.errors.previous_school && (
                        <p className="text-red-500 text-sm mt-1">{form.errors.previous_school}</p>
                    )}
                </div>

                {isEdit && (
                    <div>
                        <Label htmlFor="status">Status</Label>
                        <Select
                            value={form.data.status}
                            onValueChange={(value) =>
                                form.setData('status', value as 'pending' | 'approved' | 'rejected')
                            }
                        >
                            <SelectTrigger
                                id="status"
                                className={form.errors.status ? 'border-red-500' : ''}
                            >
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                        </Select>
                        {form.errors.status && (
                            <p className="text-red-500 text-sm mt-1">{form.errors.status}</p>
                        )}
                    </div>
                )}

                <div className="flex gap-2">
                    <Button type="submit" disabled={form.processing}>
                        {isEdit ? 'Perbarui Data' : 'Submit Registration'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
