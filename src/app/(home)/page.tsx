import ProjectDocCard from "@/components/project-doc-card";
import Reveal from "@/components/reveal";
import Squares from "@/components/squares-bg";

export default function HomePage() {
  return (
    <div className="relative size-full flex-1 rounded-md border border-border">
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-4">
        <h1 className="text-5xl">docs.</h1>
        <p className="text-muted-foreground text-sm">
          Documentation for Luan Roger's open-source projects
        </p>
        <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProjectDocCard
            description="Electron Forge with shadcn-ui (Vite + Typescript)"
            documentationLink="/electron-shadcn"
            name="electron-shadcn"
            repositoryLink="https://github.com/LuanRoger/electron-shadcn"
          />
        </div>
      </div>
      <Reveal className="absolute inset-x-0 -z-10 size-full">
        <Squares direction="diagonal" speed={0.3} squareSize={30} />
      </Reveal>
    </div>
  );
}
