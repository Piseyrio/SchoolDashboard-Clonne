import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { prisma } from "@/lib/prisma";

export default async function StudentPage() {
  const User = await prisma.student.findMany();
  return (
    <div className="rounded-lg shadow-md">
      <DataTable columns={columns} data={User} />
    </div>
  );
}
