export const AppRoot = {
  ELECTRON_SHADCN: "/electron-shadcn",
  TS_PACKAGE_TEMPLATE: "/ts-package-template",
} as const;

export type AppRoot = (typeof AppRoot)[keyof typeof AppRoot];
