import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-fuchsia-600",
        "text-fuchsia-50",
        "hover:bg-fuchsia-800",
        "font-semibold",
      ],
      secondary: [
        "bg-orange-700",
        "text-slate-200",
        "border-gray-400",
        "hover:bg-orange-500",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-3", "px-6"],
    },
    rounded: {
      true: "rounded-md",
      false: "",
    },
  },
  compoundVariants: [{ intent: "primary", class: "capitalize" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  intent,
  size,
  rounded,
  ...props
}) => (
  <button
    type={props.type ?? "button"}
    className={`font-semibold ${button({ intent, size, rounded, className })}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;

// TODO: Finish adding the remaining props from the original Button component, as seen below:
{
  /*
  <button
    type="submit"
    className="px-3 py-2 text-sm font-semibold text-white border rounded-md shadow-sm bg-cyan-600 border-cyan-600 hover:bg-indigo-400 "
  >
    Save
  </button>

  -------------------------------------------------------------------------------------

  <button
    type="button"
    className="box-border px-3 py-2 text-sm font-semibold text-white border border-red-600 rounded-md"
  >
    Cancel
  </button>
*/
}
