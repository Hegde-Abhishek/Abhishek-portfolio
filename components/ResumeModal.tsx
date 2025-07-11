'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
      >
        View Resume
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-900 max-w-4xl w-full rounded-xl overflow-hidden shadow-lg relative"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Resume</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500">
                  <X size={24} />
                </button>
              </div>

              <div className="p-4 overflow-y-auto max-h-[80vh]">
                <iframe
                  src="/Abhishek_Hegde - Resume.pdf"
                  className="w-full h-[70vh] rounded"
                  title="Abhishek Resume"
                ></iframe>
              </div>

              <div className="px-6 py-4 flex justify-end border-t border-gray-300 dark:border-gray-700">
                <a
                  href="/Abhishek_Hegde_Resume.pdf"
                  download
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 font-semibold transition"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
