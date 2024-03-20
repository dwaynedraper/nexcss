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
    <header className={`bg-brand-dark text-brand-light`}>
      <div
        className={` container mx-auto flex justify-between items-center text-xl h-16`}
      >
        <div className="flex items-center">
          <div
            className={`text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#0066ff] ${lalezar.className}`}
          >
            x
          </div>
        </div>
        <nav
          className={`space-x-24 flex items-center justify-between font-montserrat uppercase`}
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
