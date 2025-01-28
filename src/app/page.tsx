"use client";
import ProfileCard from "./components/ProfileCard";
import Contact from "./components/Contact";
import Link from "next/link";
import ProjectsSection from "./components/ProjectsSection";
import SongSection from "./components/SongSection";
import Footer from "./components/Footer";
import Book from "./components/Book";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        {/* h-[35rem] */}
        <div className="absolute inset-0 z-0 bg-grad h-[40rem] opacity-80"></div>
        {/* pt-[12rem] md:pt-[15rem] pb-[10rem] */}
        {/* <div className="fixed top-0 z-[0] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      </div>
      <div className="relative h-full w-full z-10">
        <main className="flex min-h-screen flex-col justify-between items-center md:px-8 md:pt-8">
          <div className="z-10 w-full max-w-6xl justify-between text-sm h-full">
            <div className="flex py-[12rem] md:py-[16rem] items-center px-6">
              <div className="animate-slidein [--slidein-delay:200ms] opacity-0">
                <div className="mb-12">
                  <ProfileCard isOpenToWork={true} />
                </div>
                <Contact />
              </div>
            </div>

            <div className="animate-slidein [--slidein-delay:400ms] opacity-0 overflow-x-hidden">
              <div className="flex flex-wrap lg:flex-nowrap p-6 gap-4 mb-[5rem] w-full h-full">
                <div className="lg:w-1/2 w-full flex flex-col justify-between max-w-full">
                  <TechStack />
                </div>
                <div className="lg:w-1/2 w-full flex flex-col gap-4 h-full max-w-full">
                  <Book />
                  <SongSection />
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="animate-slidein [--slidein-delay:600ms] opacity-0">
                <div className="flex justify-between mb-8">
                  <div className="text-2xl font-semibold text-neutral-100 flex items-center">
                    Projects
                  </div>
                  <Link
                    href="/projects/"
                    className="flex text-white rounded-full hover:text-black hover:bg-white border-2 border-white/10 px-4 py-2 transition-all duration-300"
                    prefetch={false}
                  >
                    All projects
                  </Link>
                </div>
                <ProjectsSection />
                <div className="flex items-center justify-center mt-8 mb-12">
                  <Link
                    href="/projects/"
                    className="text-white rounded-full hover:text-black hover:bg-white border-2 border-white/10 px-4 py-2 transition-all duration-300"
                    prefetch={false}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
