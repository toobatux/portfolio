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

const InfoBento = () => {
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

    gsap.fromTo(
      container.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="flex flex-col gap-4 p-6">
      <div
        className="flex flex-wrap lg:flex-nowrap gap-4 w-full h-full"
        ref={container}
      >
        <div className="lg:w-1/2 w-full flex flex-col justify-between max-w-full">
          <TechStack />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-4 h-full max-w-full">
          <Book />
          <SongSection />
        </div>
      </div>
      {/* <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full h-full">
        <div className="lg:w-3/5 w-full">
          <Bb />
        </div>
        <div className="lg:w-2/5 w-full">{/* <BackBlog /> </div>
      </div> */}
    </div>
  );
};

export default InfoBento;
