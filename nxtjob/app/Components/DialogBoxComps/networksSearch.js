"use client"

import React from 'react'
import * as Form from '@radix-ui/react-form';
import {FiSearch} from 'react-icons/fi'

const NetworkSearch = () => {

const [search , setSearch ] =React.useState('');

  return (
    <div className='flex items-center justify-between h-[80px] px-5 py-3 basis-5/6 bg-white rounded-[8px] w-full max-w-[1103px]'>
        <h4 className='text-[18px] text-[#212121] leading-7 font-bold'>Your Network</h4>
        <Form.Root className=" flex items-center gap-4">
    <Form.Field className="flex items-center border-[1px] border-[#DDDDDD] px-1 rounded-[8px]" name="job-search">
     
        <FiSearch className='text-[#212121] text-[22px]'/>
      <Form.Control asChild>
        <input
          className="box-border  bg-white shadow-[#DDD] inline-flex max-w-[329px] h-[44px] appearance-none items-center justify-center rounded-[8px] px-[10px] text-[14px] leading-none text-black  outline-none selection:color-black selection:bg-white"
          type="text"
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          placeholder="search"
          required
        />
      </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
      <button className={`text-white  bg-[#57A4F2] text-sm leading-5 font-bold  w-[128px] h-[40px]  inline-flex items-center justify-center rounded-[4px] px-[18px] py-[12px] `}>
        Create
      </button>
    </Form.Submit>
      </Form.Root>
        </div>
  )
}

export default NetworkSearch