import SectionSidebar from "@/app/(projects)/projects/[projectSlug]/components/SectionSidebar";
import ScrollTop from "@/app/components/ScrollTop";
import { promises as fs } from "fs";
import path from "path";

export default async function NotePage(props: {
  params: Promise<{ noteSlug: string }>;
}) {
  const params = await props.params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/content/notes/", `${params.noteSlug}.mdx`),
    "utf-8"
  );

  // const data = await compileMDX<{
  //   title: string;
  //   description: string;
  //   headings: [];
  // }>({
  //   source: content,
  //   options: {
  //     parseFrontmatter: true,
  //   },
  //   // components: {
  //   //   Links,
  //   //   GoyangiLinks,
  //   //   WTLinks,
  //   //   Tools,
  //   //   ImageCap,
  //   // },
  // });

  return (
    <>
      {/* <div className="fixed top-0 right-0 left-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex">
        <div className="flex-1 w-full px-8 lg:px-12 my-4 lg:mx-12 transition-all mb-20">
          <div className="article">{data.content}</div>
          <div className="md:hidden flex items-center justify-center my-12">
            <ScrollTop />
          </div>
        </div>
        <aside className="hidden md:block flex-shrink-0 w-48 md:mt-4 relative mb-20">
          <div className="sticky top-[145px] w-full h-[calc(100vh-12rem)] w-40 flex flex-col">
            <div className="w-full flex-1 overflow-y-auto">
              <SectionSidebar sections={data.frontmatter.headings} />
            </div>
            <div className="flex w-full mt-auto">
              <ScrollTop />
            </div>
          </div>
        </aside>
      </div> */}
    </>
  );
}
