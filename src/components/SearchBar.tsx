import React from "react"

interface SearchProps {
  width: string
  placeholder: string
}

export default function SearchBar({ width, placeholder }: SearchProps) {
  return (
    <form
      className={`flex items-center gap-4 rounded-[20px] border-[1px] border-[#dcdcdc] ${width} pl-[1rem] h-[2.5rem] bg-white`}
    >
      <div className='w-[0.875rem] h-[0.875rem]'>
        <img src='srch.png' alt='' />
      </div>
      <input type='search' placeholder={placeholder} className='text-sm h-full w-[85%] pl-2' />
    </form>
  )
}
