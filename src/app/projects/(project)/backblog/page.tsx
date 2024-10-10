"use client";
import BackBlogPic from "/public/backblog.png";
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

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
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
        <OtherProjects />
      </div>

      <div className="flex items-center justify-center my-12">
        <ScrollTop />
      </div>
    </>
  );
}
