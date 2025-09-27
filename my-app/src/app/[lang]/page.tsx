import { getDictionary } from "../../utils/dictionaries";
import Header from "@/components/Header";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { LightRays } from "@/components/ui/light-rays";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";
import DownloadResume from "@/components/DownloadResume";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); 
  return (
    <>
      <Header params={params} />
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4">
        <TypingAnimation className="text-6xl text-center">
          {dict.introduction}
        </TypingAnimation>
        <div className="gap-6 flex flex-col items-center">
          <p className="text-3xl italic font-bold">{dict.role}</p>
          <p className="text-[18px] w-[75%] text-center">{dict.description}</p>
          <div className="flex gap-2">
            <InteractiveHoverButton color="sky-500">
              <Link href={"mailto:enzo.aityakoub@gmail.com"}>
                {dict.buttons.emailme}
              </Link>
            </InteractiveHoverButton>
            <DownloadResume
              text={dict.buttons.downloadcv}
              lang={lang}
              className=""
            />
          </div>
        </div>
        <LightRays />
      </div>
    </>
  );
}
