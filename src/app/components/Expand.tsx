"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ExpandMore } from "@mui/icons-material";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Expand = () => {
  const arrow = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(arrow.current, {
      opacity: 0,
      y: 10,
    });
    tl.to(arrow.current, {
      opacity: 1,
      y: 0,
      delay: 0.75,
    });

    // gsap.set(arrow.current, {
    //   opacity: 1,
    //   y: 0,
    // });

    // gsap.to(arrow.current, {
    //   opacity: 0,
    //   y: -20,
    //   scrollTrigger: {
    //     trigger: arrow.current,
    //     start: "top 90%",
    //     end: "top 85%",
    //     scrub: true,
    //     toggleActions: "play reverse play reverse",
    //   },
    // });
  });
  return (
    <div
      ref={arrow}
      className="absolute bottom-14 right-0 left-0 flex justify-center"
    >
      <Link
        href="#info"
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <ExpandMore className="text-white/55" />
      </Link>
    </div>
  );
};

export default Expand;
