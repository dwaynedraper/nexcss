import Image from "next/image";
import { Inter, Lalezar } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const lalezar = Lalezar({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div
        className={` flex flex-col items-center space-y-2 text-4xl text-gray-800 tracking-wide ${lalezar.className}`}
      >
        <h1
          className={`text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#0066ff] ${lalezar.className}`}
        >
          NexCSS
        </h1>
        <h2>The next paradigm for CSS</h2>
        <h2>
          The <span className="gradientText">nexus</span> of your design and
          development systems
        </h2>
        <h2>
          Designed for the <span className="gradientText">Next.js</span>{" "}
          framework
        </h2>
      </div>
    </main>
  );
}
