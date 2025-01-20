"use client";
import { useState } from "react";
import Navbar from "../components/projects/Navbar";
import Foodbank from "/public/foodbank.png";
import Project from "../components/home/Project";
import Footer from "../components/home/Footer";
import ProjectsSection from "../components/home/ProjectsSection";

export default function Projects() {
  const [background, setBackground] = useState("bg-black");
  return (
    <>
      <div
        className={`absolute inset-0 ${background} bg-[size:20px_20px] bg-opacity-15 transition-colors duration-500`}
      >
        <div className="absolute inset-0 bg-grad h-[15rem] opacity-50"></div>
      </div>
      <Navbar />
      <div className="relative h-full w-full">
        <div className="flex min-h-screen flex-col justify-between items-center">
          <div className="z-10 w-full max-w-6xl justify-between text-sm h-full my-16 px-6">
            <div className="text-2xl text-neutral-100 font-bold mb-4">
              Projects
            </div>
            <ProjectsSection setBackground={() => {}} />
            <Project
              date="2022"
              link=""
              src={Foodbank}
              alt="SVC Foodbank"
              title="SVC Foodbank"
              description="A foodbank website for hosting events"
              tools={["C#", "ASP.NET Core", "Razor Pages", "Bootstrap"]}
              isDisabled={true}
              background="bg-black"
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
