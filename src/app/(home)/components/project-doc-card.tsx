import GitHubIcon from "@/components/icons/github";
import Link from "@/components/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type ProjectDocCardProps = {
  name: string;
  abreviatedName: string;
  description: string;
  documentationLink: string;
  repositoryLink: string;
  accentColor: string;
};

export default function ProjectDocCard({
  name,
  abreviatedName,
  description,
  documentationLink,
  repositoryLink,
  accentColor,
}: ProjectDocCardProps) {
  return (
    <div
      className={cn(
        "relative flex size-72 flex-col gap-2 border border-border",
        `bg-${accentColor}`
      )}
    >
      <h3
        className={cn(
          "absolute right-0 bottom-0 select-none font-pixel text-9xl opacity-30"
        )}
      >
        {abreviatedName}
      </h3>
      <div className="z-20 flex flex-col gap-2 p-4">
        <h2 className="text-2xl">{name}</h2>
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
