"use client"
import React from 'react'
import Image from 'next/image'


const JobSidebar = () => {

  const [ active , setActive] =React.useState('boards')

  return (
    <div className=' min-w-[213px] w-full h-fit  text-black text-[14px] py-[20px] px-[10px] bg-white rounded-[12px] flex flex-col gap-[10px]'>
    <div  className={`flex items-center gap-2 cursor-pointer  ${active === "boards" ? "bg-[#8246FD]" : "bg-[#fff"}  ${active === "boards" ? "text-[#fff]" : "text-[#000"} font-[600] text-[12px] p-[10px] rounded-[8px]`}     onClick={()=>{setActive('boards')}} ><Image src="/sideBarIcons/squares.png" width={32} height={32} alt="icon" />Boards</div>
    <div  className={`flex items-center gap-2 cursor-pointer  ${active === "networking" ? "bg-[#8246FD]" : "bg-[#fff"}  ${active === "networking" ? "text-[#fff]" : "text-[#000"} font-[600] p-[10px] text-[12px] text-[#212121] rounded-[8px]`} onClick={()=>{setActive('networking')}}><Image src="/sideBarIcons/team.png" width={32} height={32} alt="icon" />  Networking</div>
    <div  className={`flex items-center gap-2 cursor-pointer ${active === "archive" ? "bg-[#8246FD]" : "bg-[#fff"}  ${active === "archive" ? "text-[#fff]" : "text-[#000"} font-[600] p-[10px] text-[12px] text-[#212121] rounded-[8px]`} onClick={()=>{setActive('archive')}}><Image src="/sideBarIcons/archive.png" width={32} height={32} alt="icon" />   Archive Jobs</div>
    <div  className={`flex items-center gap-2 cursor-pointer  ${active === "loop" ? "bg-[#8246FD]" : "bg-[#fff"}  ${active === "loop" ? "text-[#fff]" : "text-[#000"} font-[600] p-[10px] text-[12px] text-[#212121] rounded-[8px]`} onClick={()=>{setActive('loop')}}><Image src="/sideBarIcons/loop.png" width={32} height={32} alt="icon" />  Loop Settings</div>
    <div  className={`flex items-center gap-2 cursor-pointer  ${active === "suggest" ? "bg-[#8246FD]" : "bg-[#fff"}  ${active === "suggest" ? "text-[#fff]" : "text-[#000"} font-[600] p-[10px]  text-[12px] text-[#212121]rounded-[8px]`} onClick={()=>{setActive('suggest')}}><Image src="/sideBarIcons/bulb.png" width={32} height={32} alt="icon" />  Suggest a feature</div>
    <div  className={`flex items-center gap-2 cursor-pointer  ${active === "bug" ? "bg-[#8246FD]" : "bg-[#fff"}  ${active === "bug" ? "text-[#fff]" : "text-[#000"} font-[600] p-[10px]  text-[12px] text-[#212121]rounded-[8px]`} onClick={()=>{setActive('bug')}}><Image src="/sideBarIcons/bug.png" width={32} height={32} alt="icon" />  Report an Issue</div>
    
    </div>
  )
}

export default JobSidebar