// // components/Contact.tsx
// import { motion } from 'framer-motion';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 px-6 bg-gradient-to-t from-black to-gray-900 text-white">
//       <motion.h2
//         className="text-3xl font-bold text-center mb-8"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Let’s Talk
//       </motion.h2>

//       <motion.form
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         action="https://formspree.io/f/your_form_id" // <- replace this with your Formspree endpoint
//         method="POST"
//         className="max-w-xl mx-auto flex flex-col gap-4"
//       >
//         <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded bg-white text-black" />
//         <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded bg-white text-black" />
//         <textarea name="message" rows={5} placeholder="Your Message" required className="p-3 rounded bg-white text-black" />
//         <button type="submit" className="bg-teal-400 text-black font-semibold py-2 rounded hover:scale-105 transition">
//           Send Message
//         </button>
//       </motion.form>

//       <motion.div
//         className="flex justify-center gap-6 mt-8 text-2xl"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         <a href="mailto:hegdeabhishek07@gmail.com" className="hover:text-teal-300 transition">📧</a>
//         <a href="https://github.com/Hegde-Abhishek" target="_blank" className="hover:text-teal-300 transition">💻</a>
//         <a href="https://linkedin.com/in/hegde-abhishek" target="_blank" className="hover:text-teal-300 transition">🔗</a>
//       </motion.div>
//     </section>
//   );
// }

// components/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 text-center bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white">
      <motion.h2 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Build Something Awesome
      </motion.h2>

      <motion.p 
        className="mb-8 text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Available for freelance, full-time & creative collabs. Let’s talk ideas, code & caffeine ☕
      </motion.p>

      <motion.div 
        className="flex justify-center gap-6 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a href="mailto:hegdeabhishek07@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaEnvelope size={32} />
        </a>
        <a href="https://www.linkedin.com/in/hegde-abhishek/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/Hegde-Abhishek" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaGithub size={32} />
        </a>
      </motion.div>

      <details className="text-sm text-gray-400 cursor-pointer">
        <summary className="mb-2">Prefer a form? Click here!</summary>
        <form className="max-w-md mx-auto mt-4 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
          <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"></textarea>
          <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 py-2 rounded text-white font-semibold">
            Send Message
          </button>
        </form>
      </details>
    </section>
  );
};

export default Contact;
