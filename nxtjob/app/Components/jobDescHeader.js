"use client"
import React from 'react'
import Image from 'next/image';
import DeleteAlert from './deleteAlert';
import SelectComp from './selectComp';

const JobDescHeader = () => {
  return (
    <>
    <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row justify-between items-center gap-[10px]'>
            <Image src="/jobLogo2.png" width={55} height={55} alt="company-logo"/>
            <div>
                <h3 className='text-[20px] font-[700] text-[#000]'>UI/UX Designer (Mobile Apps)</h3>
                <div className='flex flex-row gap-[10px]'>
                    <div className='text-[#5A5A5A] text-[12px] '>PIXTER STUDIO</div>
                    <div className='text-[#5A5A5A] text-[12px] '>Ahemdabad , Gujurat , India</div>
                    <div className='text-[#5A5A5A] text-[12px] '>Ahemdabad , Gujurat , India</div>
                    <a className='text-[12px] text-[#8246FD] font-[700] cursor-pointer' href="#">View Job Details</a>
                </div>
                <div className='text-[#9E9E9E] text-[12px]'>Job added from linkedin.com on Tue May 30 2023.</div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-[10px]'> <DeleteAlert/> <SelectComp/></div>
        </div>
        <div className='flex flex-row justify-start items-center gap-[10px] py-[20px] border-t-[1px] border-t-[#DCDCDC] border-b-[1px] border-b-[#DCDCDC]'>
<div className='flex flex-row justify-center items-center gap-[5px] bg-[#D1FAE5]'><Image src="/docIcon.png" width={15} height={15} alt="company-logo"/><p className='text-[12px] text-[#059669] '>Resume Name 75%</p></div>
<div className='flex flex-row justify-center items-center gap-[5px]'><Image src="/docIcon2.png" width={15} height={15} alt="company-logo"/><p className='text-[12px] text-[#9E9E9E]'>Cover Letter Name </p></div>
<div className='flex flex-row justify-center items-center gap-[5px]'><Image src="/chatIcon.png" width={15} height={15} alt="company-logo"/><p className='text-[12px] text-[#9E9E9E]'>Mock Interview</p></div>

        </div>
    </>
  )
}

export default JobDescHeader;