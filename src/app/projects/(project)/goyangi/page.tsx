import Header from "@/app/components/projects/Header";
import GoyangiPic from "/public/goyangi.jpg";
import Overview from "@/app/components/projects/goyangi/Overview";
import System from "@/app/components/projects/goyangi/System";

export default function Goyangi() {
  const tools = ["Django", "Python", "Bootstrap", "SQLite"];
  return (
    <>
      <div className="mb-6">
        <Header
          title={"Goyangi"}
          background="bg-neutral-600"
          image={GoyangiPic}
          tools={tools}
        />
      </div>
      <div className="mb-6">
        <Overview />
      </div>
      {/* <div className="mb-6">
        <System />
      </div> */}
    </>
  );
}
