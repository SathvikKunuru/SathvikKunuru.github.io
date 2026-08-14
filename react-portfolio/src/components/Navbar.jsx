import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className="nav-container">
                <a href="#home" className="logo">Sathvik<span>.</span></a>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                <a href="#contact" className="btn-primary nav-cta">Let's Talk</a>
                <div className="hamburger">
                    <FaBars />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
