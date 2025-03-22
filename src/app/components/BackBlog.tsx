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
    <div className="flex">
      <Link
        href="/work/backblog"
        className="flex w-full h-full z-0 items-center justify-center rounded-[24px] overflow-hidden"
      >
        <div className={`flex w-full transition-all ${myFont.className}`}>
          <div className="relative group flex flex-col w-full h-[35rem] border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-3xl overflow-hidden mx-auto items-center justify-between p-12 transition-all gap-12 rounded-[24px]">
            <div className="flex flex-col w-full justify-center dark:text-white items-center">
              <div className="flex flex-col items-center w-full">
                <div className="text-sm text-black/65 dark:text-white/65 transition-all mb-4 text-center">
                  Featured Work
                </div>
                <div
                  className={`text-4xl transition-all text-center font-semibold ${myFont.className}`}
                >
                  BackBlog Movie Tracker
                </div>
                <div className="mt-8 text-sm text-black/50 dark:text-white/50 app-bg dark:bg-black border-2 border-black/10 dark:border-white/10 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transform-colors duration-300 px-4 py-2 rounded-full self-center">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center">
              <div className="">
                <div
                  className="relative flex w-full justify-center group-hover:-translate-y-[10px] transition-transform"
                  // ref={photo}
                >
                  <Image
                    src="/bbPhone.png"
                    alt="backblog"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent dark:to-black to-white" />
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
