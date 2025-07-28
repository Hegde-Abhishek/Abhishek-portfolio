// // components/Hero.tsx
// import { motion } from 'framer-motion';
// import ResumeModal from './ResumeModal';

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black to-gray-900 text-white">
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold"
//       >
//         Hi, I'm <span className="text-teal-400">Abhishek Hegde</span> 👋
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="mt-4 text-lg md:text-2xl max-w-xl"
//       >
//         A full-stack engineer with frontend finesse and backend power. Front to back, I do it all, I build fast, scalable, real-time apps that look damn good.
//       </motion.p>
       
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 0.6 }}
//         className="mt-6 flex gap-4 flex-wrap justify-center"
//       >
//         <a href="#projects" className="bg-teal-400 text-black px-5 py-2 rounded-full hover:scale-105 transition">
//           View Projects
//         </a>
//         {/* <a href="/resume.pdf" target="_blank" className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
//           Download Resume
//         </a> */}
//         <ResumeModal />
//         <a href="#contact" className="px-5 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
//           Let’s Connect
//         </a>
//       </motion.div>
//     </section>
    
//   );
// }
// components/Hero.tsx
// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import ResumeModal from './ResumeModal';
// Removed Particles and all tsparticles related imports/states

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 text-white overflow-hidden">
      {/* CSS Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animated-blob blob-1"></div>
        <div className="animated-blob blob-2"></div>
        <div className="animated-blob blob-3"></div>
        <div className="animated-blob blob-4"></div>
        <div className="animated-blob blob-5"></div>
      </div>

      {/* Hero Content - Ensure relative and z-index for visibility */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-6xl font-bold z-10"
      >
        Hi, I'm <span className="text-teal-400">Abhishek Hegde</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative mt-4 text-lg md:text-2xl max-w-xl z-10"
      >
        A full-stack engineer with frontend finesse and backend power. Front to back, I do it all, I build and ship fast, scalable, real-time apps that look damn good.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative mt-6 flex gap-4 flex-wrap justify-center z-10"
      >
        <a href="#projects" className="bg-teal-400 text-black px-5 py-2 rounded-full hover:scale-105 transition font-medium">
          View Projects
        </a>
        <ResumeModal />
        <a href="#contact" className="px-5 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition font-medium">
          Let’s Connect
        </a>
      </motion.div>
    </section>
  );
}
