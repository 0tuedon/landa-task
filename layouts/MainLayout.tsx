import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { MainLayoutProps } from "@/types";
import Head from "next/head";
import React from "react";

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${props?.title ?? "Landa"}`}</title>
      </Head>
      <div className="flex   min-h-screen max-h-screen ">
        {/* sidebar */}
        <Sidebar />
        <div className="flex flex-col w-full">
          <TopBar title={props.title} />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
