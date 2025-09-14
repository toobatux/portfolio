"use client";

import { useEffect, useState } from "react";

interface SectionSidebarProps {
  sections: string[];
}

// Smooth Scrolling Function
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();

  const section = document.getElementById(id);
  const navbarHeight = 100;

  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
};

export default function SectionSidebar({ sections }: SectionSidebarProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Intersection Observer callback to detect when a section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      },
      {
        rootMargin: "-100px 0px -50% 0px", // Trigger when 50% of the section is in view
        threshold: 0.1,
      }
    );

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <>
      <div className="text-white/90 font-semibold mb-2 px-2">On this page</div>
      <div className="flex flex-col space-y-1">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            onClick={(e) => handleScroll(e, section.toLowerCase())}
            className="flex items-center group rounded-xl px-2 py-1"
          >
            <p
              className={`block text-sm group-hover:underline ${
                activeSection === section.toLowerCase()
                  ? "text-white"
                  : "text-white/50"
              }`}
            >
              {section}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
