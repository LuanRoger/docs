import type { StaticImageData } from "next/image";
import Image from "next/image";
import GitHubIcon from "@/components/icons/github";
import Link from "@/components/link";
import { Button } from "@/components/ui/button";

type ProjectDocCardProps = {
  name: string;
  description: string;
  documentationLink: string;
  repositoryLink: string;
  projectImage: string | StaticImageData;
};

export default function ProjectDocCard({
  name,
  description,
  documentationLink,
  repositoryLink,
  projectImage,
}: ProjectDocCardProps) {
  return (
    <div className="relative inset-shadow-secondary inset-shadow-xs flex flex-col gap-2 overflow-clip rounded-xl bg-transparent p-4">
      <Image
        alt={`${name} project image`}
        className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        height={200}
        src={projectImage}
        width={200}
      />
      <div className="z-20 flex flex-col gap-2">
        <h2 className="text-xl">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex gap-2">
          <Link href={documentationLink}>
            <Button variant={"secondary"}>Documentation</Button>
          </Link>
          <Link href={repositoryLink} isExternal>
            <Button size={"icon"} variant={"ghost"}>
              <GitHubIcon className="fill-white" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
