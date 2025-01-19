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
      className={`flex flex-col md:flex-row md:gap-8 items-center group ${
        isDisabled ? "pointer-events-none" : "hover:bg-white/5"
      } my-2 group transition-all duration-200 rounded-2xl p-5`}
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
        className={`flex w-full max-h-[300px] md:h-[200px] md:max-w-[300px] justify-center ${background} rounded-xl mb-4 md:mb-0`}
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
      <div className="flex flex-col h-full w-full space-y-6">
        <div className="flex flex-col flex-grow">
          <p className="block text-white font-bold text-lg mb-2">{title}</p>
          <p className="block text-white/50 mb-4">{description}</p>
          <div className="flex items-center flex-wrap gap-y-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg px-3 py-1 text-white/40 text-xs me-1.5"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        {!isDisabled && (
          <div className="flex items-center mt-6 md:mt-12 gap-1">
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
