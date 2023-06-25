"use client"

import React from 'react'
import CollapsibleComp from './collapsibleComp';
import NetworkSearch from './networksSearch';


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
            <div className='bg-[#F7F3FF] h-full p-[20px]   overflow-hidden rounded-[8px] '>
               <NetworkSearch/>
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