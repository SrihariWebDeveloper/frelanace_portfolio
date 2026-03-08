import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlay, FiEye } from 'react-icons/fi';
import assets from '../assets/assests.js';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Commercial Spot',
      category: 'commercial',
      thumbnail: assets.work1,
      videoUrl: 'https://drive.google.com/file/d/12W_WDRshM0uimRYbqkl8vUpXnklllF6U/preview',
      type: 'video',
    },
    {
      id: 2,
      title: 'Music Video',
      category: 'music',
      thumbnail: assets.work2,
      videoUrl: 'https://drive.google.com/file/d/1_Eg9JkCB6U4CmKi2L_PrpYDw5MSeC5Jq/preview',
      type: 'video',
    },
    {
      id: 3,
      title: 'Poster Design',
      category: 'poster',
      thumbnail: assets.work3,
      posterUrl: 'https://www.instagram.com/p/DTZJsugk_92/embed/',
      type: 'poster',
    },
    {
      id: 4,
      title: 'Poster Design',
      category: 'poster',
      thumbnail: assets.work4,
      posterUrl: 'https://www.instagram.com/p/DLpujagTBHI/embed/',
      type: 'poster',
    },
    {
      id: 5,
      title: 'Video Edit',
      category: 'video',
      thumbnail: assets.work5,
      videoUrl: 'https://www.instagram.com/reel/DUigjX2D7wm/embed/',
      type: 'video',
    }
  ];

  const categories = ['all', 'commercial', 'music', 'poster','video'];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          My Work
        </motion.h2>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  {project.type === 'video' ? <FiPlay size={48} className="text-white" /> : <FiEye size={48} className="text-white" />}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 capitalize">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-lg p-4 max-w-4xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-black text-xl font-semibold">{selectedProject.title}</h3>
                  <button onClick={() => setSelectedProject(null)} className="text-black">
                    <FiX size={24} />
                  </button>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={selectedProject.videoUrl || selectedProject.posterUrl}
                    title={selectedProject.title}
                    className="w-full h-full rounded"
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