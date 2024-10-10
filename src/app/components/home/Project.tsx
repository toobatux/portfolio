import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
  setBackground: (color: string) => void;
  link: string;
  bgColor: string;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  tools: string[];
}

export default function Project({
  setBackground,
  link,
  bgColor,
  src,
  alt,
  title,
  description,
  tools,
}: ProjectProps) {
  return (
    <Link href={link} prefetch={false}>
      <div
        className="flex items-center max-h-[9rem] bg-white/5 hover:bg-white/10 shadow-lg transition-colors duration-100 backdrop-blur-lg rounded-lg p-5 mb-4"
        onMouseEnter={() => setBackground(bgColor)}
        onMouseLeave={() => setBackground("bg-slate-800")}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center w-full mb-5">
            {/* Project Image */}
            <div className="relative min-w-12 h-12 rounded-lg overflow-hidden me-4">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>

            {/* Title and Subtitle */}
            <div className="flex flex-col w-full">
              <p className="block text-neutral-200 text-lg font-bold">
                {title}
              </p>
              <p className="block text-neutral-300">{description}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex py-1 items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-full px-3 py-1 text-neutral-400 me-1.5"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
