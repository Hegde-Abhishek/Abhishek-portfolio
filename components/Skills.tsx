// components/Skills.tsx
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'GraphQL', level: 'Intermediate' },
  { name: 'WebSockets', level: 'Advanced' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'Docker', level: 'Intermediate' },
  { name: 'Figma', level: 'UX/UI' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Skills I Use To Build Magic</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold">{skill.name}</h4>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
