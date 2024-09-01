import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className="md:w-auto md:flex gap-2 flex items-center text-xs rounded-full  ring-[1.5px] ring-gray-300 px-2">
    <Image src='/search.png' height={16} width={16}  alt="logo"/>
    <input type="text" placeholder="Search..." className="bg-transparent outline-none p-2 w-[200px]"/>
  </div>
  )
}

export default TableSearch
