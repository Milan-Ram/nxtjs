"use client"
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, DotsVerticalIcon, } from '@radix-ui/react-icons';
import Data from '../TestData';
import JobDescHeader from '../jobDescHeader';
import DescSidebar from '../DialogBoxComps/descSidebar';
import TimeLine from '../DialogBoxComps/timeLine';
import DescriptionBox from '../DialogBoxComps/descriptionBox';
import CompanyBox from '../DialogBoxComps/companyBox';
import NotesBox from '../DialogBoxComps/notesBox';
import NetworkBox from '../DialogBoxComps/networkbox';
import Image from 'next/image';

const JobDialog = ({ Data }) => {

  const handleTile=(activeTile)=>{
    switch (activeTile) {
      case "description":
        return(<DescriptionBox/>)
        break;
      case "company":
        return(<CompanyBox/>)
        break;
      case "notes":
        return(<NotesBox/>)
        break;
      case "network":
        return(<NetworkBox/>)
        break;
    
      default:
        return(<DescriptionBox/>)
        break;
    }
  }
  const [activeTile, setActiveTile] = React.useState('description')

  return (
    <Dialog.Root>
      {Data.content.map((e) => {
        return (
          <Dialog.Trigger asChild>
            <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 flex  w-full rounded-[8px] mb-2 flex-col bg-white p-[10px] gap-1 font-medium shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
              {e.savedByLoop === "true" ?
                <div className='flex gap-3 items-center justify-between w-full'><div className='flex items-center gap-[10px]'><p className='text-[#57A4F2] font-[600] text-[13px]'>Saved By Loop</p><span className='text-[#5A5A5A] text-[11px]'>Expired in 2 Days</span></div><div><DotsVerticalIcon className='w-[19px] h-[19px] text-[#9E9E9E]' /></div></div>
                : <></>
              }
              <div className='flex gap-[10px]'>
                <div className='flex items-center gap-[10px] justify-start'><Image src='/jobLogo1.png' width={24} height={24} alt="icon" />
                  <div className='flex flex-col items-start'>
                    <h3 className='text-[#212121] text-[14px]'>{e.job_title}</h3>
                    <div className='flex items-center'><Image src='/DialogBoxIcons/Home.png' width={16} height={16} alt="icon" /><h4 className='text-[#AFAFAF] text-[12px]'>{e.company}</h4></div>
                  </div>
                </div>
              </div>
              <div className='flex gap-[10px] items-center mt-[7px]'>
                <p className='w-[66px] h-[32px] flex items-center justify-center rounded-[5px] text-[#509669] py-[8px] px-[10px] rouned-[5px] bg-[#D1FAE5] gap-[7px]'><Image src="/docIcon.png" width={14} height={14} alt="icon" /> {e.resume}%</p>
                <p className='p-[8px] flex items-center justify-center border-[#9E9E9E] border-[1px]  border-dashed rounded-full '><Image src="/docIocn2.png" width={16} height={16} alt="icon" /></p>
                <p className='p-[8px] flex items-center justify-center border-[#9E9E9E] border-[1px]  border-dashed rounded-full '><Image src="/chatIcon.png" width={16} height={16} alt="icon" /></p>
              </div>
            </button>
          </Dialog.Trigger>
        )
      })}
      <Dialog.Portal className='w-[90vw] z-10 overflow-scroll'>
        <Dialog.Overlay className="bg-blackA9 z-10 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow overflow-scroll fixed z-10 top-[50%] left-[50%] h-[85vh] max-h-[85vh] w-[90vw] max-w-[1144px]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">

          <div className="flex flex-col h-full w-full bg-[#FFF] gap-4 p-1">
            <JobDescHeader />
            <div className='flex flex-row gap-[20px] '>

              <div className="basis-1/6"><DescSidebar activeTile={activeTile} setActiveTile={setActiveTile} /></div>
            
              <div className="basis-4/6 ">
            

               {handleTile(activeTile)}
                
              </div>
              
              <div className="basis-1/6 overflow-visible"><TimeLine /></div>
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