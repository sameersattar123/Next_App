import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="rounded-full py-1 text-[10px] px-2 text-green-600 bg-white ">2024/25</span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,200</h1>
      <h2 className="font-medium text-xs capitalize">{type}</h2>
    </div>
  );
};

export default UserCard;
