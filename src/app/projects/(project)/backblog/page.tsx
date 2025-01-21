"use client";
import BackBlogPic from "/public/backblogWide.png";
import GoyangiPic from "/public/goyangi.jpg";
import WatchTowerPic from "/public/watchtower.jpg";
import Overview from "@/app/components/projects/backblog/Overview";
import System from "@/app/components/projects/backblog/System";
import Header from "@/app/components/projects/Header";
import ScrollTop from "@/app/components/home/ScrollTop";
import Responsibilities from "@/app/components/projects/backblog/Responsibilities";
import UIOverview from "@/app/components/projects/backblog/UIOverview";
import UICont from "@/app/components/projects/backblog/UICont";
import OtherProjects from "@/app/components/projects/backblog/OtherProjects";
import Progression from "@/app/components/projects/backblog/Progression";
import Links from "@/app/components/projects/backblog/Links";
import ProjectSidebar from "@/app/components/projects/ProjectSidebar";
import SectionSidebar from "@/app/components/projects/SectionSidebar";
import Image from "next/image";
import Motivation from "@/app/components/projects/backblog/Motivation";
import Conclusion from "@/app/components/projects/backblog/Conclusion";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "links", title: "Links" },
  { id: "motivation", title: "Motivation" },
  { id: "system", title: "System" },
  { id: "responsibilities", title: "Responsibilities" },
  { id: "ui", title: "User Interface" },
  { id: "concl", title: "Conclusion" },
];

const projects = [
  {
    img: GoyangiPic,
    title: "Goyangi",
    tagLine: "A social network for cat photos",
    link: "/projects/goyangi",
  },
  {
    img: WatchTowerPic,
    title: "WatchTower",
    tagLine: "A security camera livestream",
    link: "/projects/watchtower",
  },
];

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
      {/* <aside className="hidden p-4 md:flex md:justify-center md:flex-none w-48">
        <div className="fixed w-40">
          <SectionSidebar sections={sections} />
        </div>
      </aside> */}
      <div className="flex flex-col w-full m-4 md:m-12 lg:my-4 lg:mx-12">
        <Header
          title="BackBlog: A Collaborative Movie Tracker for iOS and Android"
          year="2023 - 2024"
          image={BackBlogPic}
          tools={tools}
          background="bg-[#3B414C]"
        />

        <div className="text-white/55 space-y-14">
          <div className="mt-12">
            <div id="overview">
              <Overview />
            </div>
          </div>
          <div className="mt-12">
            <div id="links">
              <Links />
            </div>
          </div>
          <div className="mt-12">
            <div id="motivation">
              <Motivation />
            </div>
          </div>
          <div className="mb-6">
            <div id="system">
              <System />
            </div>
          </div>
          <div className="mb-6">
            <div id="responsibilities">
              <Responsibilities />
            </div>
          </div>
          <div className="mb-6">
            <div id="ui">
              <UIOverview />
            </div>
          </div>
          <div className="mb-6">
            <div id="concl">
              <Conclusion />
            </div>
          </div>
        </div>

        <div className="mt-[10rem]">
          {/* <OtherProjects /> */}
          <ProjectSidebar projects={projects} />
        </div>
        <div className="flex items-center justify-center my-12">
          <ScrollTop />
        </div>
      </div>
      {/* <aside className="hidden p-4 lg:flex lg:justify-center lg:flex-none w-48">
        <div className="fixed w-40">
          <div className="w-full flex flex-col justify-between">
            <SectionSidebar sections={sections} />
            <div className="mt-auto">
              <ScrollTop />
            </div>
          </div>
        </div>
      </aside> */}
      <aside className="hidden lg:flex lg:justify-center lg:flex-none w-48">
        <div className="fixed w-40">
          <div className="w-full flex flex-col">
            {/* Section Sidebar */}
            <SectionSidebar sections={sections} />
          </div>

          {/* ScrollTop fixed at the bottom of the screen */}
          <div className="fixed bottom-10">
            <ScrollTop />
          </div>
        </div>
      </aside>
    </>
  );
}
