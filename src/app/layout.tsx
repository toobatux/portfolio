import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Inter,
  Roboto,
  Montserrat,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Roboto_Mono,
  Onest,
  Playfair_Display,
} from "next/font/google";
import { Raleway } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Cabin } from "next/font/google";
import "./globals.css";
import { Visibility } from "@mui/icons-material";

const myFont = localFont({
  src: [
    {
      path: "../fonts/GeneralSans/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

// const inter = Cabin({ weight: ["400", "700"], subsets: ["latin"] });
const font = Onest({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
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
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script> */}
        <meta name="theme-color" content="#000000" />
      </head>
      {/* bg-[#191919] */}
      <body className={`${font.className} bg-white dark:bg-black`}>
        <script>0</script>
        <div className="min-h-screen min-w-full">{children}</div>
      </body>
    </html>
  );
}
