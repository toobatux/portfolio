import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Visibility } from "@mui/icons-material";

// const inter = Cabin({ weight: ["400", "700"], subsets: ["latin"] });
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>
        <script>0</script>
        <div className="relative min-h-screen min-w-full bg-neutral-900">
          {children}
        </div>
      </body>
    </html>
  );
}
