import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full backdrop-blur-md z-50 ${
        isDark ? "bg-black/40 text-white" : "bg-white text-black shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Editing_wings
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="hidden md:flex space-x-4 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isDark
                      ? "text-white hover:bg-white/10 hover:text-purple-400"
                      : "text-black bg-white hover:bg-gray-200"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition ${
                isDark
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-white text-black border"
              }`}
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-white text-black border"
              }`}
            >
              {isDark ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isDark ? "text-white" : "text-black"}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-2 rounded-lg p-4 ${
              isDark ? "bg-black/80 text-white" : "bg-white text-black shadow"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block py-2 my-2 w-full text-left hover:text-purple-500"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
