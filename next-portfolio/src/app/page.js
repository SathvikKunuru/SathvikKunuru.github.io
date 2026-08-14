"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
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
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer>
        <div className="container footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 Sathvik Kunuru. All rights reserved.</p>
          <a 
            href="https://github.com/SathvikKunuru/SathvikKunuru.github.io#want-to-make-your-own-steal-it-" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Want to make your own? Steal it! 🛸
          </a>
        </div>
      </footer>
    </div>
  );
}
