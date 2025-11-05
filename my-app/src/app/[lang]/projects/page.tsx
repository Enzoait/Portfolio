import { getDictionary } from "../../../utils/dictionaries";
import Header from "@/components/Header";
import CustomCard from "@/components/ui/custom-card";
import { LightRays } from "@/components/ui/light-rays";

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
      {/* Wrap background and content so LightRays can span full page height */}
      <div className="relative w-full">
        <LightRays className="-z-10" length="100%" />
        <div className="min-h-screen w-full flex flex-wrap items-start justify-center gap-8 relative pt-40 pb-40">
          <CustomCard
            imageDarkPath="/securecommit.png"
            imageLightPath="/securecommit.png"
            title={dict.projectsTitles[1]}
            description={dict.projectsDescriptions[1]}
            gitHubLink="https://github.com/Enzoait/SecureCommit"
            projectLink="https://secure-commit-website.vercel.app"
          />
          <CustomCard
            imageDarkPath="/hill-logo-dark.png"
            imageLightPath="/hill-logo.png"
            title={dict.projectsTitles[2]}
            description={dict.projectsDescriptions[2]}
            gitHubLink="https://github.com/Enzoait/mairie-antony-chatbot"
            projectLink="https://mairie-chatbot.vercel.app"
          />
          <CustomCard
            imageDarkPath="/thumbext.png"
            imageLightPath="/thumbext.png"
            title={dict.projectsTitles[3]}
            description={dict.projectsDescriptions[3]}
            gitHubLink="https://github.com/Enzoait/ThumbExt"
          />
          <CustomCard
            imageDarkPath="/learnify-white.png"
            imageLightPath="/learnify.png"
            title={dict.projectsTitles[4]}
            description={dict.projectsDescriptions[4]}
            gitHubLink="https://github.com/Enzoait/learnify-ldf-2"
          />
          <CustomCard
            imageDarkPath="/mint.svg"
            imageLightPath="/mint.svg"
            title={dict.projectsTitles[5]}
            description={dict.projectsDescriptions[5]}
            gitHubLink="https://github.com/AurelienAllenic/mint"
          />
        </div>
      </div>
    </>
  );
}
