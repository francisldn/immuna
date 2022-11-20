import React from "react"
import ConnectButton from "./ConnectButton"

export default function LoginContainer() {
  return (
    <div className=' flex flex-col w-[82%] bg-white rounded-md max-h-[68.55%] z-10 mr-[5.125rem] ml-[3.0625rem] mb-[12.375rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)] min-w-[35rem]'>
      <h2 className='text-xxl text-center mt-[3.75rem] p-0'>Welcome to Immuna!</h2>
      <p className='text-xl text-center'>Connect your wallet</p>
      <form className='flex flex-col self-center items-center mt-[5.625rem] w-full'>
        <label htmlFor='walletaddress' className='flex gap-3 items-center w-[85%]'>
          <div>
            <img src='eth.png' alt='' />
          </div>
          <p className='text-lg p-0'>Ethereum</p>
        </label>
        <input
          type='text'
          id='walletaddress'
          name='walletaddress'
          placeholder='Enter wallet address'
          className='bg-lightgrey h-[4.06rem] w-[85%] rounded-[6rem] pl-[1.8125rem] mt-[1.25rem] mb-[3.375rem]'
        />
        <ConnectButton btnText={"Connect to Wallet"} width={"w-[85%]"} height={"h-[4.06rem]"} />
      </form>
    </div>
  )
}
