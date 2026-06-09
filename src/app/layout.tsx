import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const myFont = localFont({
  src: [
    {
      path: "../fonts/Satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
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
      <body className={`${myFont.className} app-bg text-white`}>
        <script>0</script>
        <Navbar />
        <div className="min-w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
