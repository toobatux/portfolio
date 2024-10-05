import Image, { StaticImageData } from "next/image";

interface TitleCardProps {
  src: StaticImageData;
  title: string;
  date: string;
  tools: string[];
}

const TitleCard = ({ src, title, date, tools }: TitleCardProps) => {
  return (
    // <div className="h-full bg-white/5 p-5 rounded-xl mb-4 py-6 px-4">
    <>
      <div className="flex items-center w-full mb-2">
        {/* Project Image */}
        <div className="relative max-w-24 max-h-24 min-w-16 min-h-16 rounded-full overflow-hidden me-4">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>

        {/* Title */}
        <div className="flex flex-col w-full">
          <p className="block text-gray-200 text-4xl font-bold">{title}</p>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex mt-4 items-center">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-full px-3 py-1 text-gray-300 me-1.5"
          >
            {tool}
          </div>
        ))}
      </div>
    </>
    // </div>
  );
};

export default TitleCard;
