"use client"
import { Pencil1Icon } from '@radix-ui/react-icons';
import React from 'react'
import Image from 'next/image';
import * as Form from '@radix-ui/react-form';


const CompanyBox = () => {

const [isEditing2 , setisEditing2] = React.useState(false);
const [compnayName , setCompanyName] = React.useState('Pixter Studio');
const [description , setDescription] = React.useState(`Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We've more than 15 products and satisfied clients all around the world.`);
const [website , setWebsite] = React.useState(`https://www.linkedin.com/company/pixster-studio/life/`);
const [industry , setIndustry] = React.useState(`Information Technology & Services`);
const [employeeCount , setEmployeeCount] = React.useState('11-50');
const [address , setAddress] = React.useState(`Ahmedabad, Gujarat, India`);


  return (
    <>   
    <div className='bg-[#F7F3FF] p-[20px] overflow-scroll '>
        <div className='flex items-center justify-between flex-row mb-[20px]'><h3 className='text-[#212121] text-[18px] font-[700]'>Compnay Info</h3>
        {isEditing2 !== true ? 
        <Pencil1Icon className='text-[#212121] text-[17px] cursor-pointer' onClick={(e)=>{setisEditing2(true)}} />
    : (
        <div className='flex flex-row gap-[10px]'>

        <button onClick={(e)=>{setisEditing2(false)}} className=" hover:bg-mauve3 shadow-none bg-transparent text-[#000] inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            Cancel
          </button>
        <button onClick={(e)=>{setisEditing2(false)}} className="text-[#fff] hover:bg-mauve3 shadow-blackA7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-[#EF4444] px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            Save
          </button>
            </div>
    )
    }
    </div>
<div className='flex flex-col h-full'>

      <Form.Root className="w-full h-[300px] relative">
<div className='flex flex-row items-center gap-[10px]'>
<Image src="/jobLogo2.png" width={50} height={50} alt="company-logo"/>
<Form.Field className="grid mb-[10px]" name="question relative ">
{isEditing2 !== true ? <> </> : (
    <Form.Label className="text-[13px] font-medium leading-[35px] text-black -mb-1">Company Name</Form.Label>)}
      <Form.Control asChild>              
      <input
          className="box-border w-full h-[40px] bg-[#FFF] font-[600] -mt-1  inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A]  border-none outline-none hover:shadow-[#DCDCDC] focus:shadow-[#DCDCDC] selection:color-white selection:bg-blackA9 resize-none"
          type="text"
          value={compnayName}
       onChange={(e)=>{setCompanyName(e.target.value)}}
       readOnly={!isEditing2}
        />
      </Form.Control>
    </Form.Field>
</div>

    <Form.Field className="grid mb-[10px]" name="question relative ">
    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">Description</Form.Label>
      <Form.Control asChild>              
        <textarea
          className="box-border w-full bg-[#FFF] pb-[100px]  h-[100px]  inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A]  border-none outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 "
       value={description}
       onChange={(e)=>{setDescription(e.target.value)}}
       readOnly={!isEditing2}
        />
      </Form.Control>
    </Form.Field>
    {/* ============================================================================================================ */}
    <div className={`flex ${isEditing2 !== true ? "flex-col" : "flex-row" } flex-col flex-wrap justify-between items-center`}>

    <Form.Field className="grid mb-[10px]" name="question relative basis1/2 basis1/2 ">
    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">Website</Form.Label>
      <Form.Control asChild>              
      <input
          className="box-border w-full h-[40px] bg-[#FFF]  shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A]  border-none outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          type="text"
          value={website}
       onChange={(e)=>{setWebsite(e.target.value)}}
       readOnly={!isEditing2}
        />
      </Form.Control>
    </Form.Field>
       {/* ============================================================================================================ */}
    <Form.Field className="grid mb-[10px]" name="question relative basis1/2">
    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">Industry</Form.Label>
      <Form.Control asChild>              
      <input
          className="box-border w-full h-[40px] bg-[#FFF]  shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A]  border-none outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          type="text"
          value={industry}
       onChange={(e)=>{setIndustry(e.target.value)}}
       readOnly={!isEditing2}
        />
      </Form.Control>
    </Form.Field>
       {/* ============================================================================================================ */}
    <Form.Field className="grid mb-[10px]" name="question relative basis1/2">
    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">Employees Count</Form.Label>
      <Form.Control asChild>              
      <input
          className="box-border w-full h-[40px] bg-[#FFF]  shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A]  border-none outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          type="text"
          value={employeeCount}
       onChange={(e)=>{setEmployeeCount(e.target.value)}}
       readOnly={!isEditing2}
        />
      </Form.Control>
    </Form.Field>
       {/* ============================================================================================================ */}
    <Form.Field className="grid mb-[10px]" name="question relative basis1/2">
    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">Address</Form.Label>
      <Form.Control asChild>              
      <input
          className="box-border w-full h-[40px] bg-[#FFF]  shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A]  border-none outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          type="text"
          value={address}
       onChange={(e)=>{setAddress(e.target.value)}}
       readOnly={!isEditing2}
       />
      </Form.Control>
    </Form.Field>
       {/* ============================================================================================================ */}
       </div>

  </Form.Root>

</div>
         </div>
    <div>

    </div>
    </>
  )
}

export default CompanyBox