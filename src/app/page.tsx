import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Stats } from "@/components/sections/Stats";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F5F5F2] overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <WhyHireMe />
        <Stats />
        <ContactCTA />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
