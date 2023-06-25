"use client"
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import SavedData from './TestData';
import JobDescHeader from './jobDescHeader';
import DescSidebar from './DialogBoxComps/descSidebar';
import TimeLine from './DialogBoxComps/timeLine';
import DescriptionBox from './DialogBoxComps/descriptionBox';
import CompanyBox from './DialogBoxComps/companyBox';
import NotesBox from './DialogBoxComps/notesBox';
import NetworkBox from './DialogBoxComps/networkbox';


const JobDialog = ({data}) => {
  // console.log(data)
return( 
  <Dialog.Root>
    {SavedData.map((e)=>{
  return(
    <Dialog.Trigger asChild>
      <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 flex  w-full rounded-[8px] mb-2 flex-col bg-white p-[10px] gap-1 font-medium shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
       {e.savedByLoop === "true" ? 
        <div className='flex gap-3 items-center '><p className='text-[#57A4F2] font-[600] text-[13px]'>Saved By Loop</p><span className='text-[#5A5A5A] text-[11px]'>Expired in 2 Days</span></div>
      : <></> 
      }
        <div className='flex'>
              <div className='flex flex-col'>
                <h3 className='text-[#212121] text-[15px]'>{e.job_title}</h3>
                <div><h4 className='text-[#AFAFAF] text-[13px]'>e.company</h4></div>
                </div>
                </div>
                <div className='flex'><p className='w-[66px] h-[32px] flex items-center justify-center rounded-[5px] text-[#509669] bg-[#D1FAE5]'>75%</p></div>
                </button>
    </Dialog.Trigger>
    )
})}
    <Dialog.Portal className='w-[90vw] z-10 overflow-hidden'> 
      <Dialog.Overlay className="bg-blackA9 z-10 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow overflow-hidden fixed z-10 top-[50%] left-[50%] h-[85vh] max-h-[85vh] w-[90vw] max-w-[1144px]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">

        {/* <fieldset className="mb-[15px] flex items-center gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
            Username
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            defaultValue="@peduarte"
            />
        </fieldset> */}
        <div className="flex flex-col h-full w-full bg-[#FFF] gap-4 p-1">
        <JobDescHeader/>
        <div className='flex flex-row'>

      <div className="basis-1/6"><DescSidebar/></div>
      <div className="basis-4/6 ">
        {/* <DescriptionBox/> */}
        {/* <CompanyBox/> */}
        {/* <NotesBox/> */}
        <NetworkBox/>
        </div>
      <div className="basis-1/6 "><TimeLine/></div>
        </div>

      </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>

)
};

export default JobDialog;