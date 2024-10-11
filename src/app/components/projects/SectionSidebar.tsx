import Link from "next/link";

interface Section {
  id: string;
  title: string;
}

interface SectionSidebarProps {
  sections: Section[];
}

// Smooth Scrolling Function
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();

  const section = document.getElementById(id);
  const navbarHeight = 64;

  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
};

export default function SectionSidebar({ sections }: SectionSidebarProps) {
  return (
    <div className="w-full">
      <div className="text-gray-100 text-lg font-semibold mb-4">
        On This Page
      </div>
      <div className="flex flex-col space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleScroll(e, section.id)}
            className="flex items-center bg-white/5 hover:bg-white/10 rounded-lg p-3"
          >
            <p className="block text-gray-200">{section.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
