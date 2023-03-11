import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { MainLayoutProps } from "@/types";
import Head from "next/head";
import React from "react";

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Head>
        {/* for preview on each devices */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
