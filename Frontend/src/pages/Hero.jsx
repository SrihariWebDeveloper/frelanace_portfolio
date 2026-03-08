import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import assets from "../assets/assests.js";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Theme-aware classes
  const headingText = isDark ? "text-white" : "text-black";
  const subheadingText = "text-purple-400"; // keep consistent purple
  const paragraphText = isDark ? "text-gray-300" : "text-gray-700";
  const buttonPrimary = isDark
    ? "bg-purple-600 hover:bg-purple-700 text-white"
    : "bg-purple-600 hover:bg-purple-700 text-white";
  const buttonSecondary = isDark
    ? "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
    : "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white";

  const iconText = isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-purple-600";

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative transition-colors duration-500 ${
        isDark ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="text-center z-10 max-w-7xl mx-auto px-4">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <img
            src={assets.image}
            alt="Sidharth, visual content creator wearing glasses and black jacket"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-purple-400 mt-24 shadow-lg"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-5xl md:text-7xl font-bold mb-4 ${headingText}`}
        >
          SIDHARTH
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-xl md:text-2xl mb-8 ${subheadingText}`}
        >
          Poster Designs & Thumbnail Designs & Video Editing
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-lg mb-12 max-w-2xl mx-auto ${paragraphText}`}
        >
          Visual Content Creator offering Poster Design, Thumbnail Design, and
          Professional Video Editing services.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection("work")}
            className={`px-8 py-3 rounded-full font-semibold transition-colors ${buttonPrimary}`}
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${buttonSecondary}`}
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a href="#" className={`${iconText} transition-colors`}>
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/editing_wings17?igsh=anV0MW93Y3Budndo"
            className={`${iconText} transition-colors`}
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;