// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2 rounded-full shadow-md hover:scale-105 transition"
      title="Toggle theme"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
