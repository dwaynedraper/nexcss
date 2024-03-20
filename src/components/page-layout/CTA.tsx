// React/Next imports
import React from "react";

// Component imports
import Button from "@/components/base/Button";

// Other imports

interface CTAProps {
  className?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({
  className = "",
  heading = "Better Solutions for Business",
  subheading = "Call us today for a free consultation",
  buttonText = "Get Started",
  buttonHref = "#about",
}: CTAProps): React.ReactElement {
  return (
    <div className={`flex flex-col grow-0 justify-between ${className}`}>
      <h1 className="text-6xl font-bold">{heading}</h1>
      <h2 className="text-3xl">{subheading}</h2>
      <Button>{buttonText}</Button>
    </div>
  );
}
