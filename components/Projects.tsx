// components/Projects.tsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Personal Voice AI',
    desc: 'An interactive, full-duplex voice assistant that captures, transcribes, and processes user speech using Whisper and GPT-3.5',
    tech: 'OpenaiAPI, Whisper, Web-speech API, React+Vite, Nodejs',
    github: 'https://github.com/Hegde-Abhishek/tiffin-tribe',
  },
  {
    title: 'AI Career Advisor',
    desc: 'A personalized AI powered career advisor using collaborative filtering and Python (Flask) for backend orchestration and React for frontend delivery; integrated OpenAI API with rate-limit handling.',
    tech: 'React, Node.js, Flask, Python, OpenAI API, MongoDB',
    github: 'https://github.com/Hegde-Abhishek/ai-career-advisor',
  },
  {
    title: 'Tiffin Tribe',
    desc: 'Food ordering app with React, Node.js, JWT, and React Native.',
    tech: 'React, Node.js, PostgreSQL',
    github: 'https://github.com/Hegde-Abhishek/tiffin-tribe',
  },
   {
    title: 'Microservices Architecture (E-Commerce Platform)',
    desc: 'Architected a horizontally scalable e-commerce system using Node.js, microservices, Docker, and Kubernetes. Managed stateful components with PostgreSQL, caching with Redis & deployed with CI/CD pipelines',
    tech: ' Docker, Node.js, Kubernetes, PostgreSQL  ',
    github: 'https://github.com/Hegde-Abhishek/tiffin-tribe',
  },
  // {
  //   title: 'Real-Time Dashboard',
  //   desc: 'WebSocket-based OHLC chart system with Redis and Postgres.',
  //   tech: 'Next.js, WebSocket, Redis',
  //   github: 'https://github.com/Hegde-Abhishek/bar-manager',
  // },
  // {
  //   title: 'Notification System',
  //   desc: 'Socket.io real-time alerts with TTL, Auth0, and inbox view.',
  //   tech: 'React, Node.js, Auth0',
  //   github: 'https://github.com/Hegde-Abhishek/notification-system',
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{proj.desc}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 italic">{proj.tech}</p>
            <a href={proj.github} target="_blank" className="inline-block mt-4 text-teal-500 underline">
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
