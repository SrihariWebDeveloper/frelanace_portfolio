import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlay, FiEye } from "react-icons/fi";
import assets from "../assets/assests.js";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Work = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Commercial Edit",
      category: "music",
      thumbnail: assets.work1,
      videoUrl:
        "https://drive.google.com/file/d/12W_WDRshM0uimRYbqkl8vUpXnklllF6U/preview",
      type: "music",
    },
    {
      id: 2,
      title: "Commercial Edit",
      category: "commercial",
      thumbnail: assets.work2,
      videoUrl:
        "https://drive.google.com/file/d/1_Eg9JkCB6U4CmKi2L_PrpYDw5MSeC5Jq/preview",
      type: "video",
    },
    {
      id: 3,
      title: "Poster Design",
      category: "poster",
      thumbnail: assets.work4,
      posterUrl: "https://www.instagram.com/p/DTZJsugk_92/embed/",
      type: "poster",
    },
    {
      id: 4,
      title: "Poster Design",
      category: "poster",
      thumbnail: assets.work3,
      posterUrl: "https://www.instagram.com/p/DLpujagTBHI/embed/",
      type: "poster",
    },
    {
      id: 5,
      title: "Reel Edit",
      category: "video",
      thumbnail: assets.work5,
      videoUrl: "https://www.instagram.com/reel/DUigjX2D7wm/embed/",
      type: "video",
    },
    {
      id: 6,
      title: "Thumbnail Edit",
      category: "Thumbnails",
      thumbnail: assets.work6,
      videoUrl: "https://www.instagram.com/reel/DTFDtpJk-fj/embed/",
      type: "Thumbnail",
    },
    {
      id: 7,
      title: "Thumbnail Edit",
      category: "Thumbnails",
      thumbnail: assets.work7,
      videoUrl: "https://www.instagram.com/reel/DVzfhNMj759/embed/",
      type: "Thumbnail",
    },
    {
      id: 8,
      title: "Thumbnail Edit",
      category: "Thumbnails",
      thumbnail: assets.work8,
      videoUrl: "https://www.instagram.com/reel/DVaW9hGj86F/embed/",
      type: "Thumbnail",
    }
  ];

  const categories = ["all", "commercial", "music", "poster", "video","Thumbnails"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Theme-aware classes
  const sectionBg = isDark ? "bg-slate-900" : "bg-gray-100";
  const headingText = isDark ? "text-white" : "text-black";
  const btnActive = "bg-purple-600 text-white";
  const btnInactive = isDark
    ? "bg-white/10 text-gray-300 hover:bg-white/20"
    : "bg-gray-200 text-black hover:bg-gray-300";
  const cardBg = isDark ? "bg-black/50" : "bg-white/70";
  const overlayBg = isDark ? "bg-black/50" : "bg-black/40";
  const modalBg = isDark ? "bg-black text-white" : "bg-white text-black";

  return (
    <section
      id="work"
      className={`py-20 px-4 transition-colors duration-500 ${sectionBg}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${headingText}`}
        >
          My Work
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  filter === cat ? btnActive : btnInactive
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-lg overflow-hidden cursor-pointer transition-colors ${cardBg}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ${overlayBg}`}
                >
                  {project.type === "video" ? (
                    <FiPlay size={48} className="text-white" />
                  ) : (
                    <FiEye size={48} className="text-white" />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${headingText}`}>
                  {project.title}
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-800"}>{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Selected Project */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 flex items-center justify-center z-50 p-4 ${overlayBg}`}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className={`rounded-lg p-4 max-w-4xl w-full max-h-[80vh] overflow-hidden ${modalBg}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-semibold`}>{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={isDark ? "text-white" : "text-black"}
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={selectedProject.videoUrl || selectedProject.posterUrl}
                    title={selectedProject.title}
                    className="w-11/12 h-full mx-auto rounded-lg"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
