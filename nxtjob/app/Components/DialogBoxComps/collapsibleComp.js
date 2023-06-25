"use client"
import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon, ChevronDownIcon, ExclamationTriangleIcon, DotsVerticalIcon, ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
const CollapsibleComp = ({data}) => {
    const [open, setOpen] = React.useState(true);
    return (
        <Collapsible.Root className="w-full" open={open} onOpenChange={setOpen}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Collapsible.Trigger asChild>
                    <button className=" inline-flex items-center w-full  text-violet11 outline-none  ">
                        <ChevronDownIcon />
                        <span className="text-[#212121] text-[14px] font-[700] leading-[25px] ml-1" >
                            {data.heading}
                        </span>

                    </button>
                </Collapsible.Trigger>
            </div>
            <Collapsible.Content>
            {data.content.map((item)=>{
                return(
                <div className="flex flex-row items-center w-full justify-between bg-white rounded-[8px] my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
                    <div className='flex flex-row items-center gap-[10px]'>
                        <Image src={item.profileImg} className='object-cover' width={32} height={32} alt="avatar-logo" />
                        <div className='flex flex-col'><p className='text-[#212121] text-sm leading-5 font-normal'>{item.name}</p><p className='text-[#9E9E9E] text-[10px]'>UI/UX Designer at Crisil</p></div>
                    </div>
                    <h3 className='text-[#9E9E9E] text-[10px] font-normal'>{item.companyName}</h3>
                    <h3 className='text-[#9E9E9E] text-[10px] font-normal'>{item.date}</h3>
                    <div className='flex flex-row items-center justify-center gap-[10px]'>
                       
                            <ExclamationTriangleIcon className='w-[23px] h-[23px] cursor-pointer text-[#FBBF24]' />
                            {/* <ArrowRightIcon className='w-[24px] rounded-full border-[1px] h-[24px] bg-[#FBBF24]' /> */}
                        <Image src="/DialogBoxIcons/message.png" className='object-cover cursor-pointer' width={23} height={23} style={{ color: "#9E9E9E" }} alt="avatar-logo" />
                        <DotsVerticalIcon className='w-[23px] h-[23px] cursor-pointer text-[#9E9E9E]' />
                    </div>

                </div>
                  )
                })}

            </Collapsible.Content>
        </Collapsible.Root>
    );
};

export default CollapsibleComp;