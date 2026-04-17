"use client";

import { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxChars?: number;
  className?: string;
}

export default function ReadMore({ text, maxChars = 280, className = "" }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxChars) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div>
      <p className={className}>
        {expanded ? text : text.slice(0, maxChars).trim() + "…"}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm font-semibold text-green-700 hover:text-green-800 underline underline-offset-2 transition-colors"
      >
        {expanded ? "Réduire" : "Lire plus"}
      </button>
    </div>
  );
}
