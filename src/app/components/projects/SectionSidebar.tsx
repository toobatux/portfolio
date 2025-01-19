"use client";

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
    <>
      <div className="text-white/90 font-semibold mb-2 px-2">On this page</div>
      <div className="flex flex-col space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleScroll(e, section.id)}
            className="flex items-center  hover:bg-white/10 rounded-lg p-2"
          >
            <p className="block text-sm text-white/55">{section.title}</p>
          </a>
        ))}
      </div>
    </>
  );
}
