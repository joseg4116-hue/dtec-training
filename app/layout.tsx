import type { Metadata } from "next";
import { Geist } from "next/font/google";
import IntroSplash from "@/components/IntroSplash";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTEC Training",
  description: "DTEC Stormwater & Erosion Control Training Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <IntroSplash />
        {children}
      </body>
    </html>
  );
}
