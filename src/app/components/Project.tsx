import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ChevronRight from "@mui/icons-material/ChevronRight";

interface ProjectProps {
  date: string;
  link: string;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  tools: string[];
  isDisabled: boolean;
  background: string;
}

export default function Project({
  date,
  link,
  src,
  alt,
  title,
  description,
  tools,
  isDisabled,
  background,
}: ProjectProps) {
  const projectContent = (
    <div
      className={`flex flex-col md:flex-row md:gap-8 group ${
        isDisabled ? "pointer-events-none" : "hover:bg-white/5"
      } my-4 group transition-all duration-200 rounded-2xl p-5`}
    >
      {/* Project Image */}
      {/* <div className="relative w-full md:h-[200px] md:max-w-[300px] min-h-[200px] max-h-[300px] md:max-h-[360px] rounded-3xl overflow-hidden mb-4 md:mb-0 transition-all">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={900}
          className="object-cover w-full h-full rounded-xl bg-black transition-transform duration-300" // The image will now scale based on the container's width
        />
      </div> */}
      <div
        className={`flex w-full h-[220px] md:h-[200px] md:max-w-[300px] border border-white/5 justify-center ${background} rounded-xl mb-4 md:mb-0`}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          placeholder="blur"
          className="object-contain rounded-xl"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="flex flex-col h-[inherit] w-full justify-between md:my-2">
        <div className="flex flex-col flex-grow">
          <div className="space-y-2 mb-3">
            <p className="text-white/55">{date}</p>
            <p className="block text-white font-medium text-xl mb-2 article-title">
              {title}
            </p>
          </div>
          <p className="block text-white/50 mb-4 profile">{description}</p>
        </div>
        {!isDisabled && (
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            <div className="text-blue-400 text-xs learn-more">Learn more</div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <hr className="w-full border border-white/5" />
      {isDisabled ? (
        <div className="pointer-events-none">{projectContent}</div>
      ) : (
        <Link href={link} prefetch={false}>
          {/* <div className="flex flex-col md:flex-row md:gap-8 items-center group border-t border-t-white/10 transition-colors duration-200 backdrop-blur-lg py-8 px-0 md:px-0"> */}
          {projectContent}
        </Link>
      )}
    </>
  );
}
