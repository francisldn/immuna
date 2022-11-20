import React, { useState, useContext, createContext } from "react"

interface RiskProps {
  popUp: boolean
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>
  riskStatus: string
  setRiskStatus: React.Dispatch<React.SetStateAction<string>>
}

const RiskContext = createContext<RiskProps>({
  popUp: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPopUp: () => {},
  riskStatus: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRiskStatus: () => {},
})

export function RiskProvider({ children }: { children: React.ReactNode }) {
  const [popUp, setPopUp] = useState(false)
  const [riskStatus, setRiskStatus] = useState("")

  const value = {
    popUp,
    setPopUp,
    riskStatus,
    setRiskStatus,
  }
  return <RiskContext.Provider value={value}>{children}</RiskContext.Provider>
}

export default function useRiskStatus() {
  return useContext(RiskContext)
}
