import Image from "next/image";
import LandingPage from "/public/LandPage.png";
import LogPage from "/public/LogPage.png";
import MoviePage from "/public/MovieInfo.png";
import ResultsPage from "/public/ResultsPage.png";
import Link from "next/link";

const UIOverview = () => {
  return (
    <div className="h-full bg-white/5 p-5 rounded-xl text-neutral-300">
      <div className="text-2xl font-semibold text-neutral-200 mb-2">
        User Interface
      </div>
      <p className="block my-4">
        Here are a few core pages showcasing the app&apos;s user interface. I
        will further discuss the reasoning behind this user interface in a later
        section.
      </p>
      <div className="flex justify-center">
        <div className="flex flex-wrap p-1">
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image
                src={LandingPage}
                alt="Landing Page"
                placeholder="blur"
                loading="eager"
              />
            </div>
            <p className="flex justify-center mt-2 text-neutral-400">
              Home Page
            </p>
          </div>
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image
                src={LogPage}
                alt="Log Page"
                placeholder="blur"
                loading="eager"
              />
            </div>
            <p className="flex justify-center mt-2 text-neutral-400">
              Log Page
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap p-1">
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image
                src={ResultsPage}
                alt="Results Page"
                placeholder="blur"
                loading="eager"
              />
            </div>
            <p className="flex justify-center mt-2 text-neutral-400">
              Search Results Page
            </p>
          </div>
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image
                src={MoviePage}
                alt="Movie Page"
                placeholder="blur"
                loading="eager"
              />
            </div>
            <p className="flex justify-center mt-2 text-neutral-400">
              Movie Page
            </p>
          </div>
        </div>
      </div>
      <p className="block mt-4">
        The full set of Figma prototypes can be found{" "}
        <Link
          href="https://www.figma.com/design/zuyfQoJfjZdQgTT1U7z4JF/BackBlog1?node-id=2380-2018&t=rWccTdd83zasEWg3-1"
          target="_blank"
          prefetch={false}
          className="text-blue-500 hover:underline"
        >
          here
        </Link>
        . Please be sure to check out the third and final iteration under{" "}
        <em>Pages</em> on the left.
      </p>
    </div>
  );
};

export default UIOverview;
