import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }} className="min-h-screen font-sans selection:bg-primaryAccent selection:text-white transition-colors duration-500">
      <Preloader />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
