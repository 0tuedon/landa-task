import LogoutIcon from "@/assets/LogoutIcon";
import { SideBarRoutes } from "@/utils/routes";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [routes, setRoutes] = useState(SideBarRoutes); // to avoid hydration error
  return (
    <div
      className="min-w-[270px] 
    py-4 px-[30px] border-r border-border justify-between
    flex flex-col bg-navbar min-h-screen max-w-[270px] "
    >
      <div className="px-[14px]">
        <Image src={"/logo.webp"} width={60} height={30} alt="Landa Logo" />
      </div>
      <div className="flex flex-col  mt-[-10vh] space-y-3">
        {routes.map((data) => (
          <div
            key={data.name}
            className={`flex items-center space-x-5 py-3 px-[14px] 
           ${
             data?.active
               ? "bg-background_blue cursor-pointer"
               : "cursor-not-allowed"
           }`}
          >
            <data.icon />
            <p
              className={`font-normal text-base ${
                data?.active && "text-active_blue"
              }`}
            >
              {data.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-6 cursor-pointer ">
        <p className="text-base">Logout</p>
        <LogoutIcon />
      </div>
    </div>
  );
};

export default Sidebar;
