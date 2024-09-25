"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur-lg flex border-b border-slate-800">
        <div className="flex w-full justify-center mx-6">
          <div className="flex-auto max-w-[80rem]">
            <div className="py-4">
              <div className="relative flex items-center">
                {navLinks.map((link) => {
                  const isActive = pathName === link.href;

                  return (
                    <Link
                      href={link.href}
                      key={link.name}
                      className={
                        isActive
                          ? "text-lg text-white font-bold ps-2 pe-2"
                          : "text-lg text-gray-400 font-bold ps-2 pe-2"
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
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar;
