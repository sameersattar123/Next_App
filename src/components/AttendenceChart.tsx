"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendenceChart = () => {
  const data = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
  ];
  return (
    <div className="rounded-lg p-4 h-full bg-white">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <Image src="/moreDark.png" height={20} width={20} alt="moredark" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false}  tick={{ fill: "#d1d5db" }} tickLine={false}/>
          <YAxis axisLine={false}  tick={{ fill: "#d1d5db" }} tickLine={false}/>
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            radius={[10,10,0,0]}
            fill="#FAE27C"
            legendType="circle"
            />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            radius={[10,10,0,0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
