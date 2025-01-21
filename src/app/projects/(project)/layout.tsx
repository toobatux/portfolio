"use client";
import Image from "next/image";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";
import Navbar from "../../components/projects/Navbar";
import Link from "next/link";
import ScrollTop from "../../components/home/ScrollTop";
import Footer from "@/app/components/home/Footer";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script>0</script>
      <Navbar />
      <div className="bg-neutral-950"></div>
      <div className="relative min-h-screen flex flex-col lg:pt-8">
        <div className="flex justify-center">
          <div className="flex w-full justify-center">
            <div className="flex justify-center max-w-6xl">{children}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
