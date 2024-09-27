import Image, { StaticImageData } from "next/image";
import "../../globals.css";
import ProjectListing from "./ProjectListing";
import BackBlog from "/public/backblog.png";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";

import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Info from "@mui/icons-material/Info";
import { Watch } from "@mui/icons-material";

interface ProjectsSectionProps {
  setBackground: (color: string) => void;
}

export default function ProjectsSection({
  setBackground,
}: ProjectsSectionProps) {
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
        <Project
          setBackground={setBackground}
          link="/backblog"
          bgColor="bg-blue-800"
          src={BackBlog}
          alt="BackBlog"
          title="BackBlog"
          description="A collaborative movie playlisting app"
          tools={["Kotlin", "Compose", "Swift", "SwiftUI"]}
        />
        <Project
          setBackground={setBackground}
          link=""
          bgColor="bg-gray-600"
          src={Goyangi}
          alt="Goyangi"
          title="Goyangi"
          description="A social network for cat photos"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
        />
        <Project
          setBackground={setBackground}
          link=""
          bgColor="bg-blue-600"
          src={WatchTower}
          alt="WatchTower"
          title="WatchTower"
          description="A security camera live-stream"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
        />
      </div>
    </>
  );
}

interface ProjectProps {
  setBackground: (color: string) => void;
  link: string;
  bgColor: string;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  tools: string[];
}

const Project = ({
  setBackground,
  link,
  bgColor,
  src,
  alt,
  title,
  description,
  tools,
}: ProjectProps) => {
  return (
    <Link href={link} prefetch={false}>
      <div
        className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
        onMouseEnter={() => setBackground(bgColor)}
        onMouseLeave={() => setBackground("bg-slate-800")}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full mb-5">
            {/* Project Image */}
            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>

            {/* Title and Subtitle */}
            <div className="flex flex-col w-full">
              <p className="block text-gray-200 text-lg font-bold">{title}</p>
              <p className=" block text-gray-300">{description}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex py-1 items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
