import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map(({ header, accessor, className }) => (
            <th key={accessor} className={className}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
