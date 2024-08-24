import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex" >
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-blue-200">
                <Link href='/' className="flex items-center justify-center p-2 gap-2 lg:justify-start ">
                <Image  src='/logo.png' width={20} height={20} alt="logo" />
                <span className="hidden lg:block">HabibSchool</span>
                </Link>
                <Menu/>
            </div>
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-red-200">right</div>
        </div>
    );
  }