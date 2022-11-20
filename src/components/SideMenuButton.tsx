import React from "react"

interface BtnProps {
  btnText: string
  icon: string
  bgColor: string
  textColor: string
}

export default function SideMenuButton({ btnText, icon, bgColor, textColor }: BtnProps) {
  return (
    <button
      className={`flex gap-[0.6875rem] bg-btn-${bgColor} text-${textColor} text-md font-[500] rounded-[12px] w-[12.125rem] h-[3rem] items-center pl-[1.9375rem]`}
    >
      <div className='w-[1rem] h-[1rem]'>
        <img src={icon} alt='' />
      </div>
      <p className='leading-[1.21rem]'>{btnText}</p>
    </button>
  )
}
