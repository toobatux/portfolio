import Image from "next/image";
import "../globals.css";
import ProjectListing from "./ProjectListing";
import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

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
        {/* <hr className="my-4 border-white/10" /> */}

        <Link href="/backblog">
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
                    src="/backblog.png"
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

        <Link href="">
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
                    src="/goyangi.png"
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
        <Link href="">
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
                    src="/watchtower.png"
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
