"use client";
import { useState } from "react";
import Navbar from "../components/projects/Navbar";
import BackBlog from "/public/backblogPhone2-2.png";
import Goyangi from "/public/goyangi3.png";
import WatchTower from "/public/watchtowerFinal.png";
import Foodbank from "/public/foodbank.png";
import Project from "../components/home/Project";
import Footer from "../components/home/Footer";

export default function Projects() {
  const [background, setBackground] = useState("bg-black");
  return (
    <>
      <div
        className={`absolute inset-0 ${background} bg-[size:20px_20px] bg-opacity-15 transition-colors duration-500`}
      >
        <div className="absolute inset-0 bg-grad h-[35rem] opacity-20"></div>
      </div>
      <Navbar />
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col justify-between items-center md:px-8 md:pt-8">
          <div className="z-10 w-full max-w-6xl justify-between text-sm h-full">
            {/* Left Column */}
            <div className="m-4">
              <div className="text-2xl text-neutral-100 font-bold mb-4">
                Projects
              </div>
              <Project
                date=""
                link="/projects/backblog"
                src={BackBlog}
                alt="BackBlog"
                title="BackBlog"
                description="A collaborative movie playlisting app"
                tools={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
              />
              <Project
                date=""
                link="/projects/goyangi"
                src={Goyangi}
                alt="Goyangi"
                title="Goyangi"
                description="A social network for cat photos"
                tools={["Django", "Python", "Bootstrap", "SQLite"]}
              />
              <Project
                date=""
                link="/projects/watchtower"
                src={WatchTower}
                alt="WatchTower"
                title="WatchTower"
                description="A security camera live-stream"
                tools={["Django", "Python", "Bootstrap", "SQLite"]}
              />
              <Project
                date=""
                link=""
                src={Foodbank}
                alt="SVC Foodbank"
                title="SVC Foodbank"
                description="A foodbank website for hosting events"
                tools={["C#", "ASP.NET Core", "Razor Pages", "Bootstrap"]}
              />
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

{
  /* <div className="flex min-h-screen flex-col justify-between items-center md:px-8 md:pt-8">
<div className="z-10 max-w-6xl justify-between text-sm h-full m-4">
  <div className="text-2xl text-neutral-100 font-bold mb-4">
    Projects
  </div>
  <Project
    setBackground={setBackground}
    link="/projects/backblog"
    bgColor="bg-[#1c5bbe]"
    src={BackBlog}
    alt="BackBlog"
    title="BackBlog"
    description="A collaborative movie playlisting app"
    tools={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
  />
  <Project
    setBackground={setBackground}
    link="/projects/goyangi"
    bgColor="bg-gray-600"
    src={Goyangi}
    alt="Goyangi"
    title="Goyangi"
    description="A social network for cat photos"
    tools={["Django", "Python", "Bootstrap", "SQLite"]}
  />
  <Project
    setBackground={setBackground}
    link="/projects/watchtower"
    bgColor="bg-[#348ad1]"
    src={WatchTower}
    alt="WatchTower"
    title="WatchTower"
    description="A security camera live-stream"
    tools={["Django", "Python", "Bootstrap", "SQLite"]}
  />
  <Project
    setBackground={setBackground}
    link=""
    bgColor="bg-[#0B5394]"
    src={Foodbank}
    alt="SVC Foodbank"
    title="SVC Foodbank"
    description="A foodbank website for hosting events"
    tools={["C#", "ASP.NET Core", "Razor Pages", "Bootstrap"]}
  />
</div>
<Footer />
</div> */
}
