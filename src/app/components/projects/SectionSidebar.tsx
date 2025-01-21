"use client";

import { useEffect, useState } from "react";

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
  const navbarHeight = 200;

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
        rootMargin: "-50% 0px", // Trigger when 50% of the section is in view
      }
    );

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
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
      <div className="text-white/90 font-semibold mt-4 mb-2 px-2">
        On this page
      </div>
      <div className="flex flex-col space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleScroll(e, section.id)}
            className="flex items-center group rounded-xl p-2"
          >
            <p
              className={`block text-sm group-hover:underline ${
                activeSection === section.id ? "text-white" : "text-white/55"
              }`}
            >
              {section.title}
            </p>
          </a>
        ))}
      </div>
    </>
  );
}
