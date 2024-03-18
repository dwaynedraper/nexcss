// React/Next imports
import React from "react";

// Component imports

// Other imports

interface FooterProps {
  children?: React.ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return <footer>{children}</footer>;
}
