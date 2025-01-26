import React from "react";

interface ToolsProps {
  tools: [];
}

const Tools = ({ tools }: ToolsProps) => {
  return (
    <div className="flex items-center flex-wrap gap-y-2">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-white/5 rounded-lg px-3 py-1 text-white/45 text-xs me-1.5"
        >
          {tool}
        </div>
      ))}
    </div>
  );
};

export default Tools;
