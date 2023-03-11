import { NextPage } from "next";

type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement;
export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunc;
  requireLayout?: boolean;
};

export type MainLayoutProps = {
  children: React.ReactNode; //children
  title?: string;
};
