import { getDictionary } from "../../../utils/dictionaries";
import Header from "@/components/Header";
import { LightRays } from "@/components/ui/light-rays";
import { ContactForm } from "./ContactForm";

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
      <div className="relative w-full items-center justify-center flex min-h-screen pt-20">
        <LightRays className="-z-10" length="100%" />
        <div className="flex flex-col self-center w-[50%] justify-center">
          <ContactForm dict={dict} />
        </div>
      </div>
    </>
  );
}
