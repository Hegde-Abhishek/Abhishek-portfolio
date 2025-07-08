// components/Contact.tsx
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gradient-to-t from-black to-gray-900 text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let’s Talk
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        action="https://formspree.io/f/your_form_id" // <- replace this with your Formspree endpoint
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded bg-white text-black" />
        <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded bg-white text-black" />
        <textarea name="message" rows={5} placeholder="Your Message" required className="p-3 rounded bg-white text-black" />
        <button type="submit" className="bg-teal-400 text-black font-semibold py-2 rounded hover:scale-105 transition">
          Send Message
        </button>
      </motion.form>

      <motion.div
        className="flex justify-center gap-6 mt-8 text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="mailto:hegdeabhishek07@gmail.com" className="hover:text-teal-300 transition">📧</a>
        <a href="https://github.com/Hegde-Abhishek" target="_blank" className="hover:text-teal-300 transition">💻</a>
        <a href="https://linkedin.com/in/hegde-abhishek" target="_blank" className="hover:text-teal-300 transition">🔗</a>
      </motion.div>
    </section>
  );
}
