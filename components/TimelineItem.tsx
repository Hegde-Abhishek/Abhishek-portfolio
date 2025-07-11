// components/TimelineItem.tsx
'use client';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  direction: 'left' | 'right';
  year: string;
  title: string;
  description: string;
}

const TimelineItem = ({ direction, year, title, description }: TimelineItemProps) => {
  const isLeft = direction === 'left';

  return (
    <div className={`relative w-full flex ${isLeft ? 'justify-start' : 'justify-end'} mb-10`}>
      <motion.div
        initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-5/12 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
      >
        <p className="text-sm text-teal-500 font-bold">{year}</p>
        <h3 className="text-xl font-semibold mt-1 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
