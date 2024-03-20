// React/Next imports
import React from "react";

// Component imports
import Header from "@/components/structure/Header";
import Footer from "@/components/structure/Footer";
import SideBar from "./SideBar";
import ChatBar from "./ChatBar";

// Other imports

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <section className="">
        <div className="container flex w-full mx-auto">
          <SideBar className="hidden" />
          <main className="w-full">{children}</main>
          <ChatBar className="hidden" />
        </div>
      </section>
      <Footer />
    </>
  );
}
