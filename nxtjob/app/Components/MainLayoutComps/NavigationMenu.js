"use client"

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import * as Form from '@radix-ui/react-form';

const NavigationMenuComponent = () => {

  const[cv,setCV] = React.useState('');
  const[interviewName,setInterviewName] = React.useState('');

  return (
    <NavigationMenu.Root className="relative flex justify-center z-0">
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[14px] font-medium leading-none outline-none ">
            Resume Builder{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="p-[10px] data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 sm:w-auto w-fit">
            <p className='text-[#212121] text-[14px]'>Gopal_Sapara_V1</p><p className='text-[#059669] text-[12px] leading-4 font-normal'>75% Match with Job Description</p><button className='px-[32px] py-[6px] my-[10px] bg-[#8246FD] text-[#fff]'>Customize It</button>

          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================================================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Cover Letter{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <Form.Root className=" flex align-end items-end gap-4">
              <Form.Field className="flex flex-col items-center  px-1 rounded-[8px]" name="job-search">
                <Form.Label className="text-[14px] font-medium leading-[35px] text-[#212121] w-full">Cover Letter</Form.Label>
            
                <Form.Control asChild>
                  <input
                    className="box-border  bg-white border-[1px] border-[#DDDDDD] shadow-blackA9 rounded-[8px] inline-flex w-[329px] h-[44px] appearance-none items-center justify-center  px-[10px] text-[14px] leading-none text-black  outline-none selection:color-black selection:bg-white"
                    type="text"
                    value={cv}
                    onChange={(e) => { setCV(e.target.value) }}
                    placeholder="Cover Letter Name"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Submit asChild>
                <button className={`text-white bg-[#8246FD] text-[13px] font-[600] w-fit min-w-[150px] px-[32px] py-[11px] inline-flex items-center justify-center rounded-[4px]`}>
                  Create New
                </button>
              </Form.Submit>
         
            </Form.Root>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================================================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Linkedin Review{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <h3>Linkedin Review Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================================================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px] font-medium leading-none outline-none ">
            Interview{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <Form.Root className=" flex align-end items-end gap-4">
              <Form.Field className="flex flex-col items-center  px-1 rounded-[8px]" name="job-search">
                <Form.Label className="text-[14px] font-medium leading-[35px] text-[#212121] w-full">Mock Interview</Form.Label>
            
                <Form.Control asChild>
                  <input
                    className="box-border  bg-white border-[1px] border-[#DDDDDD] shadow-blackA9 rounded-[8px] inline-flex w-[329px] h-[44px] appearance-none items-center justify-center  px-[10px] text-[14px] leading-none text-black  outline-none selection:color-black selection:bg-white"
                    type="text"
                    value={interviewName}
                    onChange={(e) => { setInterviewName(e.target.value) }}
                    placeholder="Mock Interview Name"
                    required
                  />
                </Form.Control>
              </Form.Field>
              <Form.Submit asChild>
              <button className={`text-white bg-[#8246FD] text-[13px] font-[600] w-fit min-w-[150px] px-[32px] py-[11px] inline-flex items-center justify-center rounded-[4px]`}>
                  Create New
                </button>
              </Form.Submit>
            </Form.Root>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        {/* ======================================================================================== */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-[#212121] bg-[#F7F3FF] font-[600]   hover:bg-[#F7F3FF] hover:font-[600]  hover:text-[#8246FD] focus:bg-[#F7F3FF] focus:text-[#8246FD] focus:font-[600]  group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2  text-[14px]  leading-none outline-none ">
            Job Tracker & Networking{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <h3>Job Tracker & Networking Content</h3>
          </NavigationMenu.Content>
        </NavigationMenu.Item>  

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};



export default NavigationMenuComponent;