import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const SelectComp = () => {

  const [selected , setSelected] = React.useState('Saved')

  return(
  <Select.Root>
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-[#EBE2FF] text-[#212121]  shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-[#000] outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder={selected} />
      <Select.Icon className="text-[#000]">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className=" overflow-hidden z-20 bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center z-20 h-[25px] bg-[#EBE2FF] text-[#212121] cursor-default">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px] z-20">
          
          <Select.Group>
            <SelectItem value="Saved" className='bg-[#EBE2FF] text-[#212121]' onClick={(e)=>{setSelected(e.target.value)}}>Saved</SelectItem>
            <SelectItem value="Applied" className='bg-[#EBE2FF] text-[#212121]'onClick={(e)=>{setSelected(e.target.value)}}>Applied</SelectItem>
            <SelectItem value="Interviewing" className='bg-[#EBE2FF] text-[#212121]'onClick={(e)=>{setSelected(e.target.value)}}>Interviewing</SelectItem>
            <SelectItem value="Offer" className='bg-[#EBE2FF] text-[#212121]'onClick={(e)=>{setSelected(e.target.value)}}>Offer</SelectItem>
            <SelectItem value="Rejected" className='bg-[#EBE2FF] text-[#212121]'onClick={(e)=>{setSelected(e.target.value)}}>Rejected</SelectItem>
          </Select.Group>

        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-[#000] cursor-default">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
  }


export default SelectComp;