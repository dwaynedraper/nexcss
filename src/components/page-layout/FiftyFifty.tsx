// React/Next imports
import React from "react";

// Component imports

// Other imports

interface FiftyFiftyProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * FiftyFifty layout displays two children stacked in mobile views,
 * and side by side in md: or larger views.
 * @param {React.ReactNode} children - Exactly two children
 * @param {string} className - Optional className
 * @returns {JSX.Element}
 */
export default function FiftyFifty({ children, className }: FiftyFiftyProps) {
  // Create an array from the children
  const childrenArray = React.Children.toArray(children);
  return (
    <section className={`flex w-full ${className}`}>
      <div className="w-full md:w-1/2">{childrenArray[0]}</div>
      <div className="w-full md:w-1/2">{childrenArray[1]}</div>
    </section>
  );
}
