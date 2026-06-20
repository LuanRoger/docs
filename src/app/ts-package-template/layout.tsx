import { RootProvider } from "fumadocs-ui/provider/next";
import { mountRoute } from "@/lib/utils/route";

export default function Layout({
  children,
}: LayoutProps<"/ts-package-template">) {
  return (
    <RootProvider
      search={{
        options: {
          api: mountRoute("/ts-package-template", "/api/search"),
        },
      }}
      theme={{
        enabled: false,
        defaultTheme: "dark",
      }}
    >
      {children}
    </RootProvider>
  );
}
