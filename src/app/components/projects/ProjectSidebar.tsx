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
      <div className="flex justify-between mb-6">
        <div className="text-2xl font-semibold text-neutral-100 flex items-center">
          Other Projects
        </div>
        <Link
          href="/projects/"
          className="flex text-white rounded-full hover:text-black hover:bg-white border-2 border-white/10 px-4 py-2 transition-all duration-300"
          prefetch={false}
        >
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
        {projects.map((project, index) => (
          <div key={index} className="mb-2">
            <Project
              img={project.img}
              title={project.title}
              tagLine={project.tagLine}
              link={project.link}
            />
          </div>
        ))}
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
