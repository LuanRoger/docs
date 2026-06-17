import Link from "next/link";
import type { AppRoot } from "@/lib/constants/routes";
import GitHubIcon from "./icons/github";
import { Button } from "./ui/button";

type EditOnGitHubProps = {
  path: string;
  app: AppRoot;
  className?: string;
};

export default function EditOnGitHub({
  path,
  app,
  className,
}: EditOnGitHubProps) {
  return (
    <Button asChild className={className} variant="secondary">
      <Link
        href={`https://github.com/LuanRoger/docs/blob/main/content${app}/docs/${path}`}
        target="_blank"
      >
        <GitHubIcon className="fill-foreground" />
        Edit on GitHub
      </Link>
    </Button>
  );
}
