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
        accessorKey: 'nip',
        header: 'NIP',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'user.name',
        header: 'Nama Guru',
        cell: ({ getValue }) => {
            return getValue();
        },
        enableHiding: false,
    },
    {
        accessorKey: 'mata_pelajarans',
        header: 'Keahlian',
        cell: ({ getValue }) => {
            return getValue()
                .map((val) => val.name)
                .join(', ');
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
                    <Link href={`/guru/${getValue()}/edit`}>
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
