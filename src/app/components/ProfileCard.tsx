"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Contact from "./Contact";

gsap.registerPlugin(useGSAP, TextPlugin);

interface ProfileProps {
  isOpenToWork: boolean;
}

const ProfileCard = ({ isOpenToWork }: ProfileProps) => {
  const work = useRef(null);
  const first = useRef(null);
  const last = useRef(null);
  const occup = useRef(null);
  const bio = useRef(null);
  const contact = useRef(null);

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

    gsap.set([first.current, occup.current, bio.current, contact.current], {
      y: 100,
      opacity: 0,
      filter: "blur(20px)",
    });

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
  });

  return (
    <>
      <section className="w-full">
        {isOpenToWork && (
          // <div className="inline-block">
          //   <div className="flex items-center border border-white/15 bg-gradient-to-br from-white/5 to-transparent rounded-full py-1.5 px-3 gap-2 text-sm">
          //     <div className="relative">
          //       <span className="absolute w-3 h-3 rounded-full bg-blue-600 opacity-75 animate-ping"></span>
          //       <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          //     </div>
          //     <div className="text-white/80 me-1">Available</div>
          //   </div>
          // </div>
          <p
            className="inline-block text-black/55 dark:text-white/55 border border-black/55 dark:border-white/55 px-2 py-1 rounded"
            ref={work}
          >
            OPEN TO WORK
          </p>
        )}
        <div className="w-full items-center">
          <div className="mt-8 mb-8">
            {/* text-[#CDC9B9] */}
            <div className="flex flex-col w-full text-5xl md:text-8xl dark:text-white font-bold mb-8">
              <h1 ref={first}>Tom Krusinski</h1>
              {/* <h1 ref={last}>Krusinski</h1> */}
            </div>
            <div className="flex items-center">
              <p
                className="text-xl md:text-2xl text-black/90 dark:text-white/55 font-semibold"
                ref={occup}
              >
                Software Engineer
              </p>
            </div>
            {/* <p className="text-white/55 mt-2">- Pittsburgh, PA</p> */}
          </div>
          <p
            className="text-black/90 dark:text-white/55 profile font-medium"
            ref={bio}
          >
            BSc in Information Systems. Working in the JS ecosystem.
          </p>
        </div>
        <div ref={contact} className="mt-24">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
