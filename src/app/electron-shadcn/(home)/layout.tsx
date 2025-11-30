import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseLayoutProps } from "../layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseLayoutProps()}>
      <div className="flex size-full flex-1 flex-col p-4">{children}</div>
    </HomeLayout>
  );
}
