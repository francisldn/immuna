import React, { useState } from "react"
import SearchBar from "./SearchBar"

export default function DashboardHeader() {
  const [clicked, setClicked] = useState(false)
  const hardCodedAddress = "0xBad7b0AeAa957A8Ad81A79335381c8639fF9F2C9"

  async function copyTextToClipboard(text: string) {
    setClicked(true)
    await navigator.clipboard.writeText(text)
    const timer = setTimeout(() => setClicked(false), 1000)

    return () => clearTimeout(timer)
  }

  return (
    <header className='flex items-center pr-[1.25rem] pl-[1.25rem] mt-[1rem]'>
      <h2 className='flex-1 font-[500] text-lg'>Immuna Monitor Portal</h2>
      <SearchBar width={"21.3125rem"} placeholder={"Search"} />
      <div className='flex bg-bg-eth items-center w-[14.8125rem] h-[2.75rem] rounded-[22px] ml-[1rem] mr-[1rem] text-[#6C6C6C]'>
        <div className='flex gap-4 pl-[1.5rem] pr-[0.875rem]'>
          <div className='flex  items-center'>
            <img src='eth.png' alt='' />
          </div>
          <p className='text-sm'>ETH</p>
        </div>
        <div className='flex flex-1 bg-bg-address rounded-[22px] h-full items-center pl-[1.8125rem] text-sm'>
          <span className='self-center'>{`${hardCodedAddress.slice(
            0,
            6,
          )}...${hardCodedAddress.slice(-4, hardCodedAddress.length)}`}</span>
        </div>
      </div>
      <button
        className='flex rounded-full bg-bg-address w-[2.75rem] h-[2.75rem] items-center justify-center'
        onClick={() => copyTextToClipboard(hardCodedAddress)}
      >
        {clicked ? (
          <img src='tick.png' alt='' className='w-[70%] h-[70%] object-fit' />
        ) : (
          <img src='copy.png' alt='' />
        )}
      </button>
    </header>
  )
}
