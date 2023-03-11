import React, { useState } from "react";
import Avatar from "./Avatar";
import CarretDown from "@/assets/CarretDown";

interface TopBarProps {
  title?: string;
}
const TopBar = (props: TopBarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="flex justify-between py-6 border-b border-border items-center px-10 w-full">
      <p className="font-[800]">{props.title}</p>
      <div className="flex items-center cursor-pointer space-x-2  relative">
        <Avatar src="" />
        <CarretDown onClick={() => setOpenMenu((prev) => !prev)} />
        {openMenu && (
          <div
            className="bg-white shadow-md
        flex flex-col w-[20vw] max-w-[200px]
        absolute z-30 top-10 left-[-100px] "
          >
            <div className="py-3 px-6 border-b border-[#F1F3F9]">
              <p className="text-dark_200 text-sm">View Questions</p>
            </div>
            <div className="py-3 px-6 border-b border-[#F1F3F9]">
              <p className="text-dark_200 text-sm">Add Questions</p>
            </div>
            <div className="py-3 px-6 border-b border-[#F1F3F9]">
              <p className="text-dark_200 text-sm">Delete</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
