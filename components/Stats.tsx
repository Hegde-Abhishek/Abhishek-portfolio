// components/Stats.tsx
import { useEffect, useState } from 'react';

const counters = [
  { label: 'Years of Experience', end: 5 },
  { label: 'Projects Shipped', end: 15 },
  { label: 'Production Features', end: 30 },
  { label: 'UX Performance Boost', end: 45, suffix: '%' },
  { label: 'Users Impacted', end: 100000, suffix: '+' },
];

function useCounter(end: number, duration = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 16));
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(handle);
  }, [end, duration]);
  return count;
}

export default function Stats() {
  return (
    <section id="stats" className="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Impact By Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
        {counters.map((item, i) => {
          const count = useCounter(item.end);
          return (
            <div key={i} className="text-4xl font-extrabold">
              {count.toLocaleString()}{item.suffix || ''}
              <p className="text-base mt-2 font-medium text-gray-400">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
