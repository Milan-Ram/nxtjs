import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const DescSidebar = () => {
  return (
    <div className='min-w-[213px] w-full text-black text-[14px] py-[20px] px-[0px] bg-white rounded-[12px] flex flex-col gap-[10px]'>
   <Link href="jobDescription" > <div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px] rounded-[8px]  text-[13px] text-[#5a5a5a] '><Image src="/DialogBoxIcons/squares.png" width={20} height={20} alt="company-logo"/> Job Description</div></Link>
    <Link href="company"><div className='flex items-center gap-2 cursor-pointer font-[600] p-[10px]  text-[13px] text-[#5a5a5a]  rounded-[8px]'><Image src="/DialogBoxIcons/home.png" width={20} height={20} alt="company-logo"/>  company</div></Link>
    <Link href="note"><div className='flex items-center gap-2 cursor-pointer  text-[13px] text-[#5a5a5a]  font-[600] p-[10px] rounded-[8px]'><Image src="/DialogBoxIcons/file.png" width={20} height={20} alt="company-logo"/>  Note</div></Link>
    <Link href="networking"><div className='flex items-center gap-2 cursor-pointer text-[13px] text-[#5a5a5a] font-[600] p-[10px] rounded-[8px]'><Image src="/DialogBoxIcons/team.png" width={20} height={20} alt="company-logo"/> Networking</div></Link>
    
    </div>
  )
}

export default DescSidebar