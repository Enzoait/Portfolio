import { getDictionary } from "../utils/dictionaries";
import Link from "next/link";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { LINKS, SOCIALS } from "@/constants/links";
import { MobileMenuToggle } from "./ui/mobile-menu-toggle";

export default async function Header({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 border-b border-border dark:border-border">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={`/${lang}`}>
        <p className="text-lg font-semibold">Enzo AÏT-YAKOUB</p>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="flex gap-4 self-center">
          <Link
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
          src="/github.svg"
          alt="GitHub"
          width={25}
          height={25}
          className="dark:hidden"
            />
            <Image
          src="/github-white.svg"
          alt="GitHub"
          width={25}
          height={25}
          className="hidden dark:block"
            />
          </Link>
          <Link
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={25}
          height={25}
          className="dark:hidden"
            />
            <Image
          src="/linkedin-white.svg"
          alt="LinkedIn"
          width={25}
          height={25}
          className="hidden dark:block"
            />
          </Link>
          <AnimatedThemeToggler />
        </div>
        <MobileMenuToggle targetId="navbar-sticky" text={dict.menu.open} />
          </div>
          <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
          >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
          <li>
            <Link href={`/${lang}${LINKS.about}`}>{dict.links.about}</Link>
          </li>
          <li>
            <Link href={`/${lang}${LINKS.projects}`}>
          {dict.links.projects}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}${LINKS.contact}`}>
          {dict.links.contact}
            </Link>
          </li>
        </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
