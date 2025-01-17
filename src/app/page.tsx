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
import Book from "./components/home/Book";

export default function Home() {
  const [background, setBackground] = useState("bg-black");
  return (
    <>
      <div className={`${background}`}>
        {/* h-[35rem] */}
        <div className="absolute inset-0 bg-grad h-screen opacity-80"></div>
      </div>
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col justify-between items-center md:px-8 md:pt-8">
          <div className="z-10 w-full max-w-6xl justify-between text-sm h-full">
            {/* Left Column */}
            <div className="m-6 pt-[10rem] md:pt-[13rem] pb-20">
              <div className="animate-slidein [--slidein-delay:200ms] opacity-0">
                <div className="mb-12">
                  <ProfileCard isOpenToWork={true} location="Pittsburgh, PA" />
                </div>
                <Contact />
              </div>
              {/* <div className="animate-slidein [--slidein-delay:800ms] opacity-0">
                <Skills />
              </div> */}
            </div>

            <div className="animate-slidein [--slidein-delay:400ms] opacity-0 overflow-x-hidden">
              <div className="flex flex-wrap lg:flex-nowrap p-6 gap-4 mb-12 w-full h-full">
                <div className="lg:w-1/2 w-full flex flex-col justify-between max-w-full">
                  <About />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col gap-4 h-full max-w-full">
                  <Book />
                  <SongSection />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-6">
              <div className="animate-slidein [--slidein-delay:600ms] opacity-0">
                <ProjectsSection setBackground={setBackground} />
              </div>
              {/* <div className="animate-slidein [--slidein-delay:1400ms] opacity-0">
                <SongSection setBackground={setBackground} />
              </div> */}
            </div>
          </div>
          {/* <div className="">
            <div className="flex items-center justify-center mt-6 mb-12">
              <ScrollTop />
            </div>
          </div> */}

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
}
