import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Premiere Pro', level: 95 },
    { name: 'After Effects', level: 90 },
    { name: 'Motion Graphics', level: 88 },
    { name: 'Color Grading', level: 92 },
    {name:"Photoshop", level: 85}
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
            <p className="text-gray-300 leading-relaxed">
             I am a creative Video Editor and Designer with hands-on experience in Poster Design, Thumbnail Design, and Video Editing. I specialize in editing both short-form and long-form videos, creating engaging visuals that capture attention and communicate ideas effectively. I have practical experience working with industry tools such as Adobe Premiere Pro, After Effects, and Photoshop to produce high-quality content with motion effects, clean edits, and professional design elements. I am passionate about storytelling through video and design, and I am dedicated to delivering visually stunning and impactful content that resonates with audiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 bg-purple-600 rounded-full"
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