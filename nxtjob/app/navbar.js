import { BsBellFill } from "react-icons/bs"
import Avatar from "./Components/Avatar"
import NavigationMenu from "./Components/MainLayoutComps/NavigationMenu"
import Image from "next/image"

const Navbar = () => {
  return (
   <header className='fixed top-0 left-0 w-full bg-white flex items-center justify-between shadow px-5 py-4'>
    <div className="flex items-center justify-start  gap-[30px]">
      <h3 className='font-bold text-[30px] text-black cursor-pointer flex flex-row items-center justify-center '>nxtj<Image src="/mainLogo.png" width={29} height={29} alt="o"/> b</h3>
    <NavigationMenu/>
    </div>
    <div className="flex items-center justify-center gap-5">
    <BsBellFill className='w-[32px] h-[32px] text-[#212121]'/>
   <Avatar username="GS"/>
    </div>
    </header>
  )
}

export default Navbar