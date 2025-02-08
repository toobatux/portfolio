"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Test() {
  const [showNav, setShowNav] = useState(false);
  const lastScrollY = useRef(0);
  const textRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY < lastScrollY.current);
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation using useGSAP

  return (
    <div
      className={`sticky top-0 z-40 w-full bg-white dark:bg-black dark:text-white px-6 py-4 transition-transform ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-7xl justify-between">
          <h1 ref={textRef} className="text-2xl font-bold">
            T/K
          </h1>
          <div className="flex gap-4 items-center">
            <Link
              href="/work/"
              className="text-black/65 dark:text-white/65 hover:underline hover:text-black dark:hover:text-white no-underline ps-2 transition-colors"
            >
              Work
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
