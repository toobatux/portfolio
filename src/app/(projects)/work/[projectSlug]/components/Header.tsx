import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  year?: string;
  image: StaticImageData;
  tools: string[];
  background: string;
}

const Header = ({ title, year, image, tools, background }: HeaderProps) => {
  return (
    <>
      <div className="space-y-4 md:space-y-6 mb-10">
        <div className="dark:text-white/60">{year}</div>
        <h1 className="dark:text-white text-2xl md:text-4xl font-semibold transition-transform">
          {title}
        </h1>
        <div className="flex items-center flex-wrap gap-y-2">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg px-3 py-1 text-white/45 text-xs me-1.5"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`relative w-full max-h-[25rem] overflow-hidden rounded-xl ${background}`}
      >
        <Image
          src={image}
          alt="Project Image"
          placeholder="blur"
          className="object-contain w-full h-full"
        />
      </div>
    </>
  );
};

export default Header;
