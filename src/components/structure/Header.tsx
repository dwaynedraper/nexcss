// React/Next imports
import Image from "next/image";
import React from "react";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({ subsets: ["latin"], weight: ["400"] });

// Component imports
import AuthBar from "@/components/structure/AuthBar";

// Other imports

export default function Header() {
  return (
    <header className={`flex justify-between items-center h-24`}>
      <div className={`flex justify-between container mx-auto text-xl`}>
        <div
          className={`text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#0066ff] ${lalezar.className}`}
        >
          x
        </div>
        <nav
          className={`space-x-24 flex items-center justify-between text-2xl`}
        >
          <div>Home</div>
          <div>About</div>
          <div>Pricing</div>
        </nav>
        <AuthBar />
      </div>
    </header>
  );
}
