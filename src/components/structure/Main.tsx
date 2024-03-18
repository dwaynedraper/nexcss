// React/Next imports
import React from "react";

// Component imports

// Other imports

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main>{children}</main>;
}
