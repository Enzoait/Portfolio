import { getDictionary } from "../../utils/dictionaries";
import Header from "@/components/Header";

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
      <button>{dict.welcome}</button>
    </>
  );
}
