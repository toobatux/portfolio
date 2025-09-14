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
          More projects
        </div>
        <Link
          href="/work/"
          className="flex h-full items-end text-primary hover:underline"
          prefetch={false}
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="flex h-[102px] items-center bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-2 hover:bg-white/10 transition-colors">
        <div className="flex w-full p-3">
          <div className="flex flex-col gap-1 justify-center">
            <div className="text-white/90 font-medium">{title}</div>
            <div className="text-white/55 text-sm">{tagLine}</div>
          </div>
          <div className="text-white/90 ml-auto">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={title}
                sizes="(max-width: 48px)"
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
