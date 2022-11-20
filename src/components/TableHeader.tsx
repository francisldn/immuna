import React from "react"

export default function TableHeader() {
  return (
    <tr className='flex pl-[1.5rem] h-[4.0625rem] w-full bg-db-header text-sm'>
      <th className='flex items-center gap-4 w-[20%]'>
        <p>Protocol</p>
        <button>
          <img src='sort.png' alt='sort' />
        </button>
      </th>
      <th className='flex items-center gap-4 w-[30%]'>
        <p>Pool</p>
        <button>
          <img src='sort.png' alt='sort' />
        </button>
      </th>
      <th className='flex items-center gap-4 w-[30%]'>
        <p>Balance</p>
        <button>
          <img src='sort.png' alt='sort' />
        </button>
      </th>
      <th className='flex items-center gap-4 w-[20%]'>
        <p>Risk Status</p>
        <button>
          <img src='sort.png' alt='sort' />
        </button>
      </th>
    </tr>
  )
}
