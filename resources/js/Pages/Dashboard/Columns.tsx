import { DragHandle } from '@/Components/DataTable';
import { Badge } from '@/Components/ui/badge';
import { Checkbox } from '@/Components/ui/checkbox';
import { Label } from '@/Components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle2Icon, GripVerticalIcon, LoaderIcon } from 'lucide-react';

export const columns: ColumnDef<any>[] = [
    // Kolom drag untuk urutan
    {
        id: 'drag',
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    // Kolom checkbox untuk select
    {
        id: 'select',
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    // Kolom Nama Siswa
    {
        accessorKey: 'full_name',
        header: 'Nama Siswa',
        cell: ({ row }) => row.original.full_name || '-',
        enableHiding: false,
    },
    // Kolom Status Bayar
    {
        accessorKey: 'status_bayar',
        header: 'Status Bayar',
        cell: ({ row }) => (
            <Badge
                variant="outline"
                className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
            >
                {row.original.status_bayar?.toLowerCase() === 'lunas' ? (
                    <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
                ) : (
                    <LoaderIcon />
                )}
                {row.original.status_bayar || 'Belum Bayar'}
            </Badge>
        ),
    },
    // Kolom Reviewer
    {
        accessorKey: 'reviewer',
        header: 'Reviewer',
        cell: ({ row }) => {
            const isAssigned = row.original.reviewer && row.original.reviewer !== 'Assign reviewer';

            if (isAssigned) {
                return row.original.reviewer;
            }

            return (
                <>
                    <Label htmlFor={`${row.original.id}-reviewer`} className="sr-only">
                        Reviewer
                    </Label>
                    <Select>
                        <SelectTrigger className="h-8 w-40" id={`${row.original.id}-reviewer`}>
                            <SelectValue placeholder="Assign reviewer" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                            <SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
                        </SelectContent>
                    </Select>
                </>
            );
        },
    },
];
