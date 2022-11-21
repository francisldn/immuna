import React from "react"
import RiskStatusButton from "./RiskStatusButton"
import useRiskStatus from "../hooks/useRiskStatus"
import { Pool, Token } from "../types/Pool"

interface TableRowProps {
  rowColor: string
  pool: Pool
}

export default function TableRow({ rowColor, pool }: TableRowProps) {
  const { setPopUp, setRiskStatus } = useRiskStatus()
  const { protocol, poolAddress, token0, token1, icon, riskStatus } = pool

  const balance = (token0: Token, token1: Token) => {
    return `${new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(token0.totalValueLocked)} ${token0.symbol} / ${new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(token1.totalValueLocked)} ${token1.symbol} `
  }

  return (
    <tr className={`flex pl-[1.5rem] h-[4.0625rem] items-center ${rowColor}`}>
      <td className='flex gap-[1.125rem] items-center w-[20%]'>
        <p className='text-sm'>{protocol}</p>
        <a href='https://app.uniswap.org/' target='_blank' rel='noreferrer'>
          <img src='redirect.png' alt='' />
        </a>
      </td>
      <td className='flex gap-[1.5625rem] items-center w-[30%]'>
        <div>
          <img src={icon} alt='' />
        </div>
        <div className='w-[18%] min-w-[6rem] tooltip'>
          <span className='text-md'>{`${poolAddress.slice(0, 6)}...${poolAddress.slice(
            -4,
            poolAddress.length,
          )}`}</span>
          <span className='tooltiptext'>{poolAddress}</span>
        </div>
        <a href={`https://etherscan.io/address/${poolAddress}`} target='_blank' rel='noreferrer'>
          <img src='redirect.png' alt='' />
        </a>
      </td>
      <td className='flex items-center w-[30%] text-sm'>{balance(token0, token1)}</td>
      <td className='flex items-center w-[20%] text-md'>
        <RiskStatusButton
          riskText={riskStatus}
          onClick={() => {
            setPopUp(true)
            setRiskStatus(riskStatus)
          }}
        />
      </td>
    </tr>
  )
}
