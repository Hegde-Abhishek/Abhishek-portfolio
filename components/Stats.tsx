// // components/Stats.tsx
// import { useEffect, useState } from 'react';

// const counters = [
//   { label: 'Years of Experience', end: 5 },
//   { label: 'Projects Shipped', end: 15 },
//   { label: 'Production Features', end: 30 },
//   { label: 'UX Performance Boost', end: 45, suffix: '%' },
//   { label: 'Users Impacted', end: 100000, suffix: '+' },
// ];

// function useCounter(end: number, duration = 1000) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const increment = Math.ceil(end / (duration / 16));
//     const handle = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(handle);
//       } else {
//         setCount(start);
//       }
//     }, 16);
//     return () => clearInterval(handle);
//   }, [end, duration]);
//   return count;
// }

// export default function Stats() {
//   return (
//     <section id="stats" className="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
//       <h2 className="text-3xl font-bold text-center mb-12">Impact By Numbers</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
//         {counters.map((item, i) => {
//           const count = useCounter(item.end);
//           return (
//             <div key={i} className="text-4xl font-extrabold">
//               {count.toLocaleString()}{item.suffix || ''}
//               <p className="text-base mt-2 font-medium text-gray-400">{item.label}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
// components/Stats.tsx
import { useEffect, useState, useRef } from 'react';

const counters = [
  { label: 'Years of Experience', end: 5 },
  { label: 'Projects Shipped', end: 15 },
  { label: 'Production Features', end: 30 },
  { label: 'UX Performance Boost', end: 65, suffix: '%' },
  { label: 'Users Impacted', end: 100_000, suffix: '+' },
];

function useCounter(end: number, duration = 1000, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let current = 0;
    const increment = Math.ceil(end / (duration / 16));

    const handle = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(handle);
  }, [end, duration, trigger]);

  return count;
}

function CounterStat({ label, end, suffix }: { label: string; end: number; suffix?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCounter(end, 1000, isVisible);

  return (
    <div ref={ref} className="text-4xl font-extrabold transition-opacity duration-500">
      {count.toLocaleString()}{suffix || ''}
      <p className="text-base mt-2 font-medium text-gray-400">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Impact By Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
        {counters.map((item, i) => (
          <CounterStat key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
