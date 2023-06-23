import JobDialog from "./Components/JobDialog";
import JobSeach from "./Components/JobSeach";
import JobSidebar from "./Components/JobSidebar";
import SavedData from "./Components/TestData"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-[#F5F5F5] pt-[90px] gap-4 p-4">
      <div className="basis-1/6"><JobSidebar/></div>
      <div className="basis-5/6 ">
        <JobSeach/>
        <div className='flex gap-2 overflow-scroll'>
          <div className='flex flex-col'>
            <div className="bg-[#F4F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className="text-[17px] ">Saved</h4><h5>4 Jobs</h5>
              </div >
           

  <JobDialog data={SavedData} />
  
             
              
          </div>
          <div className='flex flex-col'>
            <div className="bg-[#F5F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className="text-[17px] ">Applied</h4><h5>1 Jobs</h5>
              </div >
              <div><JobDialog/></div>
          </div>
          <div className='flex flex-col'>
            <div className="bg-[#F5F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className="text-[17px] ">Interviewing</h4><h5>1 Jobs</h5>
              </div >
              <div><JobDialog/></div>
          </div>
          <div className='flex flex-col'>
            <div className="bg-[#F5F4F4] justify-between flex text-[#212121] w-[329px] p-3">
              <h4 className="text-[17px] ">Offer</h4><h5>1 Jobs</h5>
              </div >
              <div><JobDialog/></div>
          </div>
        </div>
        </div>
    </main>
  )
}
