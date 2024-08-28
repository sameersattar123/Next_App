import Announcements from "@/components/Announcements";
import AttendenceChart from "@/components/AttendenceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FianceChart from "@/components/FianceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4  p-4 h-screen">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-center flex-wrap">
          <UserCard type="parents" />
          <UserCard type="students" />
          <UserCard type="stuffs" />
          <UserCard type="teachers" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FianceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
