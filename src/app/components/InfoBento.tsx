"use client";

import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./TechStack";
import Book from "./Book";
import SongSection from "./SongSection";
import BackBlog from "./BackBlog";
import Bb from "./Bb";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

const InfoBento = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
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
    <div ref={container} className="flex flex-col gap-4 px-8 md:px-12">
      <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full h-full">
        <div className="lg:w-2/5 w-full flex flex-col gap-4 justify-between max-w-full">
          <BackBlog />
          <Link href="#work">
            <div className="flex max-h-[9rem] border border-black/10 dark:border-white/10 shadow-xl bg-white dark:bg-white/5 group transition-colors duration-200 rounded-[24px] p-5">
              <div className="flex items-center w-full">
                <div className="flex flex-col">
                  <p className="block dark:text-white group-hover:underline text-base line-clamp-2 font-medium">
                    Discover more projects
                  </p>
                </div>
              </div>
              <div className="text-black/50 dark:text-white/50 border border-black/20 dark:border-white/20 app-bg group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black rounded-full p-2 w-[36px] h-[36px] flex items-center justify-center transition-colors duration-200">
                <ArrowForward
                  fontSize="small"
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:w-3/5 w-full flex flex-col gap-4 h-full max-w-full">
          <TechStack />
          <Book />
          <SongSection />
        </div>
      </div>
    </div>
  );
};

export default InfoBento;
