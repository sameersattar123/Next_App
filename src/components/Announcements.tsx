import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <span className="text-gray-3400 text-sm">View All</span>
      </div>
      <div className="flex flex-col mt-4 gap-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs rounded-md bg-white px-1 py-1 text-gray-400">
              8/28/2024
            </span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            officiis! Consectetur porro aut illo explicabo.
          </p>
        </div>
        <div className="bg-lamaYellow rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs rounded-md bg-white px-1 py-1 text-gray-400">
              8/28/2024
            </span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            officiis! Consectetur porro aut illo explicabo.
          </p>
        </div>
        <div className="bg-lamaPurple rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs rounded-md bg-white px-1 py-1 text-gray-400">
              8/28/2024
            </span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            officiis! Consectetur porro aut illo explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
