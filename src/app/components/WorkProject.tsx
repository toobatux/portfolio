"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

gsap.registerPlugin(useGSAP, TextPlugin);

type Project = {
  title: string;
  description: string;
  date: string;
  src: string;
  bgColor: string;
  filename: string;
  slug: string;
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
    <div className="z-10 w-full max-w-7xl justify-between text-sm h-full my-16 px-6">
      <div ref={header} className="text-4xl dark:text-white font-bold mb-10">
        {title}
      </div>
      <ul className="dark:text-white" ref={projectsContainer}>
        {projects.map((project) => {
          return (
            <li key={project.filename}>
              <hr className="w-full border border-black/10 dark:border-white/10" />
              <Link href={`/work/${project.slug}`}>
                <div className="flex flex-col-reverse md:flex-row md:gap-8 group my-4 group transition-all duration-200 rounded py-5">
                  <div className="flex flex-col h-[inherit] w-full justify-between md:my-2">
                    <div className="flex flex-col flex-grow">
                      <div className="space-y-2 mb-3">
                        <p className="dark:text-white/55 font-medium">
                          {project.date}
                        </p>
                        <p className="inline-block dark:text-white font-medium text-xl mb-2 article-title group-hover:underline">
                          {project.title}
                        </p>
                      </div>
                      <p className="block dark:text-white/50 mb-4 profile">
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
                    className={`flex w-full h-[220px] md:h-[200px] md:max-w-[300px] justify-center ${project.bgColor} rounded-[24px] mb-4 md:mb-0`}
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
  );
};

export default WorkProject;
