import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import WorkProject from "@/app/components/WorkProject";

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
      <div className="absolute inset-0 bg-grad h-[40rem] opacity-50"></div>

      {/* <Navbar /> */}
      <div className="relative w-full">
        <div className="flex min-h-screen flex-col justify-between items-center md:p-8">
          <WorkProject title="Work" projects={projects} />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
