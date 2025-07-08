// components/MobileUX.tsx
import { motion } from 'framer-motion';

const apps = [
  { name: 'Tiffin Tribe', detail: 'Mobile ordering experience built with React Native.' },
  { name: 'Nike App Redesign', detail: 'Complete UX revamp focused on accessibility.' },
  { name: 'Fitness App Revamp', detail: 'Cleaned UI flow and built gesture-based navigation.' },
];

export default function MobileUX() {
  return (
    <section id="mobile" className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Mobile App UX Work</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{app.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
