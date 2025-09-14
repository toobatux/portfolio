import "../globals.css";

import Project from "./Project";

export default function HomeProjects() {
  return (
    <>
      <div className="w-full grid gap-y-4">
        {/* <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 text-neutral-200 font-semibold flex items-center">
          <Info className="me-2" /> This section is in development
        </div> */}
        {/* <hr className="my-4 border-white/10" /> */}
        <Project
          date="2024"
          link="/work/studypal"
          alt="StudyPal"
          title="StudyPal Educational Platform"
          description="Create or discover flashcard sets and study guides to ace your next exam"
          tools={["React", "TypeScript", "Tailwind", "Next.js"]}
          isDisabled={false}
          background="bg-[#171717]"
        />
        <Project
          date="2023-2024"
          link="/work/backblog"
          alt="BackBlog"
          title="BackBlog Movie Tracker"
          description="Track which movies have been watched and easily pick what comes next."
          tools={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
          isDisabled={false}
          background="bg-[#3B414C]"
        />
        <Project
          date="2024"
          link="/work/goyangi"
          alt="Goyangi"
          title="Goyangi Social Network"
          description="Post photos of your cats, make new friends, and interact with their posts."
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
          isDisabled={false}
          background="bg-[#101010]"
        />
        {/* <Project
          date="2023-2024"
          link="/work/watchtower"
          src={WatchTower}
          alt="WatchTower"
          title="WatchTower: A Security Camera Livestream"
          description="Stream video from your machine and track motion events"
          tools={["Django", "Python", "Bootstrap", "SQLite"]}
          isDisabled={false}
          background="bg-[#0A0A0A]"
        /> */}
      </div>
    </>
  );
}
