import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import WorkProject from "@/app/components/WorkProject";
import Construction from "@/../public/construction.svg";
import Image from "next/image";

export default async function BlogsPage() {
  // const filenames = await fs.readdir(
  //   path.join(process.cwd(), "src/content/blog")
  // );

  // const blogs = await Promise.all(
  //   filenames.map(async (filename) => {
  //     const content = await fs.readFile(
  //       path.join(process.cwd(), "src/content/blog/", filename),
  //       "utf-8"
  //     );
  //     const { frontmatter } = await compileMDX<{
  //       title: string;
  //       description: string;
  //       date: string;
  //       src: string;
  //       bgColor: string;
  //     }>({
  //       source: content,
  //       options: {
  //         parseFrontmatter: true,
  //       },
  //     });

  //     return {
  //       filename,
  //       slug: filename.replace(".mdx", ""),
  //       ...frontmatter,
  //     };
  //   })
  // );

  return (
    <>
      {/* <div className="absolute inset-0 bg-grad h-[30rem] opacity-55 scale-x-[-1]"></div> */}
      <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative w-full h-full">
        <div className="flex min-h-[68vh] flex-col pt-24 items-center md:px-8 py-12">
          {/* <div className="z-10 w-full max-w-7xl justify-between text-sm h-full my-16 px-6">
            <div className="text-4xl dark:text-white font-bold mb-10">Blog</div>
          </div> */}

          <div className="flex flex-col z-10 w-full items-center text-sm h-full mt-24 px-6 gap-6">
            <div className="flex p-4 items-center justify-center h-24 w-24 backdrop-blur-lg bg-white/10 rounded-xl border border-white/5">
              <Image
                src={Construction}
                height={100}
                width={100}
                alt="construction"
              />
            </div>
            <div className="flex flex-col text-center gap-4">
              <div className="text-xl lg:text-3xl text-white font-bold transition-all">
                Under Construction
              </div>
              <div className="text-white/55 font-light">
                This page is under construction. Come back soon!
              </div>
            </div>
          </div>

          {/* <WorkProject title="Blog" projects={blogs} /> */}
        </div>
      </div>
    </>
  );
}
