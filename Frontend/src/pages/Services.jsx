import { motion } from "framer-motion";
import { FiVideo, FiEdit, FiYoutube, FiFilm } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const services = [
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "Video Editing",
      description:
        "Professional video editing services for commercials, documentaries, and social media content.",
    },
    {
      icon: <FiEdit className="w-8 h-8" />,
      title: "Motion Graphics",
      description:
        "Creating stunning motion graphics and visual effects to enhance your storytelling.",
    },
    {
      icon: <FiYoutube className="w-8 h-8" />,
      title: "YouTube Content",
      description:
        "Specialized editing for YouTube videos, thumbnails, and channel branding.",
    },
    {
      icon: <FiFilm className="w-8 h-8" />,
      title: "Commercial Editing",
      description:
        "High-quality editing for commercials, advertisements, and marketing videos.",
    },
  ];

  // Theme-aware classes
  const sectionBg = isDark ? "bg-slate-900/50" : "bg-gray-100/50";
  const headingText = isDark ? "text-white" : "text-black";
  const cardBg = isDark ? "bg-black/50" : "bg-white/70";
  const cardHoverBg = isDark ? "hover:bg-white/10" : "hover:bg-gray-200/50";
  const titleText = isDark ? "text-white" : "text-black";
  const descText = isDark ? "text-gray-300" : "text-gray-800";

  return (
    <section id="services" className={`py-20 px-4 transition-colors duration-500 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${headingText}`}
        >
          What I Can Do
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-lg p-6 text-center transition-colors ${cardBg} ${cardHoverBg}`}
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${titleText}`}>
                {service.title}
              </h3>
              <p className={`${descText}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;