"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "home", href: "/" },
  { name: "work", href: "/work" },
  { name: "blog", href: "/blog" },
  // { name: "Blog", href: "/blog" },
];

export default function Test() {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const textRef = useRef(null);
  const pathName = usePathname();

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
      className={`fixed top-0 left-0 right-0 z-20 w-full text-black dark:text-white py-4 px-6 transition-transform ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full justify-center">
        <div className="flex justify-center shadow-md bg-white/5 backdrop-blur-lg p-2 border border-white/10 rounded-[24px]">
          {/* <h1 ref={textRef} className="text-2xl font-bold">
            T/K
          </h1> */}

          <div className="flex gap-2 items-center">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathName === "/"
                  : pathName.startsWith(link.href);

              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`
                    ${
                      isActive
                        ? "text-black dark:text-white bg-black/15 dark:bg-white/15"
                        : "text-black/65 dark:text-white/65"
                    } px-6 py-2 rounded-[16px] hover:bg-black/10 dark:hover:bg-white/10 transition-colors`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
