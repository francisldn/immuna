import React from "react"
import { Link } from "react-router-dom"

export default function Brand({ width, height }: { width: string; height: string }) {
  return (
    <Link to='/'>
      <div className={`${width} ${height}`}>
        <img src='logo.png' alt='logo' className='w-full h-full' />
      </div>
    </Link>
  )
}
