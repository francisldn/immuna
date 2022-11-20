import React from "react"
import SearchBar from "./SearchBar"

export default function DashboardHeader() {
  return (
    <header className='flex items-center pr-[1.25rem] pl-[1.25rem] mt-[1rem]'>
      <h2 className='flex-1 font-[500] text-lg'>Immuna Monitor Portal</h2>
      <SearchBar width={"21.3125rem"} placeholder={"Search"} />
      <div className='flex bg-bg-eth items-center w-[14.8125rem] h-[2.75rem] rounded-[22px] ml-[1rem] mr-[1rem]'>
        <div className='flex gap-4 pl-[1.5rem] pr-[0.875rem]'>
          <div className='flex  items-center'>
            <img src='eth.png' alt='' />
          </div>
          <p className='text-sm'>ETH</p>
        </div>
        <div className='flex flex-1 bg-bg-address rounded-[22px] h-full items-center pl-[1.8125rem]'>
          <span className='text-sm'>{"0xBAD7...E116"}</span>
          <span>{}</span>
        </div>
      </div>
      <button className='flex rounded-full bg-bg-address w-[2.75rem] h-[2.75rem] items-center justify-center'>
        <img src='copy.png' alt='' />
      </button>
    </header>
  )
}
