import { ArrowOutward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookPic from "/public/thisandobj.jpg";

const Book = () => {
  return (
    <>
      <Link
        href="https://www.google.com/books/edition/_/mIG-oAEACAAJ?hl=en"
        target="_blank"
        className="rounded-[24px] overflow-hidden"
      >
        <div className="flex max-h-[9rem] border border-white/10 shadow-xl bg-white/5 group transition-colors duration-200 rounded-[24px] p-5">
          <div className="flex items-center w-full">
            <div className="relative min-w-16 min-h-24 rounded overflow-hidden me-4">
              <Image
                src={BookPic}
                alt="book"
                fill
                sizes="(max-width: 48px)"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-white/65">Currently Reading</p>
              <p className="block text-white text-base line-clamp-2 font-medium group-hover:underline">
                this & Object Prototypes
              </p>
              <div className="flex items-center text-sm">
                <p className=" text-white/65">Kyle Simpson</p>
              </div>
            </div>
          </div>
          <div className="text-white/50 border border-white/20 app-bg group-hover:bg-white  group-hover:text-black rounded-full p-2 w-[36px] h-[36px] flex items-center justify-center transition-colors duration-200">
            <ArrowOutward fontSize="small" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
