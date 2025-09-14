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
import Gradient from "../../public/gradient.jpg";
import Expand from "./components/Expand";
import HomeProjects from "./components/HomeProjects";

export default function Home() {
  return (
    <>
      {/* <div className="absolute inset-0 z-0 bg-grad h-[40rem] opacity-80"></div> */}
      {/* <div className="fixed top-0 z-[0] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="h-full w-full">
        {/* <Test /> */}
        {/* <Navbar /> */}
        <main className="">
          {/* <div className="fixed top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

          <div className="flex w-full h-[85vh]">
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#0d0d0d_1px,transparent_1px),linear-gradient(to_bottom,#0d0d0d_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
            <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="flex w-full items-center max-w-7xl mx-auto text-sm z-0">
              <div className="flex w-full">
                <div className="flex w-full items-center px-8 lg:px-12 mb-0 transition-all">
                  <ProfileCard isOpenToWork={false} />
                </div>
              </div>
            </div>
          </div>
          <hr className="flex w-full border-t border-white/10" />
          <div className="flex flex-col w-full max-w-7xl mx-auto px-8 md:px-12">
            <div className="flex flex-col lg:flex-row w-full h-full bg-black z-20 pt-12 pb-36 gap-20">
              <div id="info" className="flex flex-col w-full lg:w-1/2">
                <div className="flex justify-between mb-8 items-end">
                  <h1 className="font-semibold text-2xl">Projects</h1>
                  <Link
                    href="/work"
                    className="flex text-primary hover:underline"
                  >
                    View all
                  </Link>
                </div>
                <HomeProjects />
              </div>

              <div id="info" className="flex flex-col w-full lg:w-1/2">
                {/* <div className="flex justify-between mb-8">
                  <h1 className="font-semibold text-2xl">Notes</h1>
                  <Link
                    href="/work"
                    className="flex h-full items-end text-primary hover:underline"
                  >
                    View all
                  </Link>
                </div>
                <HomeProjects /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
