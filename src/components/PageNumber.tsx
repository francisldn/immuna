import React from "react"

export default function PageNumber() {
  return (
    <footer className='flex justify-between items-center pl-[1.25rem] table-width'>
      <div className='flex items-center gap-3 text-xs'>
        <p>Show</p>
        <div
          className='w-[3.3125rem] h-[2.25rem] flex gap-3 justify-center items-center border-[1px] border-[
#E0E7ED] rounded-[8px] bg-white'
        >
          <p>12</p>
          <div>
            <img src='arrow-down.png' alt='' />
          </div>
        </div>
        <p>results of 50 entries</p>
      </div>
      <div className='flex gap-[0.9rem] bg-white w-[20.1875rem] h-[3rem] items-center px-[0.5rem]'>
        <div className='flex justify-center items-center w-[2.75rem] h-[2rem] bg-[#F3F3F3] rounded-[4px]'>
          <img src='arrow-left.png' alt='arrow-left' />
        </div>
        {[1, 2, 3, "...", 50].map((item, index) => {
          return index === 0 ? (
            <div
              className='flex justify-center items-center bg-btn-blue text-white text-xs w-[1.75rem] h-[2rem] rounded-[4px]'
              key={index}
            >
              {item}
            </div>
          ) : (
            <div
              className='flex justify-center items-center bg-[#F3F3F3] text-xs w-[1.75rem] h-[2rem] rounded-[4px]'
              key={index}
            >
              {item}
            </div>
          )
        })}

        <div className='flex justify-center items-center w-[2.75rem] h-[2rem] bg-[#F3F3F3] rounded-[4px]'>
          <img src='arrow-right.png' alt='arrow-right' />
        </div>
      </div>
    </footer>
  )
}
