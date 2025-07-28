// // components/MobileUX.tsx
// import { motion } from 'framer-motion';

// const apps = [
//   { name: 'Tiffin Tribe', detail: 'Mobile ordering experience built with React Native.' },
//   { name: 'Nike App Redesign', detail: 'Complete UX revamp focused on accessibility.' },
//   { name: 'Fitness App Revamp', detail: 'Cleaned UI flow and built gesture-based navigation.' },
// ];

// export default function MobileUX() {
//   return (
//     <section id="mobile" className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
//       <h2 className="text-3xl font-bold text-center mb-12">Mobile App UX Work</h2>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {apps.map((app, i) => (
//           <motion.div
//             key={i}
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 40 }}
//             transition={{ delay: i * 0.2, duration: 0.5 }}
//             className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//           >
//             <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
//             <p className="text-gray-600 dark:text-gray-300">{app.detail}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// components/MobileUX.tsx
import UXCard from './UXCard';

const uxProjects = [
  {
    title: 'UI/UX Design for Food Ordering App',
    summary: 'Figma, Wireframes + interactive prototyping',
    details: 'Designed a responsive food-ordering app in Figma after conducting surveys, interviews, and SWOT analysis; developed user personas, flows, and wireframes for intuitive mobile UX.',
    emoji: '🥗',
    link: 'https://yourfigma.link/trading-ui'
  },
  {
    title: 'Child Adoption App',
    summary: 'Figma, Interactive Prototype + logo design',
    details: 'Designed a high-fidelity, interaction-rich prototype in Figma for a child adoption platform, focused on clarity, accessibility, crafted user flows to simplify discovery, eligibility checks, and application steps.',
    emoji: '🧒',
    link: 'https://yourfigma.link/admin-redesign'
  },
  {
    title: 'Nike App Redesign - UX Case Study',
    summary: 'Moqups, wireframes, prototypes & UX reserach',
    details: 'Conducted a UX audit and Redesigned Nike’s app using Moqups, mapped user flows, built wireframes, and iterated prototypes based on usability feedback to streamline browsing and checkout',
    emoji: '👟'
    // No link here – optional
  }
];


export default function MobileUX() {
  return (
    <section id="mobileux" className="py-20 px-4 bg-gray-50 dark:bg-neutral-950">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        UX & Mobile UI works
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {uxProjects.map((item, idx) => (
          <UXCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
