import { NextPageWithLayout } from "@/types";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
type Props = {
  Component: NextPageWithLayout;
  pageProps: any;
} & AppProps;

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      {Component.requireLayout ? (
        <>{getLayout(<Component {...pageProps} />)}</>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
