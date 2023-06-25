"use client"
import { Pencil1Icon } from '@radix-ui/react-icons';
import React from 'react'
import Image from 'next/image';
import * as Form from '@radix-ui/react-form';
import JobSeach from '../JobSeach';
import CollapsibleComp from './collapsibleComp';


const NetworkBox = () => {

    const NetworkData = [
        {
            "id": "1",
            "heading": "Follow-Up 1",
            "content":[ 
            {   "itemID":"0",
                "profileImg": "/DialogBoxIcons/Avatar.png",
                "name": "Monisha Raut",
                "jobTitle": "UI/UX Designer at Crisil ",
                "companyName": "Name of Company",
                "date": "17 June , 2023",
                "status": "yellow"
            },
            {   "itemID":"0",
                "profileImg": "/DialogBoxIcons/Avatar.png",
                "name": "Monisha Raut",
                "jobTitle": "UI/UX Designer at Crisil ",
                "companyName": "Name of Company",
                "date": "17 June , 2023",
                "status": "yellow"
            },
            {   "itemID":"0",
                "profileImg": "/DialogBoxIcons/Avatar.png",
                "name": "Monisha Raut",
                "jobTitle": "UI/UX Designer at Crisil ",
                "companyName": "Name of Company",
                "date": "17 June , 2023",
                "status": "yellow"
            },
        ]
        },
        {
            "id": "1",
            "heading": "Follow-Up 2",
            "content":[ 
            {   "itemID":"0",
                "profileImg": "/DialogBoxIcons/Avatar.png",
                "name": "Monisha Raut",
                "jobTitle": "UI/UX Designer at Crisil ",
                "companyName": "Name of Company",
                "date": "17 June , 2023",
                "status": "yellow"
            },
        ]
        }
    ]


    return (
        <>
            <div className='bg-[#F7F3FF] h-full p-[20px] overflow-scroll  overflow-x-hidden '>
                <JobSeach title={'Your Network'} searchText={'Create New'} color={'#57A4F2'} />
                <div className='mt-[20px]'>
                    {NetworkData.map((e) => {
                        return (
                            <CollapsibleComp data={e} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NetworkBox