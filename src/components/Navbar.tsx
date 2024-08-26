import Image from "next/image"

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="hidden md:flex gap-2 items-center text-xs rounded-full  ring-[1.5px] ring-gray-300 px-2">
        <Image src='/search.png' height={16} width={16}  alt="logo"/>
        <input type="text" placeholder="Search..." className="bg-transparent outline-none p-2 w-[200px]"/>
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
       <div className="relative rounded-full bg-white w-7 h-7 flex items-center justify-center cursor-pointer">
        <Image src='/message.png' height={20} width={20} alt="message" />
        <div className="absolute -top-3 -right-3 rounded-full text-white bg-purple-500 flex items-center justify-center w-5 h-5 text-xs">1</div>
       </div>
       <div className="rounded-full bg-white w-7 h-7 flex items-center justify-center cursor-pointer">
        <Image src='/announcement.png' height={20} width={20} alt="message" />
       </div>
       <div className="flex flex-col">
        <span className="text-xs font-medium leading-3">Sameer</span>
        <span className="text-gray-500 text-[10px] text-right">Admin</span>
       </div>
       <Image src='/avatar.png' height={36} width={36} alt="avatar" className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar
