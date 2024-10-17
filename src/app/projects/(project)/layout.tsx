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
      <div
        className={`absolute inset-0 bg-slate-800 bg-[size:20px_20px] bg-opacity-15 transition-colors duration-500`}
      ></div>
      <div className="relative min-h-screen flex flex-col lg:pt-8">
        <div className="flex flex-grow justify-center">
          <div className="flex w-full max-w-[80rem] justify-center">
            <div className="flex flex-grow justify-center">{children}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
}
