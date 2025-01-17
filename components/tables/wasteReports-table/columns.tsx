"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import Image from "next/image";

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "IMAGE",
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        width={100}
        height={100}
        alt="image-waste-report"
      />
    ),
  },
  {
    accessorKey: "user.name",
    header: "USER",
  },
  {
    accessorKey: "location",
    header: "LOCATION",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => (
      <p className={row.original.status ? "text-green-500" : "text-red-500"}>
        {row.original.status ? "Diproses" : "Belum diproses"}
      </p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
