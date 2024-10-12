"use client";
import { useState } from "react";
import Image from "next/image";
import ProfileCard from "./components/home/ProfileCard";
import Contact from "./components/home/Contact";
import Alert from "./components/home/Alert";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import ScrollTop from "./components/home/ScrollTop";
import Link from "next/link";
import ProjectsSection from "./components/home/ProjectsSection";
import SongSection from "./components/home/SongSection";
import Footer from "./components/home/Footer";

export default function Home() {
  const [background, setBackground] = useState("bg-slate-800");
  return (
    <>
      <div
        className={`absolute inset-0 ${background} bg-[size:20px_20px] bg-opacity-15 transition-colors duration-500`}
      ></div>
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col items-center justify-between lg:px-8 lg:pt-8">
          <div className="z-10 w-full max-w-7xl justify-between text-sm md:flex h-full">
            {/* Left Column */}
            <div className="flex flex-col md:w-1/2 h-full m-4">
              <div className="animate-slidein [--slidein-delay:500ms] opacity-0">
                <ProfileCard isOpenToWork={true} location="Pittsburgh, PA" />
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
                <ProjectsSection setBackground={setBackground} />
              </div>
              <div className="animate-slidein [--slidein-delay:1400ms] opacity-0">
                <SongSection setBackground={setBackground} />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex items-center justify-center mt-6 mb-12">
              <ScrollTop />
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
}
