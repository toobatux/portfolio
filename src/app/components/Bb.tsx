import Image from "next/image";
import Link from "next/link";
import React from "react";
import Batman from "../../../public/thebatman.jpg";
import Avatar from "../../../public/tom2.jpg";

const Bb = () => {
  return (
    <Link
      href="/work/backblog"
      className="flex w-full h-full z-0 items-center justify-center"
    >
      <div className={`flex w-full transition-all mx-auto`}>
        <div className="relative group flex flex-col w-full h-120 border-2 border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden mx-auto items-center justify-between p-12 transition-all gap-12 rounded-[24px]">
          <div className="flex flex-col w-full justify-center text-white items-center me-2">
            <div className="text-sm text-white/65 transition-all mb-4">
              Featured Work
            </div>
            <div
              className={`text-4xl transition-all text-center font-semibold`}
            >
              BackBlog Movie Tracker
            </div>
            <div className="mt-8 text-sm md:text-base text-white/50 bg-black border-2 border-white/10 group-hover:bg-white group-hover:text-black transform-colors duration-300 px-4 py-2 rounded-full">
              Learn more
            </div>
          </div>
          <div className="flex w-full group-hover:-translate-y-2 transition-all bg-white/5 border border-white/5 rounded-[24px] p-5">
            <div className="relative min-w-40 h-24 rounded overflow-hidden me-5">
              <Image
                src={Batman}
                alt="The Batman"
                fill
                sizes="(max-width: 48px)"
                className="object-cover"
              />
            </div>
            <div className="flex w-full items-center justify-between text-white text-xl">
              <div>The Batman</div>
              <div className="relative w-14 h-14 rounded overflow-hidden">
                <Image
                  src={Avatar}
                  alt="Avatar"
                  fill
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Bb;
