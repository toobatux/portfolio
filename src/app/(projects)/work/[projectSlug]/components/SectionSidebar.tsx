"use client";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, TextPlugin);

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

  const sectionsContainer = useRef<HTMLUListElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.timeScale(3.5);

      if (!sectionsContainer.current) return;

      const sectionItems = gsap.utils.toArray(
        sectionsContainer.current.querySelectorAll("li > a > p")
      );

      gsap.set(sectionItems, {
        y: 10,
        opacity: 0,
        filter: "blur(2px)",
      });

      tl.to(
        sectionItems,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.3,
        },
        "-=0.5"
      );
    },
    { scope: sectionsContainer, dependencies: [sections] }
  );

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
      <ul className="flex flex-col space-y-1" ref={sectionsContainer}>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              onClick={(e) => handleScroll(e, section.toLowerCase())}
              className="flex items-center group rounded-xl px-2 py-1"
            >
              <p
                className={`block text-sm group-hover:underline transition-colors duration-300 ${
                  activeSection === section.toLowerCase()
                    ? "text-white"
                    : "text-white/50"
                }`}
              >
                {section}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
