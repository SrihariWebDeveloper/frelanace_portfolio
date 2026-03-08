import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Content Creator',
      content: 'John delivered exceptional work on my YouTube channel. His editing skills transformed my raw footage into engaging content that significantly boosted my views.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Marketing Director',
      content: 'The commercial spot John created for our campaign exceeded all expectations. Professional, creative, and delivered on time. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Film Producer',
      content: 'Working with John on our documentary was a pleasure. His attention to detail and storytelling expertise brought our vision to life beautifully.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Client Reviews
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-purple-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;