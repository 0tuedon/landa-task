import React from "react";
import Avatar from "./Avatar";
import CarretDown from "@/assets/CarretDown";

interface TopBarProps {
  title?: string;
}
const TopBar = (props: TopBarProps) => {
  return (
    <div className="flex justify-between py-6 border-b border-border items-center px-10 w-full ">
      <p className="font-[800]">{props.title}</p>
      <div className="flex items-center cursor-pointer space-x-2">
        <Avatar src="" />
        <CarretDown />
      </div>
    </div>
  );
};

export default TopBar;
