"use client";
import Image from "next/image";
import Link from "next/link";
import Batman from "/public/batman.jpg";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavItems } from "./NavItems";

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
      className={`fixed top-0 z-40 w-full backdrop-blur-lg flex transition-all duration-300 border-b border-white/5 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full">
        <div className="flex-auto max-w-7xl mx-auto">
          <div className="">
            <div className="relative flex w-full justify-between px-8 lg:px-12 py-6 transition-all">
              <Link href="/" className="flex items-center">
                <div className="text-white">T/K</div>
              </Link>
              <div className="flex gap-4 items-center">
                {navLinks.map((link) => {
                  return (
                    <Link
                      href={link.href}
                      key={link.name}
                      className={
                        link.active
                          ? "text-white underline ps-2"
                          : "text-white/65 hover:underline hover:text-white no-underline ps-2 transition-colors"
                      }
                    >
                      {link.name}
                    </Link>
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
