import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {  assignmentsData,  role} from "@/lib/data";
import Image from "next/image";
import React from "react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
        <td className="flex items-center gap-4 p-4">{item.subject}</td>
        <td>{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        {role === "admin" && (
          <button
            type="button"
            aria-label="Save"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple"
          >
            <Image src="/delete.png" alt="" width={16} height={16} />
          </button>
        )}
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 m-4 rounded-md mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg hidden md:block font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 m-2 self-end">
            <button
              className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"
              type="button"
              aria-label="Save"
            >
              <Image src="/filter.png" height="14" width="14" alt="" />
            </button>
            <button
              className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"
              type="button"
              aria-label="Save"
            >
              <Image src="/sort.png" height="14" width="14" alt="" />
            </button>
            <button
              type="button"
              aria-label="Save"
              className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"
            >
              <Image src="/plus.png" height="14" width="14" alt="" />
            </button>
            <FormModal />
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
