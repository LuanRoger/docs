import {
  FlaskConicalIcon,
  HammerIcon,
  LanguagesIcon,
  PaletteIcon,
  RefreshCwIcon,
  ShieldIcon,
} from "lucide-react";
import Link from "@/components/link";

export const features = [
  {
    title: "Type-safe",
    description: (
      <>
        Built with <Link href="https://typescriptlang.org">TypeScript 5.9</Link>
        , <Link href="https://orpc.dev">oRPC</Link>, and{" "}
        <Link href="https://zod.dev">Zod 4</Link> for end-to-end type-safe IPC
        communication between main and renderer processes.
      </>
    ),
    icon: <ShieldIcon />,
  },
  {
    title: "Good tools and defaults",
    description: (
      <>
        <Link href="https://vite.dev" isExternal>
          Vite 7
        </Link>
        ,{" "}
        <Link href="https://electronforge.io" isExternal>
          Electron Forge
        </Link>
        ,{" "}
        <Link href="https://prettier.io" isExternal>
          Prettier
        </Link>
        ,{" "}
        <Link href="https://eslint.org" isExternal>
          ESLint 9
        </Link>
        , and React Compiler enabled. All configured and ready to go.
      </>
    ),
    icon: <HammerIcon />,
  },
  {
    title: "Multi-language support",
    description: (
      <>
        Easily add new languages to your app with built-in{" "}
        <Link href="https://i18next.com" isExternal>
          i18next
        </Link>{" "}
        support and organized translation files.
      </>
    ),
    icon: <LanguagesIcon />,
  },
  {
    title: "Testing Ready",
    description: (
      <>
        Comprehensive testing with{" "}
        <Link href="https://vitest.dev" isExternal>
          Vitest
        </Link>
        ,{" "}
        <Link href="https://playwright.dev" isExternal>
          Playwright
        </Link>
        , and React Testing Library.
      </>
    ),
    icon: <FlaskConicalIcon />,
  },
  {
    title: "Beautiful UI",
    description: (
      <>
        <Link href="https://react.dev" isExternal>
          React 19
        </Link>
        ,{" "}
        <Link href="https://tailwindcss.com" isExternal>
          Tailwind 4
        </Link>
        , and{" "}
        <Link href="https://ui.shadcn.com" isExternal>
          shadcn/ui
        </Link>{" "}
        with Geist font for stunning interfaces.
      </>
    ),
    icon: <PaletteIcon />,
  },
  {
    title: "Auto Updates",
    description: (
      <>
        Built-in auto update support using GitHub Releases. Keep your users on
        the latest version.
      </>
    ),
    icon: <RefreshCwIcon />,
  },
];
