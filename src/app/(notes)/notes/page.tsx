import React from "react";
import Construction from "@/../public/construction.svg";
import Image from "next/image";

export default async function NotesPage() {
  // const filenames = await fs.readdir(
  //   path.join(process.cwd(), "src/content/notes")
  // );

  // const notes = await Promise.all(
  //   filenames.map(async (filename) => {
  //     const content = await fs.readFile(
  //       path.join(process.cwd(), "src/content/notes/", filename),
  //       "utf-8"
  //     );
  //     const { frontmatter } = await compileMDX<{
  //       title: string;
  //       description: string;
  //       date: string;
  //       src: string;
  //       bgColor: string;
  //       isArticle: boolean;
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
      {/* <div className="absolute inset-0 bg-grad h-120 opacity-55 scale-x-[-1]"></div> */}
      <div className="absolute top-0 z-[-2] min-h-screen w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <div className="z-10 w-full max-w-7xl justify-between text-sm h-full my-16 px-6">
            <div className="text-4xl dark:text-white font-bold mb-10">Blog</div>
          </div> */}
      <div className="flex flex-col w-full max-w-7xl min-h-[68vh] justify-center mx-auto px-8 lg:px-12 transition-all">
        <div className="flex flex-col z-10 w-full items-center text-sm h-full px-6 gap-6">
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
      </div>

      {/* <div className="flex flex-col w-full max-w-7xl min-h-[68vh] justify-center mx-auto px-8 lg:px-12 transition-all">
        <div className="relative w-full">
          <div className="flex flex-col justify-between items-center">
            <WorkProject title="Notes" projects={notes} />
          </div>
        </div>
      </div> */}
    </>
  );
}
