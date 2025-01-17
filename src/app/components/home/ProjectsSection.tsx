import "../../globals.css";
import Chingu from "/public/chingu2.png";
import BackBlog from "/public/backblogPhone2-2.png";
import Goyangi from "/public/goyangi3.png";
import WatchTower from "/public/watchtowerFinal.png";

import Link from "next/link";
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
        {/* <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 text-neutral-200 font-semibold flex items-center">
          <Info className="me-2" /> This section is in development
        </div> */}
        {/* <hr className="my-4 border-white/10" /> */}
        <Project
          date="2024"
          link="/projects/backblog"
          src={Chingu}
          alt="StudyPal"
          title="StudyPal"
          description="An educational web app with flashcards and guides"
          tools={["React", "TypeScript", "Tailwind", "Next.js"]}
        />
        <Project
          date="2023-2024"
          link="/projects/backblog"
          src={BackBlog}
          alt="BackBlog"
          title="BackBlog"
          description="A collaborative movie playlisting app"
          tools={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
        />
        <Project
          date="2024"
          link="/projects/goyangi"
          src={Goyangi}
          alt="Goyangi"
          title="Goyangi"
          description="A social network for cat photos"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
        />
        <Project
          date="2023-2024"
          link="/projects/watchtower"
          src={WatchTower}
          alt="WatchTower"
          title="WatchTower"
          description="A security camera live-stream"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
        />
        <div className="flex items-center justify-center mt-10">
          <Link
            href="/projects/"
            className="inline-block text-white rounded-full hover:text-black hover:bg-white border-2 border-white/10 px-4 py-2 transition-all duration-300"
            prefetch={false}
          >
            See more
          </Link>
        </div>
      </div>
    </>
  );
}
