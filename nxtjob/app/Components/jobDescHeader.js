"use client"
import React from 'react'
import Image from 'next/image';
import DeleteAlert from './deleteAlert';
import SelectComp from './selectComp';
import { FiMapPin } from 'react-icons/fi';

const JobDescHeader = () => {
  return (
    <>
    <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-between items-center gap-[10px]'>
            <Image src="/jobLogo2.png" width={55} height={55} alt="company-logo"/>
            <div>
                <h3 className='text-[20px] font-[700] text-[#000]'>UI/UX Designer (Mobile Apps)</h3>
                <div className='flex flex-row gap-[10px]'>
                    <div className='text-[#5A5A5A] text-[12px] flex items-center gap-[5px]'><Image src="/DialogBoxIcons/home.png" width={14} height={14} alt="company-logo"/>  PIXTER STUDIO , </div>
                    <div className='text-[#5A5A5A] text-[12px] flex items-center gap-[5px]'><FiMapPin className='w-[13px] h-[13px] text-[#5a5a5a]'/> Ahemdabad , Gujurat , India</div>
                    <div className='text-[#5A5A5A] text-[12px] '>Ahemdabad , Gujurat , India</div>
                    <a className='text-[12px] text-[#8246FD] font-[700] cursor-pointer' href="#">View Job Details</a>
                </div>
                <div className='text-[#9E9E9E] text-[12px]'>Job added from linkedin.com on Tue May 30 2023.</div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-[10px]'> <DeleteAlert/> <SelectComp/></div>
        </div>
        <div className='flex flex-row justify-start items-center gap-[10px] py-[20px] border-t-[1px] border-t-[#DCDCDC] border-b-[1px] border-b-[#DCDCDC]'>
<div className='flex flex-row justify-center items-center p-[10px] rounded-[5px] gap-[5px] bg-[#D1FAE5]'><Image src="/docIcon.png" width={16} height={16} alt="company-logo"/><p className='text-[12px] text-[#059669] '>Resume Name 75%</p></div>
<div className='flex flex-row justify-center items-center p-[10px] rounded-[5px] gap-[5px] border-[1px] border-[#D1D5DB] '><Image src="/docIocn2.png" width={16} height={16} alt="company-logo"/><p className='text-[12px] text-[#9E9E9E]'>Cover Letter Name </p></div>
<div className='flex flex-row justify-center items-center p-[10px] rounded-[5px] gap-[5px] border-[1px] border-[#D1D5DB] '><Image src="/chatIcon.png" width={16} height={16} alt="company-logo"/><p className='text-[12px] text-[#9E9E9E]'>Mock Interview</p></div>

        </div>
    </>
  )
}

export default JobDescHeader;