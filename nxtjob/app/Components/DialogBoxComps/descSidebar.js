"use client"

import React from 'react'
import Image from 'next/image'

const DescSidebar = ({activeTile, setActiveTile}) => {
  return (
    <div className='min-w-[213px] h-full border-r-[1px] border-[#DCDCDC] w-full text-black text-[14px] py-[20px] px-[0px] bg-white rounded-[12px] flex flex-col gap-[10px]'>
    <div className={`flex items-center gap-2 cursor-pointer  ${activeTile === "description" ? "bg-[#F7F3FF]" : "bg-[#fff"}  ${activeTile === "description" ? "text-[#8246FD]" : "text-[#5A5A5A]"} font-[600] p-[10px] rounded-[8px]  text-[12px] text-[#5a5a5a] `} onClick={()=>{setActiveTile('description')}}><Image src="/DialogBoxIcons/squares.png" width={20} height={20} alt="company-logo"/> Job Description</div>
    <div className={`flex items-center gap-2 cursor-pointer  ${activeTile === "company" ? "bg-[#F7F3FF]" : "bg-[#fff"}  ${activeTile === "company" ? "text-[#8246FD]" : "text-[#5A5A5A]"} font-[600] p-[10px]  text-[12px] text-[#5a5a5a]  rounded-[8px]`} onClick={()=>{setActiveTile('company')}}><Image src="/DialogBoxIcons/home.png" width={20} height={20} alt="company-logo"/>  company</div>
    <div className={`flex items-center gap-2 cursor-pointer  ${activeTile === "notes" ? "bg-[#F7F3FF]" : "bg-[#fff"}  ${activeTile === "notes" ? "text-[#8246FD]" : "text-[#5A5A5A]"}  text-[12px] text-[#5a5a5a]  font-[600] p-[10px] rounded-[8px]`} onClick={()=>{setActiveTile('notes')}}><Image src="/DialogBoxIcons/file.png" width={20} height={20} alt="company-logo"/>  Note</div>
    <div className={`flex items-center gap-2 cursor-pointer  ${activeTile === "network" ? "bg-[#F7F3FF]" : "bg-[#fff"}  ${activeTile === "network" ? "text-[#8246FD]" : "text-[#5A5A5A]"} text-[12px] text-[#5a5a5a] font-[600] p-[10px] rounded-[8px]`} onClick={()=>{setActiveTile('network')}}><Image src="/DialogBoxIcons/team.png" width={20} height={20} alt="company-logo"/> Networking</div>
    
    </div>
  )
}

export default DescSidebar