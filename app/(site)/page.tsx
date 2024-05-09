import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FunFact />
      <Testimonial />
      <Contact />
    </main>
  );
}
