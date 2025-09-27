import { getDictionary } from "../../utils/dictionaries";
import Header from "@/components/Header";
import { TypingAnimation } from "@/components/ui/typing-animation";

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
      <div className="min-h-screen w-full flex items-center justify-center">
        <TypingAnimation className="text-center">{dict.introduction}</TypingAnimation>
      </div>
    </>
  );
}
