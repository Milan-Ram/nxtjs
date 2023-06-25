import React from 'react'

const TimeLine = () => {

    const TimeLineData = [
        {
            "id": "1",
            "date": "Today, 1:12 PM",
            "title": "Moved To Saved",
            "description": "You moved this job from Applied to saved",
        },
        {
            "id": "2",
            "date": "Yesterday, 1:12 PM",
            "title": "Moved to Applied",
            "description": "You moved this job from Applied to saved",
        },
        {
            "id": "3",
            "date": "Yesterday, 1:12 PM",
            "title": "Moved to Applied",
            "description": "You moved this job from Applied to saved",
        },

    ]



    return (
        <>
            <div className='flex flex-col bg-[#F9F8F8] p-[20px] min-w-[193px] gap-[20px] rounded-[8px] '>
                <h3 className='text-[#5A5A5A] text-[17px] font-[700] mb-[10px]'>Time Line</h3>
                <div className='flex flex-col'>
                    {TimeLineData.map((e) => {
                        return (

                            <div className='border-l-[1px] last:border-0 border-dashed py-[10px] pb-[20px] border-[#57A4F2] relative pl-1 '>
                                <div className='flex flex-row mb-[10px] items-center' ><div className='absolute -left-2 w-[16px] h-[16px] bg-[#57A4F2] rounded-full'></div><div className='text-[10px] text-[#9E9E9E] absolute left-3 '>{e.date}</div></div>
                                <div className='flex flex-col bg-[#E4F2FF] p-[10px] mt-[20px] ml-[10px]  gap-[10px]'>
                                    <h3 className='text-[#5A5A5A] text-[12px] leading-4 font-bold'>{e.title}</h3>
                                    <p className='text-[#5A5A5A] text-[10px]'>{e.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default TimeLine