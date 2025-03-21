"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import myFont from "../font/font";

const BackBlog = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const photo = useRef(null);
  const text = useRef(null);

  useGSAP(() => {
    // let mm = gsap.matchMedia();

    // mm.add("(min-width: 750px)", () => {
    //   gsap.fromTo(
    //     photo.current,
    //     {
    //       y: 200,
    //       opacity: 0,
    //     },
    //     {
    //       y: 170,
    //       opacity: 1,
    //       duration: 1,
    //       scrollTrigger: {
    //         trigger: photo.current,
    //         start: "top 90%",
    //         end: "top 70%",
    //         scrub: true,
    //       },
    //     }
    //   );
    // });

    // mm.add("(max-width: 749px)", () => {
    //   gsap.fromTo(
    //     photo.current,
    //     {
    //       y: 100,
    //       opacity: 0,
    //     },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 1,
    //       scrollTrigger: {
    //         trigger: photo.current,
    //         start: "top 90%",
    //         end: "top 50%",
    //         scrub: true,
    //       },
    //     }
    //   );
    // });

    // gsap.fromTo(
    //   container.current,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: container.current,
    //       start: "top 80%",
    //       end: "top 50%",
    //       scrub: true,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   text.current,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: text.current,
    //       start: "top 80%",
    //       end: "top 70%",
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
    <div className="flex mx-auto px-6">
      <Link
        href="/work/backblog"
        className="flex w-full h-full z-0 items-center justify-center rounded-[24px] overflow-hidden"
      >
        <div className={`flex w-full transition-all ${myFont.className}`}>
          <div
            className="relative group flex flex-col md:flex-row w-full h-[35rem] md:h-[30rem] lg:h-[40rem] border-2 border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden mx-auto items-center justify-between p-12 transition-all gap-12 rounded-[24px]"
            ref={container}
          >
            <div
              className="flex flex-col w-full md:w-1/2 justify-center text-white items-center"
              ref={text}
            >
              <div className="flex flex-col items-center md:items-start w-full md:w-3/4">
                <div className="text-sm lg:text-lg text-white/65 transition-all mb-4 text-center md:text-left">
                  Featured Work
                </div>
                <div
                  className={`text-4xl lg:text-5xl transition-all text-center md:text-left font-semibold ${myFont.className}`}
                >
                  BackBlog Movie Tracker
                </div>
                <div className="mt-8 text-sm md:text-base text-white/50 bg-black border-2 border-white/10 group-hover:bg-white group-hover:text-black transform-colors duration-300 px-4 py-2 rounded-full self-center md:self-start">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-center">
              <div className="md:translate-y-[8rem] lg:translate-y-[12rem]">
                <div
                  className="relative flex w-full justify-center md:max-w-[20rem] lg:max-w-[28rem] group-hover:-translate-y-[10px] transition-transform"
                  // ref={photo}
                >
                  <Image
                    src="/bbPhone.png"
                    alt="backblog"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BackBlog;
