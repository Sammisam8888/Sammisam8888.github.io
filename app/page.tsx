import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Education />
      <Projects />

      <Contact />
    </main>
  );
}
