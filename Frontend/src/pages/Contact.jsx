import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Theme-aware classes
  const sectionText = isDark ? "text-white" : "text-black";
  const paragraphText = isDark ? "text-gray-300" : "text-gray-800";
  const cardBg = isDark ? "bg-black/50 backdrop-blur-md" : "bg-white/70 backdrop-blur-md";
  const inputBg = isDark ? "bg-white/20 text-white placeholder-gray-400" : "bg-gray-100 text-black placeholder-gray-600";
  const inputBorder = isDark ? "border-gray-600" : "border-gray-300";
  const buttonBg = isDark ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-purple-600 hover:bg-purple-700 text-white";

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${sectionText}`}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${sectionText}`}>Let's Work Together</h3>
            <p className={`mb-8 leading-relaxed ${paragraphText}`}>
              Ready to bring your vision to life? I'd love to hear about your project
              and discuss how we can create something amazing together.
            </p>

            <div className="space-y-4">
              <div className={`flex items-center ${paragraphText}`}>
                <FiMail className="w-5 h-5 mr-3 text-purple-400" />
                <span>ss6496192@gmail.com</span>
              </div>
              <div className={`flex items-center ${paragraphText}`}>
                <FiPhone className="w-5 h-5 mr-3 text-purple-400" />
                <span>+91 63031 25114</span>
              </div>
              <div className={`flex items-center ${paragraphText}`}>
                <FiMapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className={`rounded-lg p-8 ${cardBg}`}
          >
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className={`block mb-2 ${sectionText}`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} focus:outline-none focus:border-purple-400`}
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className={`block mb-2 ${sectionText}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} focus:outline-none focus:border-purple-400`}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 ${sectionText}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${inputBorder} ${inputBg} focus:outline-none focus:border-purple-400 resize-none`}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${buttonBg}`}
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