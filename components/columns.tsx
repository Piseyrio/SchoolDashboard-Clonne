"use client"

import { Button } from "@/components/ui/button";
import { Student } from "@/generated/prisma";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";


export const columns: ColumnDef<Student>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "firstname", header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Firstname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  }, 
  { accessorKey: "lastname", header: "lastname" },
  { accessorKey: "phone", header: "phone" },
  { accessorKey: "sex", header: "sex" },
  { accessorKey: "phone", header: "phone" },
  {accessorKey: "birthday", header: "birthday"},
  { accessorKey: "address", header: "address" },
];

 