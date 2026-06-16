import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/sources/ts-package-template";
import { baseLayoutProps } from "../layout.shared";

export default function Layout({
  children,
}: LayoutProps<"/ts-package-template/docs">) {
  return (
    <DocsLayout tree={source.pageTree} {...baseLayoutProps()}>
      {children}
    </DocsLayout>
  );
}
