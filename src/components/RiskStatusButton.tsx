import React, { MouseEventHandler } from "react"

interface RiskStatusProps {
  riskText: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function RiskStatusButton({ riskText, onClick }: RiskStatusProps) {
  return (
    <>
      {riskText === "Green" ? (
        <button
          className='bg-rs-green text-rs-text-green w-[6.25rem] h-[2.25rem] rounded-[30px] font-[500]'
          onClick={onClick}
        >
          {riskText}
        </button>
      ) : riskText === "Yellow" ? (
        <button
          className='bg-rs-yellow text-rs-text-yellow w-[6.25rem] h-[2.25rem] rounded-[30px]'
          onClick={onClick}
        >
          {riskText}
        </button>
      ) : (
        <button
          className='bg-rs-red text-rs-text-red w-[6.25rem] h-[2.25rem] rounded-[30px]'
          onClick={onClick}
        >
          {riskText}
        </button>
      )}
    </>
  )
}
