import Header from "@/app/components/projects/Header";
import StudyPalPic from "/public/chingu2.png";
import SectionSidebar from "@/app/components/projects/SectionSidebar";
import ScrollTop from "@/app/components/home/ScrollTop";
import Overview from "@/app/components/projects/backblog/Overview";
import Alert from "@/app/components/home/Alert";

const sections = [{ id: "overview", title: "Overview" }];

const StudyPal = () => {
  const tools = ["React", "TypeScript", "Tailwind", "Next.js"];
  return (
    <>
      <div className="flex flex-col w-full m-4 lg:mx-12">
        <div className="mb-6">
          <Alert />
        </div>
        <Header
          title="StudyPal: An Educational Platform"
          year="2024"
          image={StudyPalPic}
          tools={tools}
          background="bg-neutral-900"
        />

        <div className="text-white/55 space-y-14 mb-12">
          <div className="mt-12">
            <div id="overview">
              <Overview />
            </div>
          </div>
          <div className="mt-12">
            <div id="overview">
              <Overview />
            </div>
          </div>
        </div>
      </div>
      <aside className="hidden lg:flex lg:justify-center lg:flex-none w-48">
        <div className="fixed w-40">
          <div className="w-full flex flex-col">
            {/* Section Sidebar */}
            <SectionSidebar sections={sections} />
          </div>

          {/* ScrollTop fixed at the bottom of the screen */}
          <div className="fixed bottom-10">
            <ScrollTop />
          </div>
        </div>
      </aside>
    </>
  );
};

export default StudyPal;
