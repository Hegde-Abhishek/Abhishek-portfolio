// components/About.tsx
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'Frontend Dev @ Novel Office',
    detail: 'Boosted SEO and traffic by 80% with responsive web redesigns.',
  },
  {
    year: '2020–22',
    title: 'Full-stack Dev @ Legato',
    detail: 'Built 10+ SPAs with React, Angular, Node.js, improving UX + performance.',
  },
  {
    year: '2024–25',
    title: 'Real-time Engineer @ Sókn Engineering',
    detail: 'Designed OHLC dashboards, AI bots, and event-driven notification systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">My Journey So Far</h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-teal-400 pl-4"
          >
            <h3 className="text-xl font-semibold">{item.year} — {item.title}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
