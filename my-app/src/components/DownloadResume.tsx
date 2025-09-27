import Link from "next/link";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

type props = {
    text: string;
    lang: "en" | "fr";
    className?: string;
};

export default function DownloadResume({ text, lang, className }: props) {
  return (
    <InteractiveHoverButton color="primary" className={className}>
      <Link href={`CV_AitYakoubEnzo_${lang}.pdf`} download>
        {text}
      </Link>
    </InteractiveHoverButton>
  );
}