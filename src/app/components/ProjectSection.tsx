"use client";
import Link from "next/link";
import React from "react";
import Projects from "./HomeProjects";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeProjects from "./HomeProjects";

const ProjectSection = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useGSAP(() => {
    // gsap.fromTo(
    //   container.current,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: container.current,
    //       start: "top 80%",
    //       end: "top 50%",
    //       scrub: true,
    //     },
    //   }
    // );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        // toggleActions: "play none none reverse",
      },
    });

    tl.timeScale(1);

    gsap.set(container.current, {
      y: 100,
      opacity: 0,
    });

    tl.to(container.current, {
      y: 0,
      opacity: 1,
    });
  });

  return (
    <>
      <div className="p-6 text-black dark:text-white" ref={container}>
        {/* <div className="animate-slidein [--slidein-delay:600ms] opacity-0"> */}
        <div className="flex justify-between mb-6 md:mb-8">
          <div className="text-4xl font-semibold flex items-center">Work</div>
          <Link
            href="/work/"
            className="flex dark:text-white/55 border-2 border-black/55 dark:border-white/20 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white rounded-full px-4 py-2 transition-all duration-300"
            prefetch={false}
          >
            See more
          </Link>
        </div>
        <HomeProjects />
        {/* <hr className="md:hidden border border-white/10 my-6" /> */}

        {/* <div className="flex items-center justify-center mt-8 mb-12">
          <Link
            href="/work/"
            className="text-white rounded-full hover:text-black hover:bg-white border-2 border-white/20 px-4 py-2 transition-all duration-300"
            prefetch={false}
          >
            See more
          </Link>
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default ProjectSection;
