import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);

    if (isDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-700 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2 animate-fadeInDown">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-amber-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">KS</span>
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            Khushi Saxena
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}

          {/* DARK MODE BUTTON */}
          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-300" />
            ) : (
              <Moon size={18} className="text-gray-800" />
            )}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 animate-slideInDown">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-3 w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
            >
              {darkMode ? (
                <>
                  <Sun size={18} className="text-yellow-300" />
                  <span className="text-gray-900 dark:text-gray-100">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="text-gray-800 dark:text-gray-100" />
                  <span className="text-gray-900 dark:text-gray-100">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
