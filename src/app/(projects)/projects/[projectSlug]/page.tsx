import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

import Links from "@/app/(projects)/projects/[projectSlug]/components/backblog/Links";
import Tools from "@/app/(projects)/projects/[projectSlug]/components/Tools";
import ImageCap from "@/app/(projects)/projects/[projectSlug]/components/ImageCap";
import SectionSidebar from "@/app/(projects)/projects/[projectSlug]/components/SectionSidebar";
import ScrollTop from "@/app/components/ScrollTop";
import ProjectSidebar from "@/app/(projects)/projects/[projectSlug]/components/ProjectSidebar";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";

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

export default async function Page({
  params,
}: {
  params: { projectSlug: string };
}) {
  const content = await fs.readFile(
    path.join(
      process.cwd(),
      "src/content/projects/",
      `${params.projectSlug}.mdx`
    ),
    "utf-8"
  );

  const data = await compileMDX<{
    title: string;
    description: string;
    headings: [];
  }>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Links,
      Tools,
      ImageCap,
    },
  });

  return (
    <>
      <div className="w-full m-4 md:m-12 lg:my-4 lg:mx-12">
        <div className="article">{data.content}</div>
        <div className="mt-[10rem]">
          <ProjectSidebar projects={projects} />
        </div>
        <div className="flex items-center justify-center my-12">
          <ScrollTop />
        </div>
      </div>
      <aside className="hidden lg:flex lg:justify-center lg:flex-none w-48">
        <div className="fixed w-40">
          <div className="w-full flex flex-col">
            <SectionSidebar sections={data.frontmatter.headings} />
          </div>

          <div className="fixed bottom-10">
            <ScrollTop />
          </div>
        </div>
      </aside>
    </>
  );
}
