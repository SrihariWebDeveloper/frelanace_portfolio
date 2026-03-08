import { useContext } from "react";
import Navbar from "./components/Navbar.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500
        ${isDark ? "bg-slate-900 text-white" : "bg-white text-black"}`}
    >
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-7xl md:mx-40 mx-8 py-8 space-y-16">
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