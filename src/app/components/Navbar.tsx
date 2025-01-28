import Image from "next/image";
import Link from "next/link";
import Batman from "/public/batman.jpg";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur-md flex border-b border-white/10">
      <div className="flex w-full justify-center m-2">
        <div className="flex-auto max-w-6xl">
          <div className="py-2 px-4">
            <div className="relative flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div className="text-white font-medium">tom krusinski</div>
              </Link>
              <div className="flex gap-4">
                {navLinks.map((link) => {
                  const isActive = pathName === link.href;

                  return (
                    <Link
                      href={link.href}
                      key={link.name}
                      className={
                        isActive
                          ? "text-white underline ps-2"
                          : "text-white/70 hover:underline hover:text-white no-underline ps-2 transition-colors"
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
