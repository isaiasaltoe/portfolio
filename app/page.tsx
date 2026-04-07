import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Experiences } from "./components/experiences";
import { Aboutme } from "./components/aboutme";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experiences />
      <Aboutme />
      <Contact />
    </main>
  );
}
