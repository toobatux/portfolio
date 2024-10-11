import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Project = {
  img: StaticImageData;
  title: string;
  tagLine: string;
  link: string;
};

interface ProjectSidebarProps {
  projects: Project[];
}

export default function ProjectSidebar({ projects }: ProjectSidebarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <div className="text-gray-100 text-lg font-semibold">
          Other Projects
        </div>
        <div className="flex lg:hidden">
          <Link
            href="/projects/"
            className="flex hover:underline text-gray-400 items-end"
          >
            <div className="text-gray-400 font-semibold">See more</div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 lg:block lg:space-x-0">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <Project
              img={project.img}
              title={project.title}
              tagLine={project.tagLine}
              link={project.link}
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <Link
          href="/projects/"
          className="flex items-end hover:underline text-gray-400 justify-center"
        >
          <div className="text-gray-400 font-semibold">See more</div>
        </Link>
      </div>
    </div>
  );
}

interface ProjectInterface {
  img: StaticImageData;
  title: string;
  tagLine: string;
  link: string;
}

const Project = ({ img, title, tagLine, link }: ProjectInterface) => {
  return (
    <Link href={link} prefetch={false}>
      <div className="flex flex-row lg:flex-col bg-white/5 hover:bg-white/10 shadow-lg backdrop-blur-lg rounded-lg p-4">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden me-4">
          <Image
            src={img}
            alt={title}
            sizes="(max-width: 48px)"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </div>
        {/* Text Container */}
        <div className="flex flex-col justify-center">
          <p className="block text-gray-200 text-lg font-bold lg:my-2">
            {title}
          </p>
          <p className="block text-gray-400 text-sm">{tagLine}</p>
        </div>
      </div>
    </Link>
  );
};
