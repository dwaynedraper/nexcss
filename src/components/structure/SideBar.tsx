// React/Next imports
import React from "react";

// Component imports

// Other imports

interface SideBarProps {
  className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  return <aside className={`${className}`}>SideBar</aside>;
}
