"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Contact from "./Contact";
import { ScrollTrigger } from "gsap/all";
import name from "../font/nameFont";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

interface ProfileProps {
  isOpenToWork: boolean;
}

const ProfileCard = ({ isOpenToWork }: ProfileProps) => {
  const section = useRef(null);
  const work = useRef(null);
  const first = useRef(null);
  const occup = useRef(null);
  const bio = useRef(null);
  const contact = useRef(null);
  const arrow = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.timeScale(3.5);

    gsap.set(
      [
        first.current,
        occup.current,
        bio.current,
        contact.current,
        arrow.current,
      ],
      {
        y: 100,
        opacity: 0,
      }
    );

    tl.to(
      first.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.9"
    );
    tl.to(
      occup.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.9"
    );
    tl.to(
      bio.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.9"
    );
    tl.to(
      contact.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.9"
    );
    // tl.to(
    //   arrow.current,
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //   },
    //   "-=0.5"
    // );

    gsap.set(section.current, {
      y: 0,
      opacity: 1,
    });

    // gsap.to(section.current, {
    //   y: 0,
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: section.current,
    //     start: "top 5%",
    //     end: "top -30%",
    //     scrub: true,
    //     toggleActions: "play reverse play reverse",
    //   },
    // });

    // gsap.set(arrow.current, {
    //   opacity: 1,
    //   y: 0,
    // });

    // gsap.to(arrow.current, {
    //   opacity: 0,
    //   y: -10,
    //   scrollTrigger: {
    //     trigger: arrow.current,
    //     start: "top 80%",
    //     end: "top 20%",
    //     scrub: 0.5,
    //     toggleActions: "play reverse play reverse",
    //   },
    // });
  });

  return (
    <>
      <section className="flex flex-col w-full" ref={section}>
        {isOpenToWork && (
          <div className="w-fit inline-block mb-12">
            <div className="flex items-center border border-foreground/10 bg-linear-to-br from-foreground/5 to-transparent rounded-full py-1.5 px-3 gap-2 text-sm">
              <div className="relative">
                <span className="absolute w-3 h-3 rounded-full bg-primary opacity-75 animate-ping"></span>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="text-foreground/65 me-1">Available for projects</div>
            </div>
          </div>
        )}
        <div className="mb-10 flex w-full flex-col lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col text-center">
            <div
              ref={first}
              className="flex w-full flex-col gap-8 text-foreground"
            >
              <h1 className={`text-4xl md:text-5xl ${name.className}`}>Tom Krusinski</h1>
              <div
                ref={occup}
                className="flex flex-col gap-4 text-foreground/65"
              >
                <p>Full-Stack Developer</p>
                <p>
                  TypeScript, React, Next.JS, Python, Java, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={contact} className="mt-4 flex w-full justify-center">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
