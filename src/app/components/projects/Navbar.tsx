import Image from "next/image";
import Link from "next/link";
import Batman from "/public/batman.jpg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur-md flex border-b border-white/5">
      <div className="flex w-full justify-center mx-2">
        <div className="flex-auto max-w-[80rem]">
          <div className="py-4">
            <div className="relative flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative min-w-10 h-10 rounded-xl overflow-hidden">
                  <Image src={Batman} alt="Tom Krusinski" fill />
                </div>
                <div className="text-gray-200 font-bold">Tom Krusinski</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
