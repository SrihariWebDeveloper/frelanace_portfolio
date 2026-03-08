import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './pages/Hero';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="text-white relative ">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="max-w-7xl md:mx-40 mx-8">
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
