import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between p-4 text-gray-500'>
      <button
      disabled
      className='px-4 p-2 rounded-md font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed bg-slate-200'
      >Prev</button>
      <div className="flex items-center gap-2 text-sm">
        <button className="rounded-sm px-2 bg-lamaSky">1</button>
        <button className="rounded-sm px-2">2</button>
        <button className="rounded-sm px-2">3</button>
        ...
        <button className="rounded-sm px-2">10</button>
      </div>
      <button
      className='px-4 p-2 rounded-md font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed bg-slate-200'
      >Next</button>
    </div>
  )
}

export default Pagination
