"use client";
import Header from "@/app/components/projects/Header";
import WatchTowerPic from "/public/watchtower.jpg";
import BackBlogPic from "/public/backblog.png";
import GoyangiPic from "/public/goyangi.jpg";
import Overview from "@/app/components/projects/goyangi/Overview";
import ProjectSidebar from "@/app/components/projects/ProjectSidebar";
import ScrollTop from "@/app/components/home/ScrollTop";
import SectionSidebar from "@/app/components/projects/SectionSidebar";
import Demo from "@/app/components/projects/goyangi/Demo";
import Links from "@/app/components/projects/goyangi/Links";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "demo", title: "Demo Video" },
];

const projects = [
  {
    img: BackBlogPic,
    title: "BackBlog",
    tagLine: "A collaborative movie playlisting app",
    link: "/projects/backblog",
  },
  {
    img: WatchTowerPic,
    title: "WatchTower",
    tagLine: "A security camera livestream",
    link: "",
  },
];

export default function Goyangi() {
  const tools = ["Django", "Python", "Bootstrap", "SQLite"];
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
            title={"Goyangi"}
            background="bg-neutral-600"
            image={GoyangiPic}
            tools={tools}
          />
        </div>
        <div className="mb-4">
          <Links />
        </div>
        <div className="mb-6">
          <div id="overview">
            <Overview />
          </div>
        </div>
        <div className="mb-6">
          <div id="demo">
            <Demo />
          </div>
        </div>
        <div className="lg:hidden">
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
