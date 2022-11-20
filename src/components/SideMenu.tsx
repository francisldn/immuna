import React from "react"
import SideMenuButton from "./SideMenuButton"
import Brand from "./Brand"

export default function SideMenu() {
  return (
    <section className='flex flex-col min-w-[16.75rem] h-screen items-center'>
      <header className='pt-4 pb-4'>
        <Brand width={"8.22rem"} height={"1.9375rem"} />
      </header>
      <nav className='flex flex-col gap-[1.625rem] mt-[4.45375rem]'>
        <SideMenuButton
          btnText={"Dashboard"}
          icon={"dashboard.png"}
          bgColor={"blue"}
          textColor={"white"}
        />
        <SideMenuButton
          btnText={"Alerts"}
          icon={"alert.png"}
          bgColor={"white"}
          textColor={"black"}
        />
        <SideMenuButton
          btnText={"Defend"}
          icon={"defend.png"}
          bgColor={"white"}
          textColor={"black"}
        />
        <SideMenuButton
          btnText={"Protect"}
          icon={"protect.png"}
          bgColor={"white"}
          textColor={"black"}
        />
      </nav>
    </section>
  )
}
