import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/sources/ts-package-template";

export const { GET } = createFromSource(source, {
  language: "english",
});
