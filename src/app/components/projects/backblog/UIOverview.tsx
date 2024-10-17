import Image from "next/image";
import LandingPage from "/public/LandPage.png";
import LogPage from "/public/LogPage.png";
import MoviePage from "/public/MovieInfo.png";
import ResultsPage from "/public/ResultsPage.png";
import Link from "next/link";
import { memo } from "react";

const pages = [
  { src: LandingPage, alt: "Landing Page", label: "Home Page" },
  { src: LogPage, alt: "Log Page", label: "Log Page" },
  { src: ResultsPage, alt: "Results Page", label: "Search Results Page" },
  { src: MoviePage, alt: "Movie Page", label: "Movie Page" },
];

const UIOverview = () => (
  <div className="h-full bg-white/5 p-5 rounded-xl text-neutral-300">
    <h2 className="text-2xl font-semibold text-neutral-200 mb-2">
      User Interface
    </h2>
    <p className="my-4">
      Here are a few core pages showcasing the app&apos;s user interface. I will
      discuss the reasoning behind this user interface in a later section.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {pages.map(({ src, alt, label }, index) => (
        <div key={index} className="flex-1 min-w-[250px] max-w-[300px] p-2">
          <Image
            src={src}
            alt={alt}
            placeholder="blur"
            className="rounded-md"
          />
          <p className="text-center mt-2 text-neutral-400">{label}</p>
        </div>
      ))}
    </div>

    <p className="mt-4">
      The full set of Figma prototypes can be found{" "}
      <Link
        href="https://www.figma.com/design/zuyfQoJfjZdQgTT1U7z4JF/BackBlog1?node-id=2380-2018&t=rWccTdd83zasEWg3-1"
        target="_blank"
        prefetch={false}
        className="text-blue-500 hover:underline"
      >
        here
      </Link>
    </p>
  </div>
);

export default memo(UIOverview);
