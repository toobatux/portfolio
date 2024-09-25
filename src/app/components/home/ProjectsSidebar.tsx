import Image from "next/image";
import "../../globals.css";
import ProjectListing from "./ProjectListing";
import BackBlog from "/public/backblog.png";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";

import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Info from "@mui/icons-material/Info";
import { Watch } from "@mui/icons-material";

interface ProjectsSidebarProps {
  setBackground: (color: string) => void;
}

export default function ProjectsSidebar({
  setBackground,
}: ProjectsSidebarProps) {
  return (
    <>
      <div className="w-full rounded-xl mb-12">
        <div className="text-2xl font-semibold text-gray-200 mb-4">
          Projects
        </div>
        <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 px-3 text-gray-200 font-semibold flex items-center">
          <Info className="me-2" /> This section is in development
        </div>
        {/* <hr className="my-4 border-white/10" /> */}

        <Link href="/backblog" prefetch={false}>
          <div
            className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
            onMouseEnter={() => setBackground("bg-blue-800")}
            onMouseLeave={() => setBackground("bg-slate-800")}
          >
            <div className="flex flex-col w-full ">
              <div className="flex items-center w-full mb-5">
                {/* Project Image */}
                <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                  <Image
                    src={BackBlog}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col w-full">
                  <p className="block text-gray-200 text-lg font-bold">
                    BackBlog
                  </p>
                  <p className=" block text-gray-300">
                    A collaborative movie playlisting app
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex py-1 items-center">
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Swift
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  SwiftUI
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Kotlin
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Compose
                </div>
              </div>
            </div>
            {/* <div className="flex items-center h-24">
              <div className="text-gray-300">
                <ArrowOutward />
              </div>
            </div> */}
          </div>
        </Link>

        <Link href="" prefetch={false}>
          <div
            className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
            onMouseEnter={() => setBackground("bg-gray-600")}
            onMouseLeave={() => setBackground("bg-slate-800")}
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full mb-5">
                {/* Project Image */}
                <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                  <Image
                    src={Goyangi}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col w-full">
                  <p className="block text-gray-200 text-lg font-bold">
                    Goyangi
                  </p>
                  <p className=" block text-gray-300">
                    A social network for cat photos
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex py-1 items-center">
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Django
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Python
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Bootstrap
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  SQLite
                </div>
              </div>
            </div>

            {/* <div className="flex items-center h-24">
              <div className="text-gray-300">
                <ArrowOutward />
              </div>
            </div> */}
          </div>
        </Link>
        <Link href="" prefetch={false}>
          <div
            className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
            onMouseEnter={() => setBackground("bg-blue-600")}
            onMouseLeave={() => setBackground("bg-slate-800")}
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full mb-5">
                {/* Project Image */}
                <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                  <Image
                    src={WatchTower}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col w-full">
                  <p className="block text-gray-200 text-lg font-bold">
                    WatchTower
                  </p>
                  <p className=" block text-gray-300">
                    A security camera live-stream
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex py-1 items-center">
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Django
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Python
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  Bootstrap
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5">
                  SQLite
                </div>
              </div>
            </div>

            {/* <div className="flex items-center h-24">
              <div className="text-gray-300">
                <ArrowOutward />
              </div>
            </div> */}
          </div>
        </Link>
      </div>
    </>
  );
}
