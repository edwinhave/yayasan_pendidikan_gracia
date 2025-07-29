import { DragHandle } from '@/Components/DataTable';
import { Button } from '@/Components/ui/button';
import { Link } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';

export const columns = (): ColumnDef<any>[] => [
    {
        id: 'drag',
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
        accessorKey: 'full_name',
        header: 'Nama Calon Siswa',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'gender',
        header: 'Jenis Kelamin',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'created_at',
        header: 'Tanggal Daftar',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'is_drafted',
        header: 'Masih Draft',
        cell: ({ getValue }) => {
            return getValue() ? 'Masih Draft' : 'Siap Dicek';
        },
        enableHiding: false,
    },
];
