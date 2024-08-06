import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../@/lib/utils";
import "./globals.css";
import { MainNav } from "@/components/ui/navigation-menu";
import { icons } from "lucide-react";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Andrew Patterson",
  description: "Andrew Patterson's website of marketable skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <MainNav />
        <div className="pt-10 px-10 h-full w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
