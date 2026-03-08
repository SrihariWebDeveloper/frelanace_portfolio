import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
            <p className="text-gray-300 mb-8">
              Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something amazing together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FiMail className="w-5 h-5 mr-3 text-purple-400" />
                <span>ss6496192@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiPhone className="w-5 h-5 mr-3 text-purple-400" />
                <span>+91 63031 25114</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Hyderabad,Telanagana</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-white/20 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;