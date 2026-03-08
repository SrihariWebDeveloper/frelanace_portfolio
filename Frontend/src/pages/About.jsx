import { motion, useInView } from "framer-motion";
import { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "Premiere Pro", level: 95 },
    { name: "After Effects", level: 90 },
    { name: "Motion Graphics", level: 88 },
    { name: "Color Grading", level: 92 },
    { name: "Photoshop", level: 85 },
  ];

  // Dynamic background classes
  const cardBg = isDark
    ? "bg-black/50 backdrop-blur-md"
    : "bg-white/70 backdrop-blur-md";

  const headingText = isDark ? "text-white" : "text-black";
  const paragraphText = isDark ? "text-gray-300" : "text-gray-800";
  const skillBarBg = isDark ? "bg-purple-600" : "bg-purple-500";
  const skillText = isDark ? "text-white" : "text-black";

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${headingText}`}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* My Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-lg p-8 ${cardBg}`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${headingText}`}>
              My Story
            </h3>
            <p className={`leading-relaxed ${paragraphText}`}>
              I am a creative Video Editor and Designer with hands-on experience
              in Poster Design, Thumbnail Design, and Video Editing. I
              specialize in editing both short-form and long-form videos,
              creating engaging visuals that capture attention and communicate
              ideas effectively. I have practical experience working with
              industry tools such as Adobe Premiere Pro, After Effects, and
              Photoshop to produce high-quality content with motion effects,
              clean edits, and professional design elements. I am passionate
              about storytelling through video and design, and I am dedicated
              to delivering visually stunning and impactful content that
              resonates with audiences.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-lg p-8 ${cardBg}`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${headingText}`}>
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className={`flex justify-between mb-2 ${skillText}`}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-2 rounded-full ${skillBarBg}`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;