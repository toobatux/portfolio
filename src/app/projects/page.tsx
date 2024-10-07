"use client";
import { useState } from "react";
import Navbar from "../components/projects/Navbar";
import BackBlog from "/public/backblog.png";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";
import Link from "next/link";
import Info from "@mui/icons-material/Info";
import Project from "../components/home/Project";
import Footer from "../components/home/Footer";

export default function Projects() {
  const [background, setBackground] = useState("bg-slate-800");
  return (
    <>
      <div
        className={`absolute inset-0 ${background} bg-[size:20px_20px] opacity-20 transition-colors duration-500`}
      ></div>
      <Navbar />
      <div className="relative w-full">
        <main className="flex h-[90vh] flex-col items-center justify-between lg:px-8 lg:pt-8">
          <div className="z-10 w-full max-w-7xl justify-center text-sm md:flex">
            {/* Left Column */}
            <div className="flex flex-col md:w-1/2 m-4">
              <div className="w-full">
                <div className="text-2xl font-semibold text-gray-100 mb-4">
                  All Projects
                </div>
                <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 px-3 text-gray-200 font-semibold flex items-center">
                  <Info className="me-2" /> This section is in development
                </div>
                {/* <hr className="my-4 border-white/10" /> */}
                <Project
                  setBackground={setBackground}
                  link="/projects/backblog"
                  bgColor="bg-blue-800"
                  src={BackBlog}
                  alt="BackBlog"
                  title="BackBlog"
                  description="A collaborative movie playlisting app"
                  tools={["Kotlin", "Compose", "Swift", "SwiftUI"]}
                />
                <Project
                  setBackground={setBackground}
                  link=""
                  bgColor="bg-gray-600"
                  src={Goyangi}
                  alt="Goyangi"
                  title="Goyangi"
                  description="A social network for cat photos"
                  tools={["Django", "Python", "Bootstrap", "SQLite"]}
                />
                <Project
                  setBackground={setBackground}
                  link=""
                  bgColor="bg-blue-600"
                  src={WatchTower}
                  alt="WatchTower"
                  title="WatchTower"
                  description="A security camera live-stream"
                  tools={["Django", "Python", "Bootstrap", "SQLite"]}
                />
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
