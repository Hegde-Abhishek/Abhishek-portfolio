// // components/MyJourney.tsx
// 'use client';
// import TimelineItem from './TimelineItem';

// // const journeyItems = [
// //   {
// //     year: '2023 – Present',
// //     title: 'Software Developer @ Sókn Engineering',
// //     description: 'Built full-stack systems using React, Node.js, GraphQL, Websockets, Redis, and PostgreSQL -- shipping real-time dashboards and chatbot flows with <30ms latency.',
// //   },
// //   {
// //     year: '2022 – 2023',
// //     title: 'Software Engineer | UI/UX & API @ Legato Health Technologies',
// //     description: 'Led frontend revamps that improved accessibility and SEO.',
// //   },
// //   {
// //     year: '2020 – 2022',
// //     title: 'Full-stack Dev @ Novel Office',
// //     description: 'Developed internal admin systems and marketing portals.',
// //   },
// //   {
// //     year: '2018 – 2020',
// //     title: 'Internships & Projects',
// //     description: 'Kickstarted with predictive ML apps and microservices.'
// //   }
// // ];
// const journeyItems = [
//   {
//     year: '2023 – Present',
//     title: 'Real-Time Developer @ Sókn Engineering',
//     description: 'Built dashboards, websocket infra, Kafka-style services.',
//     bullets: [
//       'Built scalable real-time charts using WebSocket.',
//       'Handled event-driven architecture w/ Redis + Pub/Sub.',
//       'Developed trade execution tools with UX-first mindset.'
//     ]
//   },
//   {
//     year: '2022 – 2023',
//     title: 'UI/UX Designer @ Legato Health',
//     description: 'Led frontend revamps that improved accessibility and SEO.',
//     bullets: [
//       'Revamped the admin panel with React + animations.',
//       'Improved Lighthouse SEO scores by 40%.',
//       'Redesigned forms for WCAG 2.1 accessibility compliance.'
//     ]
//   },
//   {
//     year: '2020 – 2022',
//     title: 'Full-stack Dev @ Novel Office',
//     description: 'Built admin dashboards and booking systems.',
//     bullets: [
//       'Integrated role-based dashboards using Node.js + MongoDB.',
//       'Reduced user drop-off with micro-UX changes.',
//     ]
//   },
//   {
//     year: '2018 – 2020',
//     title: 'Internships & Projects',
//     description: 'Started with ML tools and microservice design.',
//     bullets: [
//       'Developed Olympic medal prediction model in Python.',
//       'Built campus events dashboard with SQL views.'
//     ]
//   }
// ];


// const MyJourney = () => {
//   return (
//     <section id="journey" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900">
//       <h2 className="text-center text-4xl font-bold mb-10 text-gray-900 dark:text-white">My Journey So Far</h2>
//       <div className="relative max-w-5xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-teal-500">
//         {journeyItems.map((item, index) => (
//           <TimelineItem
//             key={index}
//             direction={index % 2 === 0 ? 'left' : 'right'}
//             year={item.year}
//             title={item.title}
//             description={item.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MyJourney;
// components/MyJourney.tsx
'use client';
import TimelineItem from './TimelineItem';

const journeyItems = [
  {
    year: '2024 – 2025',
    title: 'Software Developer @ Sókn Engineering',
    description: 'Built full-stack systems using React, Node.js, GraphQL, Websockets, Redis, and PostgreSQL -- shipping real-time dashboards and chatbot flows with <30ms latency.',
    bullets: [
      'Sub 30ms latency for real time api 🔌, 42% ⬆️ Query Efficiency',
      'Core Stack 💻: React, Node.js, JavaScript, GraphQL, Redis, Postgres, Python.',
      'DevOps & Security: Docker, Kubernetes, Auth0 (OAuth, JWT), Cloudfare, CI/CD.',
      'End to end ownership of services, 0 to 1 builder'

    ]
  },
  {
    year: '2022 – 2024',
    title: `Master's in Computer Information Systems @ Northeastern University, Boston`,
    description: 'Graduated with distinction (3.8 GPA) in May 2024 gaining skills in full-stack engineering, data sturcture & algorithms, and software architecture, through real-world projects and core engineering & SDLC principles.',
    bullets: [
      'Application Engineering and development',
      'Program Structures and Algorithms',
      'Web design and user experience Engr',
      'User experience (UX) design and testing',
      'Object oriented design and programming',
      'Research Methods in AI'
    ]
  },
  {
    year: '2020 – 2022',
    title: 'Software Engineer @ Legato Health Technologies',
    description: 'Led frontend revamps and API integration and enhancement using React, Angular, TypeScript, Express and Node.js -- boosting traffic and performance across 10+ healthtech projects.',
    bullets: [
      '65% surge in Website Traffic Growth 📈| 10+ delivered projects',
      'Architected responsive, user-centric UIs - advanced JavaScript frameworks.',
      'Core Stack 💻: MERN Stack, Angular, JavaScript (ES6), TypeScript, Redux, REST APIs.',
      'Best agile and scrum practices including standups, grooming, retrospectives, and sprint reviews'
    ]
  },
  {
    year: '2019 – 2020',
    title: 'Full-stack Dev @ Novel Office',
    description: 'Built responsive, high-converting websites and optimized backend & SQL queries to enhance performance, SEO, and user engagement -- leading to 2x growth in leads.',
    bullets: [
      '80% Rise in website traffic | 70% Site speed boost ⬆️',
      'Maintained and optimized SQL databases, and refactored codebases',
      'Core Stack 💻: Front-end technologies, PHP, UI/UX, SQL.',
      'Performance: Lighthouse, code-splitting, optimized asset loading.'
    ]
  },
  {
    year: '2015 - 2019',
    title: 'Bachelor of Engineering',
    description: 'Started with ML tools and microservice design.',
    bullets: [
      'Smart Control Electrical Appliances using IoT and Cloud as final year project',
      'Gave a technical seminal on Natural Language Processing(NLP) at national level symposium'
    ]
  }
];

const MyJourney = () => {
  return (
    <section id="journey" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900">
      <h2 className="text-center text-4xl font-bold mb-20 text-gray-900 dark:text-white">My Journey So Far</h2>
      <div className="relative max-w-6xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-teal-500">
        {journeyItems.map((item, index) => (
          <TimelineItem
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            year={item.year}
            title={item.title}
            description={item.description}
            bullets={item.bullets}
          />
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
