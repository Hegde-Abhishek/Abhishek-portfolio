'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface UXCardProps {
  title: string;
  summary: string;
  details: string;
  emoji: string;
  link?: string;
}

export default function UXCard({ title, summary, details, emoji, link }: UXCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full sm:w-[300px] h-[220px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => window.innerWidth > 768 && setFlipped(true)}
      onMouseLeave={() => window.innerWidth > 768 && setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full transform-style-preserve-3d"
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white dark:bg-neutral-800 rounded-xl shadow-md p-5 text-center flex flex-col items-center justify-center backface-hidden">
          <div className="text-4xl mb-2">{emoji}</div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{summary}</p>
          <p className="text-xs text-teal-600 mt-2">↺ Flip to see more</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-teal-700 text-white rounded-xl p-4 flex flex-col justify-center items-center rotateY-180 backface-hidden text-sm">
          <p className="mb-2">{details}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-3 py-1 bg-white text-teal-700 font-semibold text-sm rounded hover:bg-teal-200 transition"
            >
              View Prototype
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
