import path from "path";
import dynamic from "next/dynamic";
import SectionSidebar from "@/app/(projects)/projects/[projectSlug]/components/SectionSidebar";
import ScrollTop from "@/app/components/ScrollTop";
import ProjectSidebar from "@/app/(projects)/projects/[projectSlug]/components/ProjectSidebar";
import Goyangi from "@/../public/goyangi.jpg";
import WatchTower from "@/../public/watchtower.jpg";

const projects = [
  {
    img: Goyangi,
    title: "Goyangi",
    tagLine: "A social network for cat photos",
    link: "/projects/goyangi",
  },
  {
    img: WatchTower,
    title: "WatchTower",
    tagLine: "A security camera livestream",
    link: "/projects/watchtower",
  },
];

export default async function Page(props: {
  params: Promise<{ projectSlug: string }>;
}) {
  const params = await props.params;
  // const content = await fs.readFile(
  //   path.join(
  //     process.cwd(),
  //     "src/content/projects/",
  //     `${params.projectSlug}.mdx`
  //   ),
  //   "utf-8"
  // );

  const { default: MDXContent, frontmatter } = await import(
    `@/content/projects/${params.projectSlug}.mdx`
  );

  const headings = frontmatter?.headings || [];

  // const data = await compileMDX<{
  //   title: string;
  //   description: string;
  //   headings: [];
  // }>({
  //   source: content,
  //   options: {
  //     parseFrontmatter: true,
  //   },
  //   components: {
  //     Links,
  //     GoyangiLinks,
  //     WTLinks,
  //     Tools,
  //     ImageCap,
  //   },
  // });

  return (
    <>
      <div className="fixed inset-0 bg-background background"></div>
      {/* <div className="flex z-10 w-full max-w-4xl">
        <div className="flex-1 w-full px-8  my-4 transition-all mb-20">
          <div className="article"><MDXContent/></div>
          <div className="mt-40">
            <ProjectSidebar projects={projects} />
          </div>
          <div className="md:hidden flex items-center justify-center my-12">
            <ScrollTop />
          </div>
        </div>
        <aside className="hidden md:block flex-shrink-0 w-48 md:mt-4 relative mb-20">
          <div className="sticky top-[145px] h-[calc(100vh-12rem)] w-40 flex flex-col">
            <div className="w-full flex-1 overflow-y-auto">
              <SectionSidebar sections={headings} />
            </div>
            <div className="flex w-full mt-auto">
              <ScrollTop />
            </div>
          </div>
        </aside>
      </div> */}
      <div className="mx-auto flex w-full max-w-4xl z-10 backdrop-blur md:shadow md:mb-8">
        <div className="flex-1 w-full px-8 lg:pe-14 my-8 transition-all mb-20">
          <div className="article"><MDXContent/></div>
          <div className="mt-40">
            <ProjectSidebar projects={projects} />
          </div>
          <div className="md:hidden flex items-center justify-center my-12">
            <ScrollTop />
          </div>
        </div>
        <aside className="hidden md:block flex-shrink-0 w-38 md:mt-8 relative mb-20 pe-8">
          <div className="sticky top-[145px] h-[calc(100vh-12rem)] flex flex-col">
            <div className="w-full flex-1 overflow-y-auto">
              <SectionSidebar sections={headings} />
            </div>
            <div className="flex w-full mt-auto">
              <ScrollTop />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
