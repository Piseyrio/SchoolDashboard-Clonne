"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { userCreate } from "@/lib/action";
import { UserStudent, userStudent } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userStudent),
  });

  const onSubmit = async (data: UserStudent) => {
    try {
      await userCreate(data);
      toast("✅ Event has been created.", {
        className: "text-green-600",
      });
    } catch (error) {
      toast.error("❌ Failed to create event.", {
        className: "bg-red-600 text-white",
      });
      console.error(error);
    }
  };

  return (
    <div className="rounded-md shadow-md ">
      {/*Filter */}
      <div className="flex items-center py-4 px-2 gap-2">
        <Input
          placeholder="Filter Name..."
          value={
            (table.getColumn("firstname")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstname")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        {/*Add Student From*/}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add New Students</Button>
          </DialogTrigger>
          <DialogContent className="w-auto h-auto">
            <DialogHeader>
              <DialogTitle>Students Form</DialogTitle>
              <DialogDescription>
                Add student information here.....
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded p-4"
              >
                <div>
                  <label className="block mb-1">FirstName</label>
                  <input
                    {...register("firstname")}
                    type="firstname"
                    placeholder="firstName here..."
                    className="w-full border rounded p-2"
                  />

                  {errors.firstname && (
                    <span className="text-red-500">
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-1">LastName</label>
                  <input
                    {...register("lastname")}
                    type="lastname"
                    placeholder="lastName here..."
                    className="w-full border rounded p-2"
                  />
                  {errors.lastname && (
                    <span className="text-red-500">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-1">Phone</label>
                  <input
                    {...register("phone")}
                    type="phone"
                    placeholder="phone here..."
                    className="w-full border rounded p-2"
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
                <div>
                  <label className="block mb-1">Address</label>
                  <input
                    {...register("address")}
                    type="address"
                    placeholder="Address here..."
                    className="w-full border rounded p-2"
                  />
                  {errors.address && (
                    <span className="text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </div>
                {/* <div>
                  <label className="block mb-1">Image</label>
                  <input
                  
                    {...register("img")}
                    name="image"
                    type="file"
                    accept="image/*"
                    className="w-full border rounded p-2"
                  />
                </div> */}
                <div>
                  <label className="block mb-1">Sex</label>
                  <select
                    {...register("sex")}
                    defaultValue=""
                    className="w-full border rounded p-2"
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                  {errors.sex && (
                    <span className="text-red-500">{errors.sex.message}</span>
                  )}
                </div>

                <div>
                  <label className="block mb-1">Birthday</label>
                  <input
                    {...register("birthday")}
                    type="date"
                    className="w-full border rounded p-2"
                  />{" "}
                  {errors.birthday && (
                    <span className="text-red-500">
                      {errors.birthday.message}
                    </span>
                  )}
                </div>
                <div></div>
                <div></div>
                <button
                  type="submit"
                  className="bg-green-800 text-white py-2 px-4 rounded  hover:bg-green-600 transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
        {/*Select Columns*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/*Table*/}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/*Pagination*/}
      <div className="flex items-center justify-between px-2">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
