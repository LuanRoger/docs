import type { Metadata } from "next";
import Link from "@/components/link";
import PixelBlast from "@/components/pixel-blast";
import Reveal from "@/components/reveal";
import ProjectDocCard from "./components/project-doc-card";
import { projects } from "./constants";

export const metadata: Metadata = {
  title: "docs.",
  description: "Documentation of Luan Roger's open-source projects",
};

export default function HomePage() {
  return (
    <div className="relative size-full flex-1 overflow-clip border border-border p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl">docs.</h1>
          <p className="text-muted-foreground text-sm">
            Documentation of{" "}
            <Link href="https://github.com/LuanRoger" isExternal>
              Luan Roger's
            </Link>{" "}
            open-source projects.
          </p>
        </div>
        <div className="grid w-full grid-cols-4 gap-2">
          {projects.map((project) => (
            <ProjectDocCard key={project.name} {...project} />
          ))}
        </div>
      </div>
      <Reveal className="absolute inset-0 -z-10 size-full" delayMs={5000}>
        <PixelBlast
          colors={["--electron", "--ts-package-template"]}
          edgeFade={0}
          liquid={false}
          patternDensity={1}
          patternScale={2}
          pixelSize={6}
          pixelSizeJitter={2}
          rippleIntensityScale={1.5}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          speed={0.3}
          variant="square"
        />
      </Reveal>
    </div>
  );
}
