import Image from "next/image";
import LandingPage from "/public/LandPage.png";
import LogPage from "/public/LogPage.png";
import MoviePage from "/public/MovieInfo.png";
import ResultsPage from "/public/ResultsPage.png";

const UIOverview = () => {
  return (
    <div className="h-full bg-white/5 p-5 rounded-xl text-gray-300">
      <div className="text-2xl font-semibold text-gray-200 mb-2">
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
              <Image src={LandingPage} alt="Landing Page" />
            </div>
            <p className="flex justify-center mt-2">Home Page</p>
          </div>
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image src={LogPage} alt="Log Page" />
            </div>
            <p className="flex justify-center mt-2">Log Page</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap p-1">
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image src={ResultsPage} alt="Results Page" />
            </div>
            <p className="flex justify-center mt-2">Search Results Page</p>
          </div>
          <div className="flex-1 p-2">
            <div className="flex max-w-64">
              <Image src={MoviePage} alt="Movie Page" />
            </div>
            <p className="flex justify-center mt-2">Movie Page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIOverview;