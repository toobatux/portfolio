import React from "react";

interface ToolsProps {
  tools: string[];
}

const Tools = ({ tools }: ToolsProps) => {
  return (
    <div className="flex items-center flex-wrap gap-y-2 gap-x-2">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center bg-white/10 rounded px-3 py-1 text-black/45 dark:text-white/40 text-xs"
        >
          {tool}
        </div>
      ))}
    </div>
  );
};

export default Tools;
