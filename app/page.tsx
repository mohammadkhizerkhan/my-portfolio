"use client";

import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import ProjectSection from "@/components/Project";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import OpenSource from "@/components/OpenSource";
import Education from "@/components/Education";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ScrollToTop />
      <Navigation />
      <Hero />
      <Experience />
      <Skill />
      <ProjectSection />
      <OpenSource />
      <Education />
    </main>
  );
}
