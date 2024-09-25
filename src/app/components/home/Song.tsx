import Image from "next/image";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Explicit from "@mui/icons-material/Explicit";
import TFT from "/public/TFT.jpg";
import TFT2 from "/public/TFT2.jpg";
import Joji from "/public/joji.jpg";
import Link from "next/link";

interface SongProps {
  setBackground: (color: string) => void;
}

const Song = ({ setBackground }: SongProps) => {
  return (
    <>
      <p className="text-2xl font-semibold text-gray-200 mb-4">
        Songs for 3 AM
      </p>
      <Link
        href="https://www.youtube.com/watch?v=dFr4NU9C0HE"
        target="_blank"
        prefetch={false}
      >
        <div
          className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
          onMouseEnter={() => setBackground("bg-[#9b6b42]")}
          onMouseLeave={() => setBackground("bg-slate-800")}
        >
          <div className="flex items-center w-full">
            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
              <Image
                src={TFT}
                alt="THE FIRST TIME"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="block text-gray-100 font-semibold">
                NIGHTS LIKE THIS
              </p>
              <p className=" block text-gray-400">The Kid LAROI</p>
            </div>
            <div className="text-gray-200 ml-auto">
              <ArrowOutward fontSize="small" />
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="https://www.youtube.com/watch?v=p03BfZWGKDw"
        target="_blank"
        prefetch={false}
      >
        <div
          className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
          onMouseEnter={() => setBackground("bg-[#6b5f3e]")}
          onMouseLeave={() => setBackground("bg-slate-800")}
        >
          <div className="flex items-center w-full">
            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
              <Image
                src={TFT2}
                alt="THE FIRST TIME (Deluxe)"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="block text-gray-100 font-semibold">
                NIGHTS LIKE THIS PT 2
              </p>
              <div className="flex items-center">
                <Explicit fontSize="small" className="text-gray-400 me-1" />
                <p className="text-gray-400">The Kid LAROI</p>
              </div>
            </div>
            <div className="text-gray-200 ml-auto">
              <ArrowOutward fontSize="small" />
            </div>
          </div>
        </div>
      </Link>
      <Link
        href="https://www.youtube.com/watch?v=kIEWJ1ljEro"
        target="_blank"
        prefetch={false}
      >
        <div
          className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
          onMouseEnter={() => setBackground("bg-[#3999bf]")}
          onMouseLeave={() => setBackground("bg-slate-800")}
        >
          <div className="flex items-center w-full">
            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
              <Image src={Joji} alt="Joji" fill className="object-cover" />
            </div>
            <div className="flex flex-col w-full">
              <p className="block text-gray-100 font-semibold">Die For You</p>
              <div className="flex items-center">
                <p className="text-gray-400">Joji</p>
              </div>
            </div>
            <div className="text-gray-200 ml-auto">
              <ArrowOutward fontSize="small" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Song;
