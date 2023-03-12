import { useRouter } from "next/router";
import { FRONTEND_URLS } from "@/utils/routes";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      router.push(FRONTEND_URLS.assessment);
    }
  }, [router]);

  return <></>;
}
