// components/MyJourney.tsx
'use client';
import TimelineItem from './TimelineItem';

const journeyItems = [
  {
    year: '2023 – Present',
    title: 'Real-Time Developer @ Sókn Engineering',
    description: 'Built trading dashboards, websocket infra, Kafka-style services.',
  },
  {
    year: '2022 – 2023',
    title: 'UI/UX Designer @ Legato Health',
    description: 'Led frontend revamps that improved accessibility and SEO.',
  },
  {
    year: '2020 – 2022',
    title: 'Full-stack Dev @ Novel Office',
    description: 'Developed internal admin systems and marketing portals.',
  },
  {
    year: '2018 – 2020',
    title: 'Internships & Projects',
    description: 'Kickstarted with predictive ML apps and microservices.'
  }
];

const MyJourney = () => {
  return (
    <section id="journey" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-900 dark:text-white">My Journey So Far</h2>
      <div className="relative max-w-5xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-teal-500">
        {journeyItems.map((item, index) => (
          <TimelineItem
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MyJourney;
