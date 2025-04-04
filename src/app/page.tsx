import ProfileCard from "./components/ProfileCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import InfoBento from "./components/InfoBento";
import { ArrowDownward, ArrowForward, ArrowOutward } from "@mui/icons-material";
import Link from "next/link";
import Test from "./components/Test";
import Navbar from "./components/Navbar";
import Image from "next/image";
import BackBlog from "./components/BackBlog";
import Book from "./components/Book";
import SongSection from "./components/SongSection";
import TechStack from "./components/TechStack";
import Expand from "./components/Expand";

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-black">
        {/* h-[35rem] */}
        <div className="absolute inset-0 z-0 bg-grad h-[40rem] opacity-80"></div>
        {/* pt-[12rem] md:pt-[15rem] pb-[10rem] */}
        {/* <div className="fixed top-0 z-[0] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      </div>
      <div className="h-full w-full">
        <Test />
        <main className="flex min-h-screen flex-col items-center">
          {/* <div className="w-full z-10 justify-center md:px-8 md:pt-8 transition-all"> */}
          <div className="w-full max-w-6xl mx-auto justify-between text-sm h-full">
            <div className="flex items-center px-8 md:px-12 mb-0 h-screen md:pb-2 transition-all">
              <div className="relative flex flex-col w-full justify-between">
                <ProfileCard isOpenToWork={false} />
              </div>
              <Expand />
            </div>

            <div id="info" className="pt-10">
              <InfoBento />
            </div>
          </div>
          {/* </div> */}

          <div
            id="work"
            className="z-10 w-full justify-between text-sm h-full mt-28 mb-12 md:pt-8 transition-all"
          >
            <div className="w-full max-w-6xl mx-auto">
              {/* <div className="animate-slidein [--slidein-delay:400ms] opacity-0 overflow-x-hidden"> */}
              {/* </div> */}
              <ProjectSection />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
