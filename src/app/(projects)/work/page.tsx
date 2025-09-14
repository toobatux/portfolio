import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import WorkProject from "@/app/components/WorkProject";
import Footer from "@/app/components/Footer";

export default async function Projects() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "src/content/projects")
  );

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/content/projects/", filename),
        "utf-8"
      );
      const { frontmatter } = await compileMDX<{
        title: string;
        description: string;
        date: string;
        src: string;
        bgColor: string;
        tools: string[];
      }>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    })
  );
  return (
    <>
      <div className="absolute top-0 z-[-2] h-full w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="flex flex-col w-full max-w-7xl min-h-[68vh] justify-center mx-auto px-8 md:px-12">
        <div className="relative w-full">
          <div className="flex flex-col justify-between items-center">
            <WorkProject title="Projects" projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
