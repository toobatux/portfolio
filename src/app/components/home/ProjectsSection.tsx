import Image, { StaticImageData } from "next/image";
import "../../globals.css";
import BackBlog from "/public/backblog.png";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";

import Link from "next/link";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Info from "@mui/icons-material/Info";
import { Watch } from "@mui/icons-material";
import Project from "./Project";

interface ProjectsSectionProps {
  setBackground: (color: string) => void;
}

export default function ProjectsSection({
  setBackground,
}: ProjectsSectionProps) {
  return (
    <>
      <div className="w-full rounded-xl mb-12">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold text-neutral-100 mb-4">
            Projects
          </div>
          <Link
            href="/projects/"
            className="flex items-end hover:underline text-white"
            prefetch={false}
          >
            <div className="font-semibold text-neutral-200 mb-4">See more</div>
          </Link>
        </div>
        <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 text-neutral-200 font-semibold flex items-center">
          <Info className="me-2" /> This section is in development
        </div>
        {/* <hr className="my-4 border-white/10" /> */}
        <Project
          setBackground={setBackground}
          link="/projects/backblog"
          bgColor="bg-[#1c5bbe]"
          src={BackBlog}
          alt="BackBlog"
          title="BackBlog"
          description="A collaborative movie playlisting app"
          tools={["Kotlin", "Compose", "Swift", "SwiftUI"]}
        />
        <Project
          setBackground={setBackground}
          link="/projects/goyangi"
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
          bgColor="bg-[#348ad1]"
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
