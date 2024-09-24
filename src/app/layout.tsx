import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const inter = Cabin({ weight: ["400", "700"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tom Krusinski",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen w-full bg-neutral-900">
          {children}
        </div>
      </body>
    </html>
  );
}
