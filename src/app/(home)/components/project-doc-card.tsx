import { BookIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import AnimatedBorderCard from "@/app/(home)/components/animated-border-card";
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
    <AnimatedBorderCard className="flex flex-col gap-2 bg-transparent">
      <Image
        alt={`${name} project image`}
        className="absolute inset-0 -z-10 size-full rounded-xl object-cover opacity-40"
        height={200}
        src={projectImage}
        width={200}
      />
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex gap-2">
        <Link href={documentationLink}>
          <Button variant={"secondary"}>Documentation</Button>
        </Link>
        <Link href={repositoryLink} isExternal>
          <Button size={"icon"} variant={"ghost"}>
            <BookIcon />
          </Button>
        </Link>
      </div>
    </AnimatedBorderCard>
  );
}
