import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/electron-shadcn/docs",
      destination: "/electron-shadcn/docs/getting-started/installation",
      permanent: true,
    },
  ],
};

export default withMDX(config);
