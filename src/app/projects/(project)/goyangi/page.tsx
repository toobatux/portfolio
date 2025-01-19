"use client";
import Header from "@/app/components/projects/Header";
import WatchTowerPic from "/public/watchtower.jpg";
import BackBlogPic from "/public/backblog.png";
import GoyangiPic from "/public/goyangi3.png";
import Overview from "@/app/components/projects/goyangi/Overview";
import ProjectSidebar from "@/app/components/projects/ProjectSidebar";
import ScrollTop from "@/app/components/home/ScrollTop";
import SectionSidebar from "@/app/components/projects/SectionSidebar";
import Demo from "@/app/components/projects/goyangi/Demo";
import Links from "@/app/components/projects/goyangi/Links";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "links", title: "Links" },
  { id: "demo", title: "Demo Video" },
];

const projects = [
  {
    img: WatchTowerPic,
    title: "WatchTower",
    tagLine: "A security camera livestream",
    link: "/projects/watchtower",
  },
  {
    img: BackBlogPic,
    title: "BackBlog",
    tagLine: "A collaborative movie playlisting app",
    link: "/projects/backblog",
  },
];

export default function Goyangi() {
  const tools = ["Django", "Python", "Bootstrap", "SQLite"];
  return (
    <>
      <div className="flex flex-col max-w-[50rem] w-full m-4 lg:mx-12">
        <div className="text-white/55 space-y-14 mb-12">
          <div className="mb-4">
            <Header
              title={"Goyangi: A Social Network for Cat Photos"}
              year="2024"
              image={GoyangiPic}
              tools={tools}
              background="bg-neutral-600"
            />
          </div>
          <div className="mb-6">
            <div id="overview">
              <Overview />
            </div>
          </div>
          <div className="mb-6">
            <div id="links">
              <Links />
            </div>
          </div>
          <div className="mb-6">
            <div id="demo">
              <Demo />
            </div>
          </div>
        </div>
        <div className="my-12">
          {/* <OtherProjects /> */}
          <ProjectSidebar projects={projects} />
        </div>

        <div className="flex items-center justify-center my-12">
          <ScrollTop />
        </div>
      </div>
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
