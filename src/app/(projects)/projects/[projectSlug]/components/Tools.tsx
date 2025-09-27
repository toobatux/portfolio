import { IBM_Plex_Mono } from "next/font/google";
import React from "react";

interface ToolsProps {
  tools: string[];
}

const font = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Tools = ({ tools }: ToolsProps) => {
  return (
    <div
      className={`${font.className} flex items-center flex-wrap gap-y-2 gap-x-2`}
    >
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center bg-white/5 lowercase rounded-lg px-3 py-1.5 text-white/60 text-[10px] md:text-xs"
        >
          {tool}
        </div>
      ))}
    </div>
  );
};

export default Tools;
