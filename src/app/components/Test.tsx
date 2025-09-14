"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOutlined,
  CasesOutlined,
  WavingHandOutlined,
} from "@mui/icons-material";

const navLinks = [
  { name: <WavingHandOutlined />, href: "/" },
  { name: <CasesOutlined />, href: "/work" },
  { name: <BookOutlined />, href: "/blog" },
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

      if (scrollY > 5) {
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
      className={`fixed bottom-6 left-0 right-0 z-50 w-full text-white py-4 px-6 transition-transform shadow ${
        showNav ? "translate-y-0" : "translate-y-[calc(100%+1.5rem)]"
      }`}
    >
      <div className="flex w-full justify-center">
        <div className="flex justify-center shadow-md bg-black p-2 border border-white/15 rounded-full">
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
                  key={link.href}
                  className={`
                    ${
                      isActive ? " text-white  bg-white/15" : " text-white/65"
                    } flex h-10 w-10 justify-center items-center rounded-full hover:bg-white/10 transition-colors`}
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
