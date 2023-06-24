import React from 'react'
import {HiSquares2X2 } from 'react-icons/hi2'
import {RiTeamFill } from 'react-icons/ri'
import {RiInboxArchiveFill } from 'react-icons/ri'
import {SlLoop } from 'react-icons/sl'
import {AiFillBulb } from 'react-icons/ai'
import {MdBugReport } from 'react-icons/md'


const JobSidebar = () => {
  return (
    <div className='min-w-[213px] w-full text-black text-[14px] py-[20px] px-[10px] bg-white rounded-[12px] flex flex-col gap-1'>
    <div className='flex items-center gap-2 cursor-pointer bg-[#8246FD] text-[#fff] font-[600] p-[10px] rounded-[8px]'><HiSquares2X2 className='text-[24px]'/> Boards</div>
    <div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px] rounded-[8px]'><RiTeamFill  className='text-[24px]'/> Networking</div>
    <div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px] rounded-[8px]'><RiInboxArchiveFill  className='text-[24px]'/> Archive Jobs</div>
    <div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px] rounded-[8px]'><SlLoop  className='text-[24px]'/>Loop Settings</div>
    <div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px] rounded-[8px]'><AiFillBulb  className='text-[24px]'/> Suggest a feature</div>
    <div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px] rounded-[8px]'><MdBugReport  className='text-[24px]'/> Report an Issue</div>
    
    </div>
  )
}

export default JobSidebar