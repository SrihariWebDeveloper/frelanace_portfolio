import { motion } from 'framer-motion';
import { FiVideo, FiEdit, FiYoutube, FiFilm } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing services for commercials, documentaries, and social media content.',
    },
    {
      icon: <FiEdit className="w-8 h-8" />,
      title: 'Motion Graphics',
      description: 'Creating stunning motion graphics and visual effects to enhance your storytelling.',
    },
    {
      icon: <FiYoutube className="w-8 h-8" />,
      title: 'YouTube Content',
      description: 'Specialized editing for YouTube videos, thumbnails, and channel branding.',
    },
    {
      icon: <FiFilm className="w-8 h-8" />,
      title: 'Commercial Editing',
      description: 'High-quality editing for commercials, advertisements, and marketing videos.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          What I Can Do
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;