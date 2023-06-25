"use client"
import { Pencil1Icon } from '@radix-ui/react-icons';
import React from 'react'
import ToolbarComp from './toolbar';
import * as Form from '@radix-ui/react-form';


const DescriptionBox = () => {

const [isEditing , setIsEditing] = React.useState(false);
const [textAreaData, setTextAreaData]= React.useState(`
About The Job

Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.

As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork – all essential skills for a successful career in this field.

Responsibilities:

Assist in the research, design, and prototyping of user interfaces and experiences
Conduct user research and develop personas, user stories, and user flows
Create wireframes, mockups, and prototypes to effectively communicate design ideas
Collaborate with cross-functional teams to gather requirements and develop solutions
Participate in usability testing and incorporate feedback into design iterations
Support the team with general administrative tasks as needed
Contribute to the creation of design documentation and style guides

Requirements:

Basic understanding of UI/UX design principles and practices
Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus
Excellent written and verbal communication skills in English
Ability to work independently and as part of a team
Strong analytical and problem-solving skills
Knowledge of web and mobile design best practices is a plus
Experience with user research methodologies and usability testing is a plus

At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.
`)
  return (
    <>
    {/* {isEditing !== true ? */}
    
    <div className='bg-[#F7F3FF] p-[20px]'>
        <div className='flex items-center justify-between flex-row mb-[20px]'><h3 className='text-[#212121] text-[18px] font-[700]'>Description</h3>
        {isEditing !== true ? 
        <Pencil1Icon className='text-[#212121] text-[17px] cursor-pointer' onClick={(e)=>{setIsEditing(true)}} />
    : (
        <div className='flex flex-row gap-[10px]'>

        <button onClick={(e)=>{setIsEditing(false)}} className=" hover:bg-mauve3 shadow-none bg-transparent text-[#000] inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            Cancel
          </button>
        <button onClick={(e)=>{setIsEditing(false)}} className="text-[#fff] hover:bg-mauve3 shadow-blackA7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-[#EF4444] px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            Save
          </button>
            </div>
    )
    }
    </div>
<div className='flex flex-col h-full'>

      <Form.Root className="w-full h-[300px] relative">
    <Form.Field className="grid mb-[10px]" name="question relative">
    {isEditing !== false ? 
      <div className="flex items-baseline justify-between">
        <ToolbarComp/>
      </div> : <></>
}
      <Form.Control asChild>
        
        <textarea
          className="box-border w-full h-[400px] bg-[#F7F3FF] pb-[50px] shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none text-black border-none outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
       value={textAreaData}
       onChange={(e)=>{setTextAreaData(e.target.value)}}
       readOnly={!isEditing}
        />
      </Form.Control>
    </Form.Field>
  </Form.Root>

</div>
         </div>
    {/* : */}
    <div>

    </div>
{/* } */}
    </>
  )
}

export default DescriptionBox