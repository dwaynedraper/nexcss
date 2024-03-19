// React/Next imports
import React from "react";

// Component imports

// Other imports

interface ChatBarProps {
  className?: string;
}

export default function ChatBar({ className }: ChatBarProps) {
  return <section className={`${className}`}>Chat Bar</section>;
}
