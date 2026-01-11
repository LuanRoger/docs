import { RootProvider } from "fumadocs-ui/provider/next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider>
      <div className="flex size-full flex-1 flex-col p-4">{children}</div>
    </RootProvider>
  );
}
