import Image from "next/image";
import Link from "next/link";
import Goyangi from "/public/goyangi.jpg";
import WatchTower from "/public/watchtower.jpg";

const OtherProjects = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-gray-100 mb-4">
          Other Projects
        </div>
        <Link
          href="/projects/"
          className="flex items-end hover:underline text-white"
        >
          <div className="font-semibold text-gray-400 mb-4">See more</div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
        <Link href="" prefetch={false}>
          <div className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg backdrop-blur-lg rounded-lg p-5 mb-4">
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full">
                {/* Project Image */}
                <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                  <Image
                    src={Goyangi}
                    alt="Goyangi"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col w-full">
                  <p className="block text-gray-200 text-lg font-bold">
                    Goyangi
                  </p>
                  <p className="block text-gray-400">
                    A social network for cat photos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="" prefetch={false}>
          <div className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg backdrop-blur-lg rounded-lg p-5">
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full">
                {/* Project Image */}
                <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
                  <Image
                    src={WatchTower}
                    alt="WatchTower"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="flex flex-col w-full">
                  <p className="block text-gray-200 text-lg font-bold">
                    WatchTower
                  </p>
                  <p className="block text-gray-400">
                    A security camera livestream
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default OtherProjects;
