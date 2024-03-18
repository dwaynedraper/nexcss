// React/Next imports
import React from "react";

// Component imports

// Other imports
import { cva, type VariantProps } from "class-variance-authority";

const container = cva("div", {
  variants: {
    intent: {
      default: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "default", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "default",
    size: "medium",
  },
});

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
}

export default function Container({
  children,
  fluid,
  className,
}: ContainerProps): JSX.Element {
  return <div className={container({ className })}>Container</div>;
}
