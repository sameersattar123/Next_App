"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl my-4 font-semibold ">Events</h1>
        <Image height={20} width={20} src="/moreDark.png" alt="" />
      </div>
      <div className="">
        {events.map((event) => {
          return (
            <div className="p-5 rounded-md border-2 border-gray-100 odd:border-t-lamaSky even:border-t-lamaYellow" key={event.id}>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-xs text-gray-300">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
