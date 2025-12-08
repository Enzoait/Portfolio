"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LightRays } from "@/components/ui/light-rays";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/en");
  }, [router]);
  return (
    <>
      <LightRays />
    </>
  );
}
