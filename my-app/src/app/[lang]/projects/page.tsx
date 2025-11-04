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
      <LightRays />
      <div className="min-h-screen w-full flex flex-wrap items-start justify-center gap-8 relative pt-40">
        <CustomCard
          imagePath="/securecommit.png"
          title={dict.projectsTitles[1]}
          description={dict.projectsDescriptions[1]}
          gitHubLink="https://github.com/Enzoait/SecureCommit"
          projectLink="https://secure-commit-website.vercel.app"
        />
        <CustomCard
          imagePath="/securecommit.png"
          title={dict.projectsTitles[2]}
          description={dict.projectsDescriptions[2]}
          gitHubLink="https://github.com/Enzoait/SecureCommit"
          projectLink="https://secure-commit-website.vercel.app"
        />
        <CustomCard
          imagePath="/securecommit.png"
          title={dict.projectsTitles[3]}
          description={dict.projectsDescriptions[3]}
          gitHubLink="https://github.com/Enzoait/SecureCommit"
          projectLink="https://secure-commit-website.vercel.app"
        />
      </div>
    </>
  );
}
