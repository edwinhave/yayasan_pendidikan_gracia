import { DragHandle } from '@/Components/DataTable';
import { Button } from '@/Components/ui/button';
import { Link } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';

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
        accessorKey: 'mata_pelajaran.name',
        header: 'Nama Mata Pelajaran',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'amount',
        header: 'Harga',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'description',
        header: 'Deskripsi',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: () => <div className="text-right mr-3">Action</div>,
        cell: ({ getValue, row }) => {
            const { id, mata_pelajaran } = row.original;
            return (
                <div className="flex justify-end flex-row gap-1">
                    <Link href={`/harga/${getValue()}/edit`}>
                        <Button type="button" variant="outline" size="icon">
                            <Pencil />
                        </Button>
                    </Link>
                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(id, mata_pelajaran.name);
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
