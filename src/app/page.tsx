import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section: Pure Iron Man 169-frame canvas scrub animation */}
        <Hero />

        {/* Content Sections */}
        <div className="relative overflow-hidden">
          <About />
          <Work />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
