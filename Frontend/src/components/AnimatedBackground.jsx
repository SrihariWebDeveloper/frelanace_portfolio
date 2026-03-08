import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.3))',
            'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.3))',
            'linear-gradient(225deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.3))',
            'linear-gradient(315deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.3))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </motion.div>
  );
};

export default AnimatedBackground;