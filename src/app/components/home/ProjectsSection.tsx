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
      <div className="w-full rounded-xl">
        {/* <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 text-neutral-200 font-semibold flex items-center">
          <Info className="me-2" /> This section is in development
        </div> */}
        {/* <hr className="my-4 border-white/10" /> */}
        <Project
          date="2024"
          link="/projects/studypal"
          src={Chingu}
          alt="StudyPal"
          title="StudyPal"
          description="An educational web app with flashcards and guides"
          tools={["React", "TypeScript", "Tailwind", "Next.js"]}
          isDisabled={false}
          background="bg-[#171717]"
        />
        <Project
          date="2023-2024"
          link="/projects/backblog"
          src={BackBlog}
          alt="BackBlog"
          title="BackBlog"
          description="A collaborative movie playlisting app"
          tools={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
          isDisabled={false}
          background="bg-[#3B414C]"
        />
        <Project
          date="2024"
          link="/projects/goyangi"
          src={Goyangi}
          alt="Goyangi"
          title="Goyangi"
          description="A social network for cat photos"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
          isDisabled={false}
          background="bg-[#101010]"
        />
        <Project
          date="2023-2024"
          link="/projects/watchtower"
          src={WatchTower}
          alt="WatchTower"
          title="WatchTower"
          description="A security camera live-stream"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
          isDisabled={false}
          background="bg-[#0A0A0A]"
        />
      </div>
    </>
  );
}
