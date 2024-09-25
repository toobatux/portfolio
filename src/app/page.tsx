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
import Link from "next/link";

export default function Home() {
  const [background, setBackground] = useState("bg-slate-800");
  return (
    <>
      <div
        className={`absolute inset-0 ${background} bg-[size:20px_20px] opacity-20 blur-[100px] transition-colors duration-500`}
      ></div>
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col items-center justify-between md:px-8 md:pt-8">
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
          <div className="w-full max-w-7xl px-4">
            <hr className="border-white/10" />
            <div className="m-4 p-1">
              <Link
                href="https://github.com/toobatux/portfolio"
                target="_blank"
                className="inline-block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-neutral-200"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
