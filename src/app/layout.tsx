import { cn } from "@/lib/cn";
import "./global.css";
import { Geist, Pixelify_Sans } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixelify",
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={cn(geist.className, pixelify.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
