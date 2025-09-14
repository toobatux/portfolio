"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Contact from "./Contact";
import { ExpandMore } from "@mui/icons-material";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

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
    // gsap.from(work.current, {
    //   duration: 0.75,
    //   text: "${work}",
    //   ease: "none",
    // });
    // gsap.from(first.current, {
    //   duration: 0.5,
    //   text: "_d#",
    //   ease: "none",
    // });
    // gsap.from(last.current, {
    //   duration: 1,
    //   text: "${last}",
    //   ease: "none",
    // });
    // gsap.from(occup.current, {
    //   duration: 0.75,
    //   text: "${occupation}",
    //   ease: "none",
    // });
    // gsap.from(bio.current, {
    //   duration: 1,
    //   text: "_-9FkDS7ke3_Df*de#MDm)3d7H#SA#3jdfns3_E#dnAW#BS38DSAD3_*",
    //   ease: "none",
    // });
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
        filter: "blur(20px)",
      }
    );

    tl.to(
      first.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
      },
      "-=0.5"
    );
    tl.to(
      occup.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
      },
      "-=0.5"
    );
    tl.to(
      bio.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
      },
      "-=0.5"
    );
    tl.to(
      contact.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
      },
      "-=0.5"
    );
    tl.to(
      arrow.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        filter: "blur(0px)",
      },
      "-=0.5"
    );

    gsap.set(section.current, {
      y: 0,
      opacity: 1,
    });

    gsap.to(section.current, {
      y: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: section.current,
        start: "top 5%",
        end: "top -30%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

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
            <div className="flex items-center border border-white/10 bg-linear-to-br from-white/5 to-transparent rounded-full py-1.5 px-3 gap-2 text-sm">
              <div className="relative">
                <span className="absolute w-3 h-3 rounded-full bg-primary opacity-75 animate-ping"></span>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <div className="text-white/65 me-1">Available for projects</div>
            </div>
          </div>
          // <p
          //   className="inline-block text-white/55 border border-white/55 px-2 py-1 rounded"
          //   ref={work}
          // >
          //   OPEN TO WORK
          // </p>
        )}
        <p className="text-primary text-lg mb-6">{`Hi, I'm`}</p>
        <div className="flex w-full flex-col lg:flex-row lg:justify-between mb-8">
          <div className="flex w-full lg:w-1/2">
            {/* text-[#CDC9B9] */}
            <div
              ref={first}
              className="flex flex-col w-full text-5xl md:text-7xl text-white"
            >
              <h1 className="font-semibold">Tom</h1>
              <h1>Krusinski</h1>
              {/* <h1 ref={last}>Krusinski</h1> */}
            </div>
            {/* <div className="flex items-center">
              <p
                className="text-xl md:text-3xl text-white/65 font-semibold"
                ref={occup}
              >
                Software Engineer
              </p>
            </div> */}
            {/* <p className="text-white/55 mt-2">- Pittsburgh, PA</p> */}
          </div>
          <div
            ref={occup}
            className="flex w-full lg:w-1/2 min-h-full items-end pt-14"
          >
            <div className="flex flex-col gap-6 text-white/65 lg:ms-14">
              <p>
                Software engineer, UX designer. BSc information systems.
                Currently building <span className="text-primary">stryve</span>,
                a platform for learning.
              </p>
              <p className="hidden lg:flex">
                I work with JavaScript, TypeScript, React, Next.JS, Python, C++,
                and more.
              </p>
            </div>
          </div>
          {/* <p className=" text-white/65 profile font-medium mt-10" ref={bio}>
            Software Engineer. BSc in Information Systems. Working in the JS
            ecosystem.
          </p> */}
        </div>
        <div ref={contact} className="flex mt-12 w-full">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
