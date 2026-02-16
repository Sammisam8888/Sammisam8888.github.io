import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TrainingCourses from "@/components/TrainingCourses";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <TrainingCourses />
      <Achievements />
      <Contact />
    </main>
  );
}
