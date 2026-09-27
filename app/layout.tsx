import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: { default: "Lumen Coffee", template: "%s · Lumen Coffee" },
  description: "Small cafe template with a drink menu and visit details.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body>{children}</body>
    </html>
  );
}
