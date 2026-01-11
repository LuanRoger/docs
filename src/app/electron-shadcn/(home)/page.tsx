import type { Metadata } from "next";
import FeatureCards from "@/components/feature-cards";
import ElectronIcon from "@/components/icons/electron";
import ReactIcon from "@/components/icons/react";
import ViteIcon from "@/components/icons/vite";
import Link from "@/components/link";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { AppRoot } from "@/lib/constants/routes";
import { mountRoute } from "@/lib/utils/route";
import Prism from "./components/prism-bg";
import { features } from "./constants";

export const metadata: Metadata = {
  title: "electron-shadcn",
  description:
    "A starter template for Electron Forge with shadcn-ui (Vite + Typescript)",
};

export default function HomePage() {
  return (
    <div className="relative inset-shadow-sm flex-1 overflow-hidden rounded-2xl border border-border p-4">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center gap-2">
          <ElectronIcon className="size-16 fill-foreground" />
          <ViteIcon className="size-16 fill-foreground" />
          <ReactIcon className="size-16 fill-foreground" />
        </div>
        <h1 className="font-bold text-3xl">electron-shadcn</h1>
        <p className="font-medium text-lg">
          Electron Forge with shadcn-ui (Vite + Typescript){" "}
        </p>
        <div className="flex gap-2">
          <Button asChild>
            <Link
              href={mountRoute(AppRoot.ELECTRON_SHADCN, "/docs")}
              showUnderline={false}
            >
              Documentation
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link
              href="https://github.com/LuanRoger/electron-shadcn"
              showUnderline={false}
            >
              Repository
            </Link>
          </Button>
        </div>
        <FeatureCards features={features} />
      </div>
      <Reveal className="absolute inset-0 -z-10 hidden lg:block">
        <Prism
          animationType="rotate"
          baseWidth={10}
          colorFrequency={1}
          glow={0.3}
          height={8}
          hueShift={0}
          noise={0}
          scale={1}
          timeScale={0.2}
        />
      </Reveal>
    </div>
  );
}
