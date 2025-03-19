"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Test() {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const textRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 75) {
        setShowNav(scrollY < lastScrollY.current);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation using useGSAP

  return (
    <div
      className={`sticky top-0 md:top-2 z-40 w-full dark:text-white px-6 py-4 transition-transform ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full justify-center">
        <div className="flex w-full justify-center">
          {/* <h1 ref={textRef} className="text-2xl font-bold">
            T/K
          </h1> */}
          <div className="flex gap-2 items-center">
            <Link
              href="/"
              className="px-4 py-2 rounded-2xl backdrop-blur-lg text-black/65 dark:text-white/65 border border-white/20 hover:bg-white/20 transition-colors"
            >
              home
            </Link>
            <Link
              href="/work/"
              className="px-4 py-2 rounded-2xl backdrop-blur-lg text-black/65 dark:text-white/65 border border-white/20 hover:bg-white/20 transition-colors"
            >
              work
            </Link>
            <Link
              href="/blog/"
              className="px-4 py-2 rounded-2xl backdrop-blur-lg text-black/65 dark:text-white/65 border border-white/20 hover:bg-white/20 transition-colors"
            >
              blog
            </Link>
            {/* <Link
              href="/blog/"
              className="text-black/65 dark:text-white/65 hover:underline hover:text-black dark:hover:text-white no-underline ps-2 transition-colors"
            >
              Blog
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
