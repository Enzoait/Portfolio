import React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type AllowedColors = "primary" | "sky-500";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tailwind color token for the dot. Use tokens like "sky-500", "emerald-500", etc.
   * Note: We map to static classes so Tailwind can generate the CSS.
   */
  color?: AllowedColors;
}

const colorToBgClass: Record<AllowedColors, string> = {
  primary: "bg-primary",
  "sky-500": "bg-sky-500",
};

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, color = "sky-500", ...props }, ref) => {
  const dotBg = colorToBgClass[color] ?? "bg-sky-500";
  return (
    <button
      ref={ref}
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
            dotBg
          )}
        ></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
