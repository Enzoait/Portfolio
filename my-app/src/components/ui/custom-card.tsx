import Image from "next/image";
import Link from "next/link";

export default function CustomCard({
  imagePath,
  title,
  description,
  gitHubLink,
  projectLink,
}: {
  imagePath: string;
  title: string;
  description: string;
  gitHubLink?: string;
  projectLink?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center justify-between gap-4 p-6 w-80 h-[28rem] bg-background border border-border rounded-lg shadow-md overflow-hidden">
      <Image src={imagePath} alt={title} width={125} height={75} />
      <p className="font-bold text-xl">{title}</p>
      <p>{description}</p>
      <div className="flex gap-4 mt-2">
        {gitHubLink && (
          <Link href={gitHubLink} className="" target="_blank">
            <Image
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="dark:hidden"
            />
            <Image
              src="/github-white.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="hidden dark:block"
            />
          </Link>
        )}
        {projectLink && (
          <Link href={projectLink} className="" target="_blank">
            <Image
              src="/up-right.svg"
              alt="Up Right Arrow"
              width={20}
              height={20}
              className="dark:hidden"
            />
            <Image
              src="/up-right-white.svg"
              alt="Up Right Arrow"
              width={20}
              height={20}
              className="hidden dark:block"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
