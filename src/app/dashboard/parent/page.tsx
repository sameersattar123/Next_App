import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"

const ParentPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3 ">
      <div className="h-full p-4  bg-white rounded-md">
        <h1 className="text-xl font-semibold">Schedule (Sameer Sattar)</h1>
        <BigCalendar/>
      </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcements/>
      </div>
    </div>
  )
}

  
  export default ParentPage
  