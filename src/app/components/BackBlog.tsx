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
    let mm = gsap.matchMedia();

    mm.add("(min-width: 750px)", () => {
      gsap.fromTo(
        photo.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 170,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: photo.current,
            start: "top 80%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    });

    mm.add("(max-width: 749px)", () => {
      gsap.fromTo(
        photo.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: photo.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      container.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      text.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text.current,
          start: "top 80%",
          end: "top 70%",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className="flex w-full h-full z-0 md:p-8 items-center justify-center">
      <div
        className={`flex w-full px-6 transition-all max-w-7xl mx-auto ${myFont.className}`}
      >
        <div
          className="relative flex flex-col md:flex-row w-full h-[35rem] md:h-[35rem] lg:h-[45rem] border-2 border-white/10 bg-gradient-to-b shadow-xl from-white/5 to-black backdrop-blur-3xl overflow-hidden mx-auto items-center justify-between p-12 xl:px-[10rem] md:py-0 transition-all gap-12 rounded-[18px]"
          ref={container}
        >
          <div
            className="flex flex-col w-full justify-center text-white items-center md:items-start me-2"
            ref={text}
          >
            <div className="text-sm lg:text-lg text-white/65 transition-all mb-4">
              Featured Work
            </div>
            <div
              className={`text-4xl lg:text-[56px] lg:leading-[3.5rem] transition-all text-center md:text-start font-semibold ${myFont.className}`}
            >
              BackBlog Movie Tracker
            </div>
            <Link
              href="/work/backblog"
              className="mt-8 md:mt-12 text-sm md:text-base text-black bg-white hover:bg-white/75 transform-colors duration-300 px-4 py-2 rounded-full"
            >
              Learn more
            </Link>
          </div>
          <div
            className="relative flex md:translate-y-[15rem] w-full justify-center md:w-[45rem]"
            ref={photo}
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
  );
};

export default BackBlog;
