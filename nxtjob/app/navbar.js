import { BsBellFill } from "react-icons/bs"
import Avatar from "./Components/Avatar"
import NavigationMenu from "./Components/NavigationMenu"

const Navbar = () => {
  return (
   <header className='absolute top-0 left-0 w-full bg-white flex items-center justify-between shadow px-5 py-4'>
    <div className="flex items-center justify-start  gap-6">
      <h3 className='font-bold text-[30px] text-black cursor-pointer'>nxtjob</h3>
    <NavigationMenu/>
    </div>
    <div className="flex items-center justify-center gap-5">
    <BsBellFill className='text-[21px] text-black'/>
   <Avatar username="GS"/>
    </div>
    </header>
  )
}

export default Navbar