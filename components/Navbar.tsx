// components/Navbar.tsx
import ThemeToggle from './ThemeToggle';

const links = ['about', 'projects', 'skills', 'mobile', 'contact'];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white flex justify-between items-center px-6 py-3 shadow-lg">
      <h1 className="text-lg font-bold tracking-widest text-teal-400">ABHISHEK</h1>
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {links.map((link, i) => (
          <a key={i} href={`#${link}`} className="hover:text-teal-300 transition">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
