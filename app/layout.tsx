import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: { default: "Lumen Coffee", template: "%s · Lumen Coffee" },
  description: "Full cafe website: menu, coffee, food, beans, catering, private hire, hours, and a visit page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
