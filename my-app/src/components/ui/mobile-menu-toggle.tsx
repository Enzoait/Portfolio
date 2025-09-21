"use client";

import { useCallback, useState } from "react";

type Props = {
  targetId: string;
  text: string;
  className?: string;
};

export function MobileMenuToggle({ targetId, text, className }: Props) {
  const [expanded, setExpanded] = useState(false);

  const onClick = useCallback(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.classList.toggle("hidden");
    setExpanded((prev) => !prev);
  }, [targetId]);

  return (
    <button
      type="button"
      aria-controls={targetId}
      aria-expanded={expanded}
      onClick={onClick}
      className={
        className ??
        "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      }
    >
      <span className="sr-only">{text}</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}
