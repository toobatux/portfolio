import Image, { StaticImageData } from "next/image";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Explicit from "@mui/icons-material/Explicit";
import TFT from "/public/TFT.jpg";
import TFT2 from "/public/TFT2.jpg";
import Joji from "/public/joji.jpg";
import Link from "next/link";

interface SongSectionProps {
  setBackground: (color: string) => void;
}

const SongSection = ({ setBackground }: SongSectionProps) => {
  return (
    <>
      <p className="text-2xl font-semibold text-gray-200 mb-4">
        Songs for 3 AM
      </p>
      <Song
        setBackground={setBackground}
        link="https://www.youtube.com/watch?v=dFr4NU9C0HE"
        bgColor="bg-[#9b6b42]"
        src={TFT}
        alt="THE FIRST TIME"
        title="NIGHTS LIKE THIS"
        artist="The Kid LAROI"
        isExplicit={false}
      />
      <Song
        setBackground={setBackground}
        link="https://www.youtube.com/watch?v=p03BfZWGKDw"
        bgColor="bg-[#6b5f3e]"
        src={TFT2}
        alt="THE FIRST TIME (Deluxe)"
        title="NIGHTS LIKE THIS PT 2"
        artist="The Kid LAROI"
        isExplicit={true}
      />
      <Song
        setBackground={setBackground}
        link="https://www.youtube.com/watch?v=kIEWJ1ljEro"
        bgColor="bg-[#3999bf]"
        src={Joji}
        alt="SMITHEREENS"
        title="Die For You"
        artist="Joji"
        isExplicit={false}
      />
    </>
  );
};

export default SongSection;

interface SongProps {
  setBackground: (color: string) => void;
  link: string;
  bgColor: string;
  src: StaticImageData;
  alt: string;
  title: string;
  artist: string;
  isExplicit: boolean;
}

const Song = ({
  setBackground,
  link,
  bgColor,
  src,
  alt,
  title,
  artist,
  isExplicit,
}: SongProps) => {
  return (
    <Link href={link} target="_blank" prefetch={false}>
      <div
        className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
        onMouseEnter={() => setBackground(bgColor)}
        onMouseLeave={() => setBackground("bg-slate-800")}
      >
        <div className="flex items-center w-full">
          <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
          <div className="flex flex-col w-full">
            <p className="block text-gray-100 font-semibold">{title}</p>
            <div className="flex items-center">
              {isExplicit && (
                <Explicit fontSize="small" className="text-gray-400 me-1" />
              )}
              <p className="text-gray-400">{artist}</p>
            </div>
          </div>
          <div className="text-gray-200 ml-auto">
            <ArrowOutward fontSize="small" />
          </div>
        </div>
      </div>
    </Link>
  );
};
