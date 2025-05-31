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
        accessorKey: 'mapel',
        header: 'Nama Mata Pelajaran',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'nilai',
        header: 'Nilai',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'semester',
        header: 'Semester',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
];
