import JobDialog from "./Components/MainLayoutComps/JobDialog";
import JobSeach from "./Components/MainLayoutComps/JobSeach";
import JobSidebar from "./Components/MainLayoutComps/JobSidebar";
import Data from "./Components/TestData"


export default function Home() {
  return (
    <main className="flex min-h-screen w-fit bg-[#F9F8F8] pt-[90px] gap-4 p-4">
      <div className="basis-1/6"><JobSidebar /></div>
      <div className="basis-5/6 ">
        <JobSeach />
        <div className='flex gap-[10px] mt-[10px]  '>
          <div className='flex flex-col'>
            <div className="bg-[#F4F4F4]   justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className=" text-lg leading-7 font-semibold  ">Saved</h4><h5 className="text-sm leading-5 font-normal">4 Jobs</h5>
            </div >
            <JobDialog Data={Data[0]} />
          </div>
          <div className='flex flex-col'>
            <div className="bg-[#F5F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className=" text-lg leading-7 font-semibold  ">Applied</h4><h5 className="text-sm leading-5 font-normal">1 Jobs</h5>
            </div >
            <div><JobDialog Data={Data[1]} /></div>
          </div>
          <div className='flex flex-col'>
            <div className="bg-[#F5F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className=" text-lg leading-7 font-semibold  ">Interviewing</h4><h5 className="text-sm leading-5 font-normal">1 Jobs</h5>
            </div >
            <div><JobDialog Data={Data[2]} /></div>
          </div>
          <div className='flex flex-col'>
            <div className="bg-[#F5F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className=" text-lg leading-7 font-semibold  ">Offer</h4><h5 className="text-sm leading-5 font-normal">1 Jobs</h5>
            </div >
            <div><JobDialog Data={Data[3]} /></div>
          </div>
        </div>
      </div>
    </main>
  )
}
