import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'John delivered exceptional work on our commercial campaign. His attention to detail and creative vision exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Content Creator',
      content: 'Working with John was a game-changer for my YouTube channel. The quality of his editing and motion graphics is outstanding.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Film Producer',
      content: 'Professional, reliable, and incredibly talented. John brought our documentary to life with his masterful editing skills.',
      rating: 5,
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Client Reviews
        </motion.h2>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 text-lg mb-6 italic">"{reviews[currentIndex].content}"</p>
            <div>
              <h4 className="text-white font-semibold">{reviews[currentIndex].name}</h4>
              <p className="text-purple-400">{reviews[currentIndex].role}</p>
            </div>
          </motion.div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-purple-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;