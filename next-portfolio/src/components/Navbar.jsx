"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className="nav-container">
                <a href="#home" className="logo">Sathvik Kunuru<span>.</span></a>
                
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={toggleMenu}>Origin</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Neural Net</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Builds</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Odyssey</a></li>
                </ul>
                <a href="#contact" className="nav-glitch-text nav-cta">[ Connect.. ]</a>
                
                <div className="hamburger" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
