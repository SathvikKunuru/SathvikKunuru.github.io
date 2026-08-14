"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SkillsGraph from '../components/SkillsGraph';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';
import AmbientBackground from '../components/AmbientBackground';

export default function Home() {
  return (
    <div className="App">
      <CustomCursor />
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <SkillsGraph />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="footer-section">
        <div className="container footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Sathvik Kunuru.</p>
            <p className="terminal-text">SYS.STATUS: [ <span className="highlight-green">ONLINE</span> ]</p>
          </div>
          
          <div className="footer-right">
            <a 
              href="https://github.com/SathvikKunuru/SathvikKunuru.github.io#want-to-make-your-own-steal-it-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glitch-link"
            >
              [ STEAL_THIS_THEME ] 🛸
            </a>
            <p className="inspiration">
              Visuals inspired by <a href="https://playdead.com/games/inside/" target="_blank" rel="noopener noreferrer" className="glitch-link">INSIDE</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
