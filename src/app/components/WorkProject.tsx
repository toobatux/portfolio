"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tools from "../(projects)/projects/[projectSlug]/components/Tools";
import name from "../font/nameFont";
import Project from "./Project";
import { projectTraceSource } from "next/dist/build/swc/generated-native";

gsap.registerPlugin(useGSAP, TextPlugin);

type Project = {
  title: string;
  description: string;
  date: string;
  src: string;
  bgColor: string;
  filename: string;
  slug: string;
  tools?: string[];
  isArticle: boolean;
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
        filter: "blur(2px)",
      });

      gsap.set(projectItems, {
        y: 10,
        opacity: 0,
        filter: "blur(2px)",
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
      <div className={`text-2xl mb-8 ${name.className}`}>{title}</div>
      <ul className="flex flex-col text-foreground" ref={projectsContainer}>
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          return (
            <li key={project.filename} className="group">
              <hr className="w-full border-t border-foreground/10 z-10" />
              <Link
                href={`${
                  project.isArticle
                    ? `/notes/${project.slug}`
                    : `/projects/${project.slug}`
                }`}
              >
                <div className="flex flex-row justify-between gap-2 hover:bg-foreground/5 transition-all rounded py-6 px-4">
                  <div className="flex flex-col justify-center gap-4 w-1/2 md:w-1/2">
                    <p className={`inline-block text-foreground font-medium`}>
                      {project.title}
                    </p>
                  </div>
                  <div className="flex w-1/2 items-center gap-4">
                    <div className="hidden md:flex md:w-3/4">
                      <p className={`block text-foreground/60`}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex w-full md:w-1/2 justify-end">
                      <p>{project.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
              {isLast && (
                <hr className="w-full border-t border-foreground/10 z-10" />
              )}
              {/* <Project date={project.date} description={project.description} title={project.title} tools={project.tools} link={project.slug}/> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkProject;
