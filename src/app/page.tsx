import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Github from "@/components/Github";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectPDFs from "@/components/ProjectPDFs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ProjectPDFs />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
