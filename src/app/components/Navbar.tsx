"use client";
import Image from "next/image";
import Link from "next/link";
import Batman from "/public/batman.jpg";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavItems } from "./NavItems";
import name from "../font/nameFont";

const Navbar = () => {
  const navLinks = NavItems();
  const pathName = usePathname();

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

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

  return (
    <div
      className={`fixed top-0 z-40 w-full backdrop-blur-lg flex transition-all duration-300 border-b border-foreground/5 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full">
        <div className="flex-auto max-w-4xl mx-auto">
          <div className="">
            <div className="relative flex w-full justify-between px-8  h-[72px] transition-all">
              <Link href="/" className="flex items-center">
                <div className={`text-foreground text-sm ${name.className}`}>Tom Krusinski</div>
              </Link>
              <div className="flex items-center gap-5">
                {navLinks.map((link) => {
                  return (
                    <div
                      className="relative h-full items-center group"
                      key={link.name}
                    >
                      <Link
                        href={link.href}
                        className={`${
                          link.active
                            ? "text-foreground"
                            : "text-foreground/60 hover:text-foreground"
                        } h-full flex items-center text-sm duration-200 ${name.className}`}
                      >
                        {link.name}
                      </Link>

                      <div
                        className={`absolute bottom-0 w-full transition-all duration-200 ${
                          link.active
                            ? "h-[2px] bg-primary"
                            : "h-[0px] group-hover:h-[2px] bg-foreground/50"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
