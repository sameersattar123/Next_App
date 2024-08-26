import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-red-400 p-4 h-screen">
      <div className="w-full lg:w-2/3 bg-purple-400">
        <div className="flex gap-4 justify-center flex-wrap">
        <UserCard type="parents" />
        <UserCard type="students" />
        <UserCard type="stuffs" />
        <UserCard type="teachers" />
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-emerald-300">right</div>
    </div>
  )
}

export default AdminPage
