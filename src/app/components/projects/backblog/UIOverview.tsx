import Image from "next/image";
import LandingPage from "/public/LandPage.png";
import LogPage from "/public/LogPage.png";
import MoviePage from "/public/MovieInfo.png";
import FirstIter from "/public/FirstIter.png";
import SecondIter from "/public/SecondIter.png";
import ResultsPage from "/public/ResultsPage.png";
import FinalIter from "/public/FinalIter.png";
import Link from "next/link";
import { memo } from "react";

const pages = [
  { src: LandingPage, alt: "Landing Page", label: "Home Page" },
  { src: LogPage, alt: "Log Page", label: "Log Page" },
  { src: ResultsPage, alt: "Results Page", label: "Search Results Page" },
  { src: MoviePage, alt: "Movie Page", label: "Movie Page" },
];

const UIOverview = () => (
  <div className="h-full">
    <h2 className="text-2xl font-semibold text-white/90 mb-2">
      User Interface
    </h2>
    <p className="my-4">
      Given the app&apos;s extensive feature set, it was essential to design it
      so that opportunities for confusion were minimized. I achieved this by
      maintaining consistency between pages and providing a clear visual
      hierarchy. Each page is structured into well-defined sections with
      appropriate headings in the same position on every page, ensuring a
      familiar navigation flow.
    </p>
    <p>
      Key functions on every page are behind buttons highlighted with a distinct
      light blue color, which contrasts with the background and makes them easy
      to recognize. It was also important that tasks and actions were
      streamlined so they can be done in as few steps as possible. Most tasks
      require no more than 3 clicks to complete. Users are given feedback via
      toast popups for success and error messages.
    </p>

    <div className="relative w-full overflow-hidden rounded-xl my-12">
      <Image
        src={FinalIter}
        alt="BackBlog"
        className="object-contain w-full h-full"
      />
      <div className="flex w-full justify-center mt-2 text-white/40">
        <p>Final Iteration</p>
      </div>
    </div>

    <p>
      The first iteration consisted of just a few pages and allowed our team to
      explore how various app features could be visually represented. While
      there were some issues, such as overlapping elements, inconsistent sizing,
      and a lack of focus on key features, this early version provided a
      valuable foundation for refinement.
    </p>

    <div className="w-full rounded-xl my-12">
      <Image src={FirstIter} alt="First Iteration" />
      <div className="flex w-full justify-center mt-2 text-white/40">
        <p>First Iteration</p>
      </div>
    </div>

    <p className="mb-4">
      The second iteration introduced several enhancements over the first,
      including a clearer separation of elements and the use of avatars to
      indicate which user added each movie. New pages, such as the movie details
      page, were also incorporated. However, the ability to easily create a new
      log from the landing page was still missing.
    </p>
    <p>
      Initially, logs were horizontally scrollable, allowing users to quickly
      view their contents. I had considered including additional log features,
      such as adding and shuffling, in this section; however, doing so resulted
      in a cluttered page. As a result, this approach was eventually replaced
      with a tile-based layout in the final version to create a cleaner design.
    </p>

    <div className="w-full rounded-xl my-12">
      <Image src={SecondIter} alt="Second Iteration" />
      <div className="flex w-full justify-center mt-2 text-white/40">
        <p>Second Iteration</p>
      </div>
    </div>

    <p>
      The first iteration featured about 8 fully designed screens and menus,
      while the final iteration was expanded to over 20, reflecting the
      increased complexity and improvements made throughout the process. Testing
      proved that the final prototype is very refined and supports the needs of
      our users well.
    </p>
  </div>
);

export default memo(UIOverview);
