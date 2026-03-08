import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import profile from '../assets/IMG_5383.png';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <img src={profile} alt="Profile" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-purple-400 mt-24 shadow-lg" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          SIDHARTH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-purple-400 mb-8"
        >
          Poster Designs & Thumbnail Designs & Video Editing
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Visual Content Creator offering Poster Design, Thumbnail Design, and Professional Video Editing services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection('work')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            Get In Touch
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaYoutube size={24}  />
          </a>
          <a href="https://www.instagram.com/editing_wings17?igsh=anV0MW93Y3Budndo" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram size={24} />
          </a>
          {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter size={24} />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;