import React from "react";

interface ToolsProps {
  tools: [];
}

const Tools = ({ tools }: ToolsProps) => {
  return (
    <div className="flex items-center flex-wrap gap-y-2 mb-8 md:mb-12">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="border-2 border-black/10 dark:border-white/10 rounded-xl px-3 py-1 text-black/45 dark:text-white/45 text-xs me-1.5"
        >
          {tool}
        </div>
      ))}
    </div>
  );
};

export default Tools;
