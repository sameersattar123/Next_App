import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 m-4 rounded-md mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg hidden md:block font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 m-2 self-end">
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center"  type="button" aria-label="Save">
              <Image src="/filter.png" height="14" width="14" alt="" />
            </button>
            <button className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center" type="button" aria-label="Save">
              <Image src="/sort.png" height="14" width="14" alt="" />
            </button>
            <button type="button" aria-label="Save" className="bg-lamaYellow rounded-full w-8 h-8 flex justify-center items-center">
              <Image src="/plus.png" height="14" width="14" alt="" />
            </button>
            <FormModal/>
          </div>
        </div>
      </div>
      <Table/>
      <Pagination/>
    </div>
  );
};

export default TeacherListPage;
