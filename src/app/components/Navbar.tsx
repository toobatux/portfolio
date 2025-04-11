import Image from "next/image";
import Link from "next/link";
import Batman from "/public/batman.jpg";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Work", href: "/work" },
  // { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 z-40 w-full bg-black flex">
      <div className="flex w-full justify-center px-6 py-4">
        <div className="flex-auto max-w-7xl">
          <div className="">
            <div className="relative flex justify-between">
              <Link href="/" className="flex items-center">
                <div className="text-white text-2xl font-bold">T/K</div>
              </Link>
              <div className="flex gap-4 items-center">
                {navLinks.map((link) => {
                  const isActive = pathName === link.href;

                  return (
                    <Link
                      href={link.href}
                      key={link.name}
                      className={
                        isActive
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
