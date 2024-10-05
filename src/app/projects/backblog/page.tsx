import TitleCard from "@/app/components/projects/TitleCard";
import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import BackBlogPic from "/public/backblog.png";
import LandingPage from "/public/LandingPage.png";
import LogPage from "/public/LogPage.png";
import Overview from "@/app/components/projects/backblog/Overview";
import System from "@/app/components/projects/backblog/System";
import Background from "@/app/components/projects/backblog/Background";
import Header from "@/app/components/projects/backblog/Header";

export default function BackBlog() {
  const tools = ["Kotlin", "Compose", "Swift", "Swift UI"];
  return (
    <>
      <Header tools={tools} />
      <div className="animate-slidein [--slidein-delay:800ms] opacity-0">
        <Overview />
      </div>
      <div className="animate-slidein [--slidein-delay:1000ms] opacity-0">
        <System />
      </div>

      <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300 mb-8">
        <div className="text-2xl font-semibold text-gray-200 mb-4">
          User Interface
        </div>
        <p className="block">
          This project was created by a group of four students over the course
          of an academic year as a senior capstone project.
        </p>
        <div className="flex justify-center max-h-[45rem] mb-4">
          <div className="grid grid-cols-2 space-x-1 lg:space-x-8 my-4">
            <div>
              <div className="flex max-w-64 h-full">
                <Image src={LandingPage} alt="Landing Page" />
              </div>
              <p className="flex justify-center mt-2">Home Page</p>
            </div>
            <div>
              <div className="flex max-w-64 h-full">
                <Image src={LogPage} alt="Landing Page" />
              </div>
              <p className="flex justify-center mt-2">Log Page</p>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-slidein [--slidein-delay:1200ms] opacity-0">
        <Background />
      </div>
    </>
  );
}
