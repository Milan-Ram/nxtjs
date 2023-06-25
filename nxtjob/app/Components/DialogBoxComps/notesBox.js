"use client"
import React from 'react'
import Image from 'next/image';
import * as Form from '@radix-ui/react-form';


const NotesBox = () => {

    const [isEditing3, setisEditing3] = React.useState(false);
    const [newNote, setNewNote] = React.useState('');

    return (
        <>
            <div className='bg-[#F7F3FF] p-[20px] h-full overflow-visible '>
                <div className='flex items-center justify-between flex-row mb-[20px]'><h3 className='text-[#212121] text-[18px] font-[700]'>Notes</h3>

                    <button onClick={(e) => { setisEditing3(true) }} className=" hover:bg-mauve3 shadow-none bg-[#57A4F2] text-[#fff] inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                        Create New Note
                    </button>

                </div>
                <div className='flex flex-col h-full'>

                    <Form.Root className="w-full h-[300px] relative">
                        {isEditing3 !== true ?
                            <div className='flex flex-col justify-center items-center gap-[10px]'>
                                <Image src="/DialogBoxIcons/AddNote.png" className='object-cover' width={80} height={80} alt="company-logo" />
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-[#5A5A5A] text-2xl font-semibold leading-8'>No notes created</h3>
                                    <p className='text-sm leading-5 text-[#5A5A5A] font-normal '>You can tap the "Create New Notes" Button to start taking notes!</p>
                                </div>
                            </div>
                            :
                            (


                                <Form.Field className="grid mb-[10px]" name="question relative ">
                                    <Form.Label className="text-[14px] font-medium leading-[35px] text-[#212121]">Add Note</Form.Label>
                                    <Form.Control asChild>
                                        <textarea
                                            className="box-border w-full bg-[#FFF]   h-[191px]  inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[14px] leading-none  text-[#5A5A5A] border-[1px]  border-[#8246FD] outline-none hover:shadow-[0_0_0_1px_#8246FD] focus:shadow-[0_0_0_1px_#8246FD] selection:color-white selection:bg-blackA9 "
                                            value={newNote}
                                            onChange={(e) => { setNewNote(e.target.value) }}
                                            readOnly={!isEditing3}
                                        />
                                    </Form.Control>
                                    <div className='flex flex-row gap-[10px] absolute bottom-0 right-0'>

                                        <button onClick={(e) => { setisEditing3(false) }} className=" hover:bg-mauve3 shadow-none bg-transparent text-[#57A4F2] inline-flex h-[35px] items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                            Cancel
                                        </button>
                                        <button onClick={(e) => { setisEditing3(false) }} className="text-[#fff] hover:bg-mauve3 shadow-blackA7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-[#57A4F2] px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                            Save
                                        </button>
                                    </div>
                                </Form.Field>
                            )
                        }

                    </Form.Root>

                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default NotesBox