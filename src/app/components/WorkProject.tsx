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
        y: 10,
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
    <div className="z-10 w-full text-sm h-full">
      <div className="text-2xl text-white font-semibold mb-2">{title}</div>
      <div className="text-primary mb-8">{`Some things I've been working on`}</div>
      <ul className="text-white" ref={projectsContainer}>
        {projects.map((project, index) => {
          return (
            <li key={project.filename} className="group">
              <hr className="w-full border-t border-white/10 z-10" />
              <Link href={`/work/${project.slug}`}>
                <div className="flex flex-row justify-between gap-2 hover:bg-white/5 transition-all rounded py-6 px-4">
                  <div className="flex flex-col justify-center gap-4 w-1/4 md:w-1/2">
                    <p className={`inline-block text-white font-medium`}>
                      {project.title}
                    </p>
                    {/* {project.tools && <Tools tools={project.tools} />} */}
                  </div>
                  <div className="flex w-1/2 items-center gap-4">
                    <div className="flex w-3/4 md:w-1/2">
                      <p className={`block text-white/60`}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex w-1/2 justify-end">
                      <p>{project.date}</p>
                    </div>
                  </div>

                  {/* <div className="flex md:w-1/5 justify-end">
                    <div
                      className={`flex h-[200px] md:h-[100px] md:max-w-[200px] justify-center ${project.bgColor} overflow-hidden mb-4 md:mb-0`}
                    >
                      <Image
                        src={project.src}
                        alt={project.title}
                        height={500}
                        width={500}
                        className="object-contain group-hover:scale-[1.02] transition-transform"
                      />
                    </div>
                  </div> */}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <div className="flex w-full justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {projects.map((project, index) => {
            return (
              <li
                key={project.filename}
                className="flex w-[350px] items-center group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex h-[350px]">
                    <Image
                      src={project.src}
                      alt={project.title}
                      height={900}
                      width={900}
                      className="object-cover group-hover:scale-[1.02] transition-transform"
                    />
                  </div>
                  <div className="text-white/60">{project.date}</div>
                  <div className="text-lg text-white uppercase">
                    {project.title}
                  </div>
                  <div className="text-white/60 profile">
                    {project.description}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default WorkProject;
