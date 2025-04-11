"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tools from "../(projects)/work/[projectSlug]/components/Tools";

gsap.registerPlugin(useGSAP, TextPlugin);

type Project = {
  title: string;
  description: string;
  date: string;
  src: string;
  bgColor: string;
  filename: string;
  slug: string;
  tools: string[];
};

interface WorkProjectProps {
  title: string;
  projects: Project[];
}

const WorkProject = ({ title, projects }: WorkProjectProps) => {
  const header = useRef(null);
  const projectsContainer = useRef<HTMLUListElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.timeScale(3.5);

      if (!projectsContainer.current) return;

      const projectItems = gsap.utils.toArray(
        projectsContainer.current.querySelectorAll("li > a > div")
      );

      gsap.set(header.current, {
        y: 20,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(projectItems, {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
      });

      tl.to(
        header.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          filter: "blur(0px)",
        },
        "-=0.5"
      );

      tl.to(
        projectItems,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.5,
        },
        "-=0.5"
      );
    },
    { scope: projectsContainer, dependencies: [projects] }
  );
  return (
    <div className="z-10 w-full max-w-6xl justify-between text-sm h-full my-16 px-8 lg:px-12">
      <div ref={header} className="text-4xl text-white font-bold mb-10">
        {title}
      </div>
      <ul className="text-white" ref={projectsContainer}>
        {projects.map((project) => {
          return (
            <li key={project.filename}>
              <hr className="w-full border border-white/10" />
              <Link href={`/work/${project.slug}`}>
                <div className="flex flex-col md:flex-row md:gap-8 group my-4 group transition-all duration-200 rounded py-5">
                  <div
                    className={`flex w-full h-[220px] md:h-[200px] md:max-w-[300px] justify-center ${project.bgColor} rounded-[24px] overflow-hidden mb-4 md:mb-0`}
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      height={500}
                      width={500}
                      className="object-contain group-hover:scale-[1.02] transition-transform"
                    />
                  </div>
                  <div className="flex flex-col h-[inherit] w-full justify-between md:my-2">
                    <div className="flex flex-col flex-grow">
                      <p className="text-white/60">{project.date}</p>
                      <div className="space-y-1 mt-2 mb-5">
                        <p
                          className={`inline-block text-white font-medium text-xl article-title group-hover:underline line-clamp-2 overflow-ellipsis`}
                        >
                          {project.title}
                        </p>
                        <p className={`block text-white/60 profile`}>
                          {project.description}
                        </p>
                      </div>
                      {project.tools && <Tools tools={project.tools} />}
                    </div>

                    {/* <div className="flex items-center gap-1 mt-2 md:mt-0">
                            <div className="text-blue-400 text-xs learn-more">
                              Learn more
                            </div>
                          </div> */}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkProject;
