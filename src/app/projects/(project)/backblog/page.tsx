"use client";
import BackBlogPic from "/public/backblog.png";
import GoyangiPic from "/public/goyangi.jpg";
import WatchTowerPic from "/public/watchtower.jpg";
import Overview from "@/app/components/projects/backblog/Overview";
import System from "@/app/components/projects/backblog/System";
import Background from "@/app/components/projects/backblog/Background";
import Header from "@/app/components/projects/Header";
import ScrollTop from "@/app/components/home/ScrollTop";
import Responsibilities from "@/app/components/projects/backblog/Responsibilities";
import UIOverview from "@/app/components/projects/backblog/UIOverview";
import UICont from "@/app/components/projects/backblog/UICont";
import OtherProjects from "@/app/components/projects/backblog/OtherProjects";
import Progression from "@/app/components/projects/backblog/Progression";
import Links from "@/app/components/projects/backblog/Links";
import ProjectSidebar from "@/app/components/projects/ProjectSidebar";

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
    link: "",
  },
];

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
      <div className="flex flex-col max-w-[50rem] w-full m-4">
        <div className="mb-6">
          <Header
            title={"BackBlog"}
            tagLine="Movies for Everyone"
            background="bg-blue-800"
            image={BackBlogPic}
            tools={tools}
          />
          <Links />
        </div>
        <div className="mb-6">
          <Overview />
        </div>
        <div className="mb-6">
          <System />
        </div>

        <div className="mb-6">
          <UIOverview />
        </div>

        <div className="mb-6">
          <Background />
        </div>

        <div className="mb-6">
          <Responsibilities />
        </div>

        <div className="mb-6">
          <UICont />
        </div>

        <div className="mb-6">
          <Progression />
        </div>

        <div className="lg:hidden">
          {/* <OtherProjects /> */}
          <ProjectSidebar projects={projects} />
        </div>

        <div className="flex items-center justify-center my-12">
          <ScrollTop />
        </div>
      </div>
      <aside className="hidden p-4 lg:flex lg:justify-center lg:flex-none w-48">
        <div className="fixed w-40">
          <ProjectSidebar projects={projects} />
        </div>
      </aside>
    </>
  );
}
