import { DragHandle, TableCellViewer } from '@/Components/DataTable';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';
import { Label } from '@/Components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { schema } from '@/validations/global';
import { useSortable } from '@dnd-kit/sortable';
import { Link } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle2Icon, GripVerticalIcon, LoaderIcon, Pencil, Trash } from 'lucide-react';
import { z } from 'zod';

export const columns = ({
    onDelete,
}: {
    onDelete: (id: string, name: string) => void;
}): ColumnDef<any>[] => [
    {
        id: 'drag',
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
        accessorKey: 'nis',
        header: 'NIS',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'user.name',
        header: 'Nama Siswa',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'birthdate',
        header: 'Tanggal Lahir',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'gender',
        header: 'Jenis Kelamin',
        cell: ({ getValue }) => {
            return getValue<string>();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'address',
        header: 'Alamat',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: () => <div className="text-right mr-3">Action</div>,
        cell: ({ getValue, row }) => {
            const { id, user } = row.original;
            return (
                <div className="flex justify-end flex-row gap-1">
                    <Link href={`/siswa/${getValue()}/edit`}>
                        <Button type="button" variant="outline" size="icon">
                            <Pencil />
                        </Button>
                    </Link>
                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(id, user.name);
                        }}
                        aria-label="Delete"
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
        enableHiding: false,
    },
];
