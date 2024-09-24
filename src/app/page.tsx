"use client";
import { useState } from "react";
import Image from "next/image";
import ProfileSidebar from "./components/ProfileSidebar";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Contact from "./components/Contact";
import Alert from "./components/Alert";
import About from "./components/About";
import Skills from "./components/Skills";
import Song from "./components/Song";
import ScrollTop from "./components/ScrollTop";

export default function Home() {
  const [background, setBackground] = useState("bg-slate-800");
  return (
    <>
      <div
        className={`absolute inset-0 ${background} bg-[size:20px_20px] opacity-20 blur-[100px] transition-colors duration-500`}
      ></div>
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col items-center justify-between md:p-8">
          <div className="z-10 w-full max-w-7xl justify-between text-sm md:flex h-full">
            {/* Left Column */}
            <div className="flex flex-col md:w-1/2 h-full m-4">
              <div className="animate-slidein [--slidein-delay:500ms] opacity-0">
                <ProfileSidebar />
                <About />
                <Contact />
              </div>
              <div className="animate-slidein [--slidein-delay:800ms] opacity-0">
                <Skills />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col md:w-1/2 h-full m-4">
              <div className="animate-slidein [--slidein-delay:1100ms] opacity-0">
                <ProjectsSidebar setBackground={setBackground} />
              </div>
              <div className="animate-slidein [--slidein-delay:1400ms] opacity-0">
                <Song setBackground={setBackground} />
                <div className="md:hidden">
                  <div className="flex items-center justify-center py-8">
                    <ScrollTop />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
