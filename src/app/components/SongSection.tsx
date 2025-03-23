import Image, { StaticImageData } from "next/image";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Explicit from "@mui/icons-material/Explicit";
import TFT from "/public/TFT.jpg";
import TFT2 from "/public/TFT2.jpg";
import Joji from "/public/joji.jpg";
import DawnFM from "/public/dawnfm.jpg";
import Link from "next/link";

const SongSection = () => {
  return (
    <>
      <Song
        link="https://open.spotify.com/track/1XBYiRV30ykHw5f4wm6qEn?si=f84b04f97d034830"
        bgColor="bg-[#9b6b42]"
        src={TFT}
        alt="THE FIRST TIME"
        title="NIGHTS LIKE THIS"
        artist="The Kid LAROI"
        isExplicit={false}
      />
    </>
  );
};

export default SongSection;

interface SongProps {
  link: string;
  bgColor: string;
  src: StaticImageData;
  alt: string;
  title: string;
  artist: string;
  isExplicit: boolean;
}

const Song = ({
  link,
  bgColor,
  src,
  alt,
  title,
  artist,
  isExplicit,
}: SongProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      prefetch={false}
      className="rounded-[24px] overflow-hidden"
    >
      <div className="flex max-h-[9rem] border border-black/10 dark:border-white/10 shadow-xl overflow-hidden bg-white dark:bg-white/5 backdrop-blur-3xl group transition-colors duration-200 rounded-[24px] p-5">
        <div className="flex items-center w-full">
          <div className="relative w-24 h-24 rounded overflow-hidden me-5">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 48px)"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-black/65 dark:text-white/65">Top Song of 2024</p>
            <p className="block dark:text-white text-base font-medium group-hover:underline">
              {title}
            </p>
            <p className="text-black/65 dark:text-white/65">{artist}</p>
          </div>
        </div>
        <div className="text-black/50 dark:text-white/50 app-bg border border-black/20 dark:border-white/20 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black rounded-full p-2 w-[36px] h-[36px] flex items-center justify-center transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 50 50"
            className="dark:fill-white/50 fill-black/50 group-hover:fill-white dark:group-hover:fill-black transition-colors"
          >
            <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};
