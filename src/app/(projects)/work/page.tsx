import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

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
      {/* <div className="absolute inset-0 bg-black bg-[size:20px_20px] bg-opacity-15 transition-colors duration-500">
        <div className="absolute inset-0 bg-grad h-[15rem] opacity-50"></div>
      </div> */}
      {/* <Navbar /> */}
      <div className="relative w-full">
        <div className="flex min-h-screen flex-col justify-between items-center md:p-8">
          <div className="z-10 w-full max-w-7xl justify-between text-sm h-full my-16 px-6">
            <div className="text-4xl text-white font-bold mb-10">Work</div>
            {/* <ProjectsSection setBackground={() => {}} />
            <Project
              date="2022"
              link="#"
              src={Foodbank}
              alt="SVC Foodbank"
              title="SVC Foodbank"
              description="A foodbank website for hosting events"
              tools={["C#", "ASP.NET Core", "Razor Pages", "Bootstrap"]}
              isDisabled={true}
              background="bg-black"
            /> */}
            <ul className="text-white">
              {projects.map((project) => {
                return (
                  <li key={project.filename}>
                    <hr className="w-full border border-white/10" />
                    <Link href={`/work/${project.slug}`}>
                      <div className="flex flex-col-reverse md:flex-row md:gap-8 group my-4 group transition-all duration-200 rounded py-5">
                        <div className="flex flex-col h-[inherit] w-full justify-between md:my-2">
                          <div className="flex flex-col flex-grow">
                            <div className="space-y-2 mb-3">
                              <p className="text-white/55 font-medium">
                                {project.date}
                              </p>
                              <p className="inline-block text-white font-medium text-xl mb-2 article-title group-hover:underline">
                                {project.title}
                              </p>
                            </div>
                            <p className="block text-white/50 mb-4 profile">
                              {project.description}
                            </p>
                          </div>

                          {/* <div className="flex items-center gap-1 mt-2 md:mt-0">
                            <div className="text-blue-400 text-xs learn-more">
                              Learn more
                            </div>
                          </div> */}
                        </div>
                        <div
                          className={`flex w-full h-[220px] md:h-[200px] md:max-w-[300px] justify-center ${project.bgColor} rounded-[18px] mb-4 md:mb-0`}
                        >
                          <Image
                            src={project.src}
                            alt={project.title}
                            height={500}
                            width={500}
                            className="object-contain rounded-3xl"
                          />
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
