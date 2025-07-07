import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
// import Skills from '@/components/Skills';
// import Stats from '@/components/Stats';
// import MobileUX from '@/components/MobileUX';
// import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white transition-colors">
      <Hero />
      <About />
      <Projects />
      {/* <Skills />
      <Stats />
      <MobileUX />
      <Contact /> */}
    </main>
  );
}