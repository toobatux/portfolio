import ProfileCard from "./components/ProfileCard";
import Link from "next/link";
import HomeProjects from "./components/HomeProjects";
import name from "./font/nameFont";

export default function Home() {
  return (
    <>
      {/* <div className="absolute inset-0 z-0 bg-grad h-160 opacity-80"></div> */}
      {/* <div className="fixed top-0 z-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="fixed inset-0 z-0 background"></div>
      <div className="flex flex-col w-full h-full pt-26">
          {/* <div className="fixed top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

          <div className="flex w-full h-full min-h-[80vh] items-center">
            {/* <div className="absolute top-0 z-[-2] min-h-screen w-full bg-black">
              <div className="absolute top-0 right-0 left-0 bottom-0 z-5 bg-black/75"></div>

            </div> */}

            <div className="flex w-full h-full items-center max-w-4xl mx-auto text-sm z-0">
              <div className="flex w-full h-full">
                <div className="flex w-full h-full items-center px-8  mb-0 transition-all">
                  <ProfileCard isOpenToWork={false} />
                </div>
              </div>
            </div>

          </div>
          <hr className="flex w-full border-t border-foreground/10" />
          <div className="w-full backdrop-blur z-10">
            <div className="flex flex-col w-full max-w-4xl mx-auto px-8  transition-all">
              <div className="flex flex-col lg:flex-row w-full z-20 py-14 gap-20">
                <div id="info" className="flex flex-col w-full">
                  <div className="flex justify-between mb-8 items-end">
                    <h1 className={`text-xl text-foreground ${name.className}`}>
                      Projects
                    </h1>
                    <Link
                      href="/projects"
                      className="flex text-sm text-foreground/60 hover:underline"
                    >
                      View all
                    </Link>
                  </div>
                  <HomeProjects />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
