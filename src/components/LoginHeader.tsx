import React from "react"
import Brand from "./Brand"

export default function LoginHeader() {
  return (
    <header className='flex justify-between mx-[4rem] pt-4 pb-4 items-center shadow-[0px_1px_10px_0px_rgba(132,132,132,0.07)]'>
      <Brand width={"w-[7rem]"} height={"h-[1.625rem]"} />
      <div className='flex gap-2 items-center'>
        <div className='rounded-full w-8 h-8 bg-[#D1D1D1]'></div>
        <p>N/A</p>
        <div className='flex w-4 h-4 items-center'>
          <img src='arrow-down.png' alt='' />
        </div>
      </div>
    </header>
  )
}
