import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import MobileUX from '@/components/MobileUX';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import MyJourney from '@/components/MyJourney';

export default function Home() {
  return (
    <main className="text-black dark:text-white transition-colors">
      {/* <Navbar /> */}
      <Hero />
      {/* <About /> */}
      <MyJourney />
      <Projects />
      <Skills />
      <Stats />
      <MobileUX />
      <Contact />
    </main>
  );
}