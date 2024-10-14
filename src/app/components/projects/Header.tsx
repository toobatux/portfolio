import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  title: string;
  tagLine?: string;
  background: string;
  image: StaticImageData;
  tools: string[];
}

const Header = ({ title, tagLine, background, image, tools }: HeaderProps) => {
  return (
    <>
      <div
        className={`w-full h-40 md:h-64 ${background} bg-[size:20px_20px] bg-opacity-20 rounded-lg px-8`}
      >
        <div className="relative flex justify-between items-center h-full w-full">
          <div className="flex flex-col">
            <p className="block text-neutral-200 text-4xl font-bold">{title}</p>
            <p className="text-neutral-400 mt-1">{tagLine}</p>
          </div>
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 128px)"
              className="object-cover p-2"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex w-full mt-4">
          <div className="flex flex-col">
            <div className="flex items-center">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-full px-3 py-1 text-white/50 me-1.5"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
