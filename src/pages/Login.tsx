import React from "react"
import LoginHeader from "../components/LoginHeader"
import LoginContainer from "../components/LoginContainer"
import Circle from "../components/Circle"
import Donut from "../components/Donut"

export default function Login() {
  return (
    <div className='w-screen h-screen overflow-y-hidden'>
      <LoginHeader />
      <div className='flex w-screen h-screen -z-20'>
        <div className='w-[49%]'>
          <img src='login.jpg' alt='' className='w-full h-full object-cover' />
        </div>
        <div className='bg-bg-login w-[51%] flex justify-center pt-[6.375rem]'>
          <LoginContainer />
          <Circle />
          <Donut />
        </div>
      </div>
    </div>
  )
}
