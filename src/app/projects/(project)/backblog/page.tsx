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
import SectionSidebar from "@/app/components/projects/SectionSidebar";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "system", title: "System" },
  { id: "ui", title: "User Interface" },
  { id: "background", title: "Background" },
  { id: "responsibilities", title: "Responsibilities" },
  { id: "uicont", title: "UI: Continued" },
  { id: "progression", title: "Progression" },
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
    link: "",
  },
];

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
      <aside className="hidden p-4 md:flex md:justify-center md:flex-none w-48">
        <div className="fixed w-40">
          <SectionSidebar sections={sections} />
        </div>
      </aside>
      <div className="flex flex-col max-w-[50rem] w-full m-4 lg:mx-12">
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
          <div id="overview">
            <Overview />
          </div>
        </div>
        <div className="mb-6">
          <div id="system">
            <System />
          </div>
        </div>

        <div className="mb-6">
          <div id="ui">
            <UIOverview />
          </div>
        </div>

        <div className="mb-6">
          <div id="background">
            <Background />
          </div>
        </div>

        <div className="mb-6">
          <div id="responsibilities">
            <Responsibilities />
          </div>
        </div>

        <div className="mb-6">
          <div id="uicont">
            <UICont />
          </div>
        </div>

        <div className="mb-6">
          <div id="progression">
            <Progression />
          </div>
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
