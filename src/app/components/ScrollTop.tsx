"use client";
import { ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true); // Show the button when scrolled down
      } else {
        setIsVisible(false); // Hide the button when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center px-8 py-4 rounded-full text-white/75 text-sm hover:bg-white/10 hover:underline transition-colors backdrop-blur-lg"
      >
        <span className="me-1">Back to top </span>
        <ArrowUpward fontSize="small" />
      </button>
    )
  );
};

export default ScrollTop;
