"use client";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";
import Navbar from "../../../components/Navbar";
import ScrollTop from "../../../components/ScrollTop";
import Footer from "@/app/components/Footer";
import SectionSidebar from "@/app/(projects)/projects/[projectSlug]/components/SectionSidebar";
import ProjectSidebar from "@/app/(projects)/projects/[projectSlug]/components/ProjectSidebar";

const sections = ["Overview", "Motivation"];

const projects = [
  {
    img: Goyangi,
    title: "Goyangi",
    tagLine: "A social network for cat photos",
    link: "/projects/goyangi",
  },
  {
    img: WatchTower,
    title: "WatchTower",
    tagLine: "A security camera livestream",
    link: "/projects/watchtower",
  },
];

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center lg:pt-8">
        <div className="flex w-full max-w-[68rem]">{children}</div>
      </div>
    </>
  );
}
