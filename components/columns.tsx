"use client";

import { Button } from "@/components/ui/button";
import { FakeData } from "@/lib/fakedata";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";

// For fetch Data form prisma check database name , for FakeData check FakeData.ts at lib
export const columns: ColumnDef<FakeData>[] = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "avatarURL",
    header: "Image",
    cell: ({ row }) => {
      const avatar = row.original.avatarURL;
      return typeof avatar === "string" && avatar.length > 0 ? (
        <Image
          src={avatar}
          alt="student"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      ) : (
        <span className="text-gray-400 italic">No image</span>
      );
    },
  },
  {
    id: "firstname",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    accessorFn: (row) => `${row.firstname} ${row.lastname}`, // needed for sorting
    filterFn: (row, columnId, filterValue) => {
      const fullName = row.getValue(columnId) as string;
      return fullName.toLowerCase().includes(filterValue.toLowerCase());
    },
    cell: ({ row }) => {
      const firstname = row.original.firstname;
      const lastname = row.original.lastname;
      return (
        <div className="flex flex-col leading-tight">
          <span className="font-medium">{firstname}</span>
          <span className="text-gray-500 text-sm">{lastname}</span>
        </div>
      );
    },
  },

  { accessorKey: "lastname", header: "lastname" },
  { accessorKey: "phone", header: "phone" },
  { accessorKey: "sex", header: "sex" },
  { accessorKey: "birthday", header: "birthday" },
  { accessorKey: "address", header: "address" },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
          >
            <DropdownMenuLabel className="text-red-500">Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-green-500">Edit</DropdownMenuItem>
            <DropdownMenuItem >Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
