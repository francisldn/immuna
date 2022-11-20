import React from "react"

interface btnProps {
  btnText: string
  width: string
  height: string
}

export default function ConnectButton({ btnText, width, height }: btnProps) {
  return (
    <button
      className={`${width} ${height} bg-btn-blue text-white text-lg text-center rounded-[6rem]`}
    >
      {btnText}
    </button>
  )
}
