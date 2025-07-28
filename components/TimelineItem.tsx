// // components/TimelineItem.tsx
// 'use client';
// import { motion } from 'framer-motion';

// interface TimelineItemProps {
//   direction: 'left' | 'right';
//   year: string;
//   title: string;
//   description: string;
// }

// const TimelineItem = ({ direction, year, title, description }: TimelineItemProps) => {
//   const isLeft = direction === 'left';

//   return (
//     <div className={`relative w-full flex ${isLeft ? 'justify-start' : 'justify-end'} mb-10`}>
//       <motion.div
//         initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-5/12 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
//       >
//         <p className="text-sm text-teal-500 font-bold">{year}</p>
//         <h3 className="text-xl font-semibold mt-1 mb-2">{title}</h3>
//         <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
//       </motion.div>
//     </div>
//   );
// };

// export default TimelineItem;

// components/TimelineItem.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  direction: 'left' | 'right';
  bullets?: string[]; // optional bullets for 'read more'
}

const TimelineItem = ({ year, title, description, direction, bullets }: TimelineItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLeft = direction === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`w-full md:w-1/2 px-4 py-6 relative ${isLeft ? 'ml-auto' : 'mr-auto'}`}
    >
      <div className="bg-white dark:bg-neutral-800 shadow-xl rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-2xl transition-all duration-300">
        <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">{year}</h4>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p>

        {bullets && bullets.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 flex items-center text-sm text-teal-600 hover:underline"
            >
              {expanded ? 'Show less' : 'Read more'}
              {expanded ? (
                <ChevronUp className="w-4 h-4 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1" />
              )}
            </button>
            {expanded && (
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                {bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
