import Image from "next/image";
import { Inter, Lalezar } from "next/font/google";
import Button from "@/components/base/Button";
import FiftyFifty from "@/components/page-layout/FiftyFifty";
import CTA from "@/components/page-layout/CTA";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const lalezar = Lalezar({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-12">
      <div
        className={` flex flex-col items-center space-y-2 text-4xl text-gray-800 tracking-wide ${lalezar.className}`}
      >
        <h1 className={`text-9xl mb-4 gradient-nex-css ${lalezar.className}`}>
          NexCSS
        </h1>
        <h2>The next paradigm for CSS</h2>
        <h2>
          The <span className="gradient-nex-css">nexus</span> of your design and
          development systems
        </h2>
        <h2>
          Designed for the <span className="gradient-nex-css">Next.js</span>{" "}
          framework
        </h2>
      </div>
      <Button>Push Me!!</Button>
      <FiftyFifty>
        <CTA />
      </FiftyFifty>
    </main>
  );
}
