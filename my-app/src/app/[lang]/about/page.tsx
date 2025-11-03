import { getDictionary } from "../../../utils/dictionaries";
import Header from "@/components/Header";
import { LightRays } from "@/components/ui/light-rays";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

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
        <div className="gap-6 flex flex-col items-center">
          <p className="text-3xl font-bold">{dict.aboutTitle}</p>
          <p className="text-[18px] w-[75%] text-center">
            {dict.aboutDescription}
          </p>
        </div>
        <LightRays />
        <OrbitingCircles iconSize={40}>
          <Image
            src="/typescript.svg"
            alt="Typescript"
            width={40}
            height={40}
          />
          <Image src="/react.svg" alt="React" width={40} height={40} />
          <Image src="/python.svg" alt="Python" width={40} height={40} />
          <Image src="/expo.svg" alt="Expo" width={40} height={40} />
          <Image src="/csharp.svg" alt="CSharp" width={40} height={40} />
          <Image src="/java.svg" alt="Java" width={40} height={40} />
          <Image src="/tailwindcss.svg" alt="Tailwind" width={40} height={40} />
          <Image src="/nextjs.svg" alt="Next" width={40} height={40} />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <Image
            src="/path/to/your/image.png"
            alt="Description"
            width={30}
            height={30}
          />
          <Image
            src="/path/to/your/image.png"
            alt="Description"
            width={30}
            height={30}
          />
          <Image
            src="/path/to/your/image.png"
            alt="Description"
            width={30}
            height={30}
          />
          <Image
            src="/path/to/your/image.png"
            alt="Description"
            width={30}
            height={30}
          />
        </OrbitingCircles>
      </div>
    </>
  );
}
