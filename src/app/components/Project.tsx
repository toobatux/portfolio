import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ChevronRight from "@mui/icons-material/ChevronRight";
import myFont from "../font/font";
import Tools from "../(projects)/work/[projectSlug]/components/Tools";

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
      className={`flex flex-col-reverse gap-2 rounded ${
        isDisabled ? "pointer-events-none" : ""
      } transition-all duration-200 pb-8`}
    >
      {/* Title and Subtitle */}
      <div className="flex flex-col h-[inherit] w-full justify-between my-3">
        <div className="flex flex-col flex-grow">
          <p className="text-white/60">{date}</p>
          <div className="space-y-1 mt-2 mb-5">
            <p
              className={`inline-block text-white font-medium text-xl article-title group-hover:underline line-clamp-2 overflow-ellipsis ${myFont.className}`}
            >
              {title}
            </p>
            <p className={`block text-white/60 profile ${myFont.className}`}>
              {description}
            </p>
          </div>
          <Tools tools={tools} />
        </div>
        {/* {!isDisabled && (
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            <div className="text-blue-400 text-xs learn-more">Learn more</div>
          </div>
        )} */}
      </div>
      <div
        className={`flex h-[220px] w-full md:max-w-full overflow-hidden justify-center ${background} md:mb-0 rounded-[24px] transition-all`}
      >
        <Image
          src={src}
          alt={alt}
          width={500}
          placeholder="blur"
          className="object-contain transition-all group-hover:scale-[1.02]"
        />
      </div>
      <hr className="md:hidden border border-white/10 mb-6" />
    </div>
  );

  return (
    <>
      {/* <hr className="w-full border border-white/10" /> */}
      {isDisabled ? (
        <div className="pointer-events-none">{projectContent}</div>
      ) : (
        <Link href={link} prefetch={false} className="group">
          {/* <div className="flex flex-col md:flex-row md:gap-8 items-center group border-t border-t-white/10 transition-colors duration-200 backdrop-blur-lg py-8 px-0 md:px-0"> */}
          {projectContent}
        </Link>
      )}
    </>
  );
}
