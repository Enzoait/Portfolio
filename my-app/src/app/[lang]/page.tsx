import { getDictionary } from "../../utils/dictionaries";

type Params = {
  params: {
    lang: "en" | "fr";
  };
};

export default async function LocalePage({ params }: Params) {
  const dict = await getDictionary(params.lang);
  return <button>{dict.welcome}</button>;
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}
