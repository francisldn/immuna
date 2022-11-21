import React from "react"
import SearchBar from "./SearchBar"

export default function PageHeader() {
  return (
    <header className='flex pt-4 pb-4 pl-[1.25rem] header-width items-center pr-[1.25rem]'>
      <div className='flex flex-1 items-center'>
        <h1 className='text-lg font-[500] pr-[3.375rem]'>Dashboard</h1>
        <div>
          <SearchBar width={"w-[22.04rem]"} placeholder={"Search..."} />
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <button className='w-[1rem] h=[1.25rem]'>
          <img src='bell.png' alt='' />
        </button>
        <button>
          <img src='profile.png' alt='profile' />
        </button>
        <h2>Betty Copper</h2>
        <button>
          <img src='arrow-down.png' alt='' />
        </button>
      </div>
    </header>
  )
}
