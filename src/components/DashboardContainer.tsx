import React from "react"
import DashboardHeader from "./DashboardHeader"
import TableContainer from "./TableContainer"
import PageNumber from "./PageNumber"
import RiskStatus from "./RiskStatus"
import useRiskStatus from "../hooks/useRiskStatus"

export default function DashboardContainer() {
  const { riskStatus, popUp } = useRiskStatus()

  return (
    <article className='flex flex-col bg-[#F8F8F8] h-full'>
      <DashboardHeader />
      <TableContainer />
      {popUp && <RiskStatus riskText={riskStatus} />}
      <div className='absolute bottom-[3%]'>
        <PageNumber />
      </div>
    </article>
  )
}
