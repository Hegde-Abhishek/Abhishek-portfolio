// components/About.tsx
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'Frontend Dev @ Novel Office',
    detail: 'Boosted SEO and traffic by 80% with responsive web redesigns.',
    align: 'left',
  },
  {
    year: '2020–22',
    title: 'Full-stack Dev @ Legato',
    detail: 'Built 10+ SPAs with React, Angular, Node.js, improving UX + performance.',
    align: 'right',
  },
  {
    year: '2024–25',
    title: 'Software Engineer @ Sókn Engineering',
    detail: 'Built OHLC dashboards, AI bots, and live alert systems.',
    align: 'left',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-16">My Journey So Far</h2>
      <div className="relative max-w-5xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-400 dark:before:bg-gray-700">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className={`mb-12 flex ${item.align === 'left' ? 'justify-start pr-10' : 'justify-end pl-10'} relative`}
            initial={{ opacity: 0, x: item.align === 'left' ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md w-[85%]">
              <h3 className="font-semibold text-lg mb-1">{item.year} — {item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
