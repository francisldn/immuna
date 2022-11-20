/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useEffect, useRef } from "react"
import ConnectButton from "./ConnectButton"
import RiskStatusButton from "./RiskStatusButton"
import useRiskStatus from "../hooks/useRiskStatus"

interface RiskStatusProps {
  riskText: string
}

export default function RiskStatus({ riskText }: RiskStatusProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const { popUp, setPopUp } = useRiskStatus()

  const CloseLightBoxFromBackground = (event: React.MouseEvent) => {
    if (divRef.current === event.target) {
      setPopUp(false)
    }
  }
  // useCallback is used to create a function and specify variable dependency
  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && popUp) {
        setPopUp(false)
      }
    },
    [setPopUp, popUp],
  )

  // useEffect to execute the keypress function and watch for the function change
  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <article
      className={`${
        popUp ? "fixed" : "hidden"
      } sm:fixed sm:min-w-full sm:h-full sm:bg-[rgb(0,0,0,0.8)] sm:z-10 sm:flex sm:flex-col sm:px-[25%] sm:pt-[8rem]`}
      onClick={(e: React.MouseEvent) => CloseLightBoxFromBackground(e)}
      ref={divRef}
    >
      <div className='flex flex-col w-[60rem] h-[31rem] bg-white rounded-[8px]'>
        <div className='h-[3.5rem] w-full text-md flex items-center pl-[2rem] justify-between'>
          <h2 className='py-[1.1875rem]'>Status</h2>
          <button className='h-[1.5rem] w-[1.5rem] mr-[1rem]' onClick={() => setPopUp(false)}>
            <img src='close.png' alt='' />
          </button>
        </div>
        <hr className='border-[1px] border-[#C2C2C2]' />
        <div className='flex flex-col pl-[2rem] mt-[1.6875rem]'>
          <div className='flex gap-6 items-center'>
            <h2 className='text-lg'>Risk Status</h2>
            <RiskStatusButton riskText={riskText} onClick={() => {}} />
          </div>
          <div className='flex flex-col bg-[#f5f5f5] mt-[1.25rem] pl-[1rem] mr-[2.4375rem] pt-[1rem] rounded-[8px]'>
            <div className='text-sm flex flex-col gap-2'>
              <h3 className='text-[#5C5C5C]'>Triggle:</h3>
              <p>{`The asset's risk profile has changed significantly.`}</p>
            </div>
            <div className='mt-[2.875rem] text-sm flex flex-col gap-2 pb-[2.875rem]'>
              <h3 className='text-[#5c5c5c]'>Details:</h3>
              <p>{`[Token % out of the entire circulation] 0.58% were transferred. A significant movement is detected when there are more than 1% of the tokens in circulation that were moved in a single transaction. Such a significant movement usually triggers movements in the asset's price and therefor should be monitored closely.`}</p>
            </div>
          </div>
          <div className='flex justify-center mt-[1.5rem] w-full'>
            <ConnectButton btnText={"Continue"} width={"w-[13.8125rem]"} height={"h-[3rem]"} />
          </div>
        </div>
      </div>
    </article>
  )
}
