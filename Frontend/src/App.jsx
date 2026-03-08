import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

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
