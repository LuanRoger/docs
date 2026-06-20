import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { HomeIcon } from "lucide-react";
import { DocLayoutTitle } from "@/components/doc-layout-title";

export function baseLayoutProps(): BaseLayoutProps {
  return {
    nav: {
      title: <DocLayoutTitle description="ts-package-template" title="TPT" />,
      url: "/ts-package-template/docs",
    },
    githubUrl: "https://github.com/LuanRoger/electron-shadcn",
    themeSwitch: {
      enabled: false,
    },
    links: [
      {
        icon: <HomeIcon />,
        text: "Home",
        url: "/",
        secondary: false,
      },
    ],
  };
}
