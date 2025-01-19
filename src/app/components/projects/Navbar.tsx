import Image from "next/image";
import Link from "next/link";
import Batman from "/public/batman.jpg";
import { usePathname } from "next/navigation";

const navLinks = [{ name: "Projects", href: "/projects" }];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur-md flex border-b border-white/5">
      <div className="flex w-full justify-center m-2">
        <div className="flex-auto max-w-[80rem]">
          <div className="p-4">
            <div className="relative flex items-center">
              <Link href="/" className="flex items-center space-x-2 me-5">
                <div className="text-gray-200 font-bold">Home</div>
              </Link>
              {navLinks.map((link) => {
                const isActive = pathName === link.href;

                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={
                      isActive
                        ? "text-gray-200 font-bold underline ps-2 pe-2"
                        : "text-gray-200 font-bold no-underline ps-2 pe-2"
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
  );
};

export default Navbar;
