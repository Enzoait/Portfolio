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

      <div className="min-h-screen w-full flex flex-col items-center justify-start relative">
        <div className="flex flex-col items-center gap-6 mt-35">
          <p className="text-3xl font-bold">{dict.aboutTitle}</p>
          <p className="text-[18px] w-[75%] text-center">
            {dict.aboutDescription}
          </p>
        </div>
        <LightRays />
        <div className="relative flex items-center justify-cente gap-15">
          <div className="flex flex-col gap-4 w-2xl">
            <p className="text-3xl font-bold">{dict.technologiesTitle}</p>
            <p className="">{dict.technologiesDescription}</p>
          </div>
          <div className="relative size-[400px] flex items-center justify-center">
            <OrbitingCircles iconSize={50}>
              <Image
                src="/typescript.svg"
                alt="Typescript"
                width={50}
                height={50}
              />
              <Image src="/react.svg" alt="React" width={50} height={50} />
              <Image src="/python.svg" alt="Python" width={50} height={50} />
              <Image src="/expo.svg" alt="Expo" width={50} height={50} />
              <Image src="/csharp.svg" alt="CSharp" width={50} height={50} />
              <Image src="/java.svg" alt="Java" width={50} height={50} />
              <Image
                src="/tailwindcss.svg"
                alt="Tailwind"
                width={50}
                height={50}
              />
              <Image src="/nextjs.svg" alt="Next" width={50} height={50} />
            </OrbitingCircles>

            <OrbitingCircles iconSize={50} radius={100} reverse speed={2}>
              <Image
                src="/googlecloud.svg"
                alt="Google Cloud"
                width={40}
                height={40}
              />
              <Image
                src="/postgresql.svg"
                alt="PostgreSQL"
                width={40}
                height={40}
              />
              <Image src="/git.svg" alt="Git" width={40} height={40} />
              <Image
                src="/supabase.svg"
                alt="Supabase"
                width={40}
                height={40}
              />
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </>
  );
}
