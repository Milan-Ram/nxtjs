"use client"

import React from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar';
const Avatar = ({username}) => {
  return (
    <>
     <RadixAvatar.Root className="bg-[#57A4F2] inline-flex h-[48px] w-[48px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <RadixAvatar.Fallback className="text-white leading-1 flex h-full w-full items-center justify-center bg-[#57A4F2] font-semibold  text-[15px] ">
        {username}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
    </>
  )
}

export default Avatar