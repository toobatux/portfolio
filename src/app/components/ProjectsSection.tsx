import "../globals.css";
import Chingu from "/public/chingu2.png";
import BackBlog from "/public/backblogPhone2-2.png";
import Goyangi from "/public/goyangi3.png";
import WatchTower from "/public/watchtowerFinal.png";

import Project from "./Project";

export default function ProjectsSection() {
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
          title="StudyPal: An Educational Platform"
          description="Create or discover flashcard sets and study guides to ace your next exam"
          tools={["React", "TypeScript", "Tailwind", "Next.js"]}
          isDisabled={false}
          background="bg-[#171717]"
        />
        <Project
          date="2023-2024"
          link="/projects/backblog"
          src={BackBlog}
          alt="BackBlog"
          title="BackBlog: A Collaborative Movie Tracker for iOS and Android"
          description="Track which movies have been watched and easily pick what comes next."
          tools={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
          isDisabled={false}
          background="bg-[#3B414C]"
        />
        <Project
          date="2024"
          link="/projects/goyangi"
          src={Goyangi}
          alt="Goyangi"
          title="Goyangi: A Social Network for Cat Photos"
          description="Post photos of your cats, make new friends, and interact with their posts."
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
          isDisabled={false}
          background="bg-[#101010]"
        />
        <Project
          date="2023-2024"
          link="/projects/watchtower"
          src={WatchTower}
          alt="WatchTower"
          title="WatchTower: A Security Camera Livestream"
          description="Stream video from your machine and track motion events"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
          isDisabled={false}
          background="bg-[#0A0A0A]"
        />
      </div>
    </>
  );
}
