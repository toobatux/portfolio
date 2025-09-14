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
    <>
      {/* <div ref={container} className="flex flex-col gap-4">
      <div className="flex gap-4 w-full h-full"> */}
      {/* <div className="lg:w-2/5 w-full flex flex-col gap-4 justify-between max-w-full">
          <BackBlog />
          <Link href="#work">
            <div className="flex max-h-36 border border-white/10 shadow-xl bg-white/5 group transition-colors duration-200 rounded-[24px] p-5">
              <div className="flex items-center w-full">
                <div className="flex flex-col">
                  <p className="block text-white group-hover:underline text-base line-clamp-2 font-medium">
                    Discover more projects
                  </p>
                </div>
              </div>
              <div className="text-white/50 border border-white/20 app-bg group-hover:bg-white group-hover:text-black rounded-full p-2 w-[36px] h-[36px] flex items-center justify-center transition-colors duration-200">
                <ArrowForward
                  fontSize="small"
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        </div> */}
      <div className="w-full flex gap-4 h-full max-w-full">
        <TechStack />
        <Book />
        {/* <SongSection /> */}
      </div>
      {/* </div>
    </div> */}
    </>
  );
};

export default InfoBento;
