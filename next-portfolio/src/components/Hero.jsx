"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const profileImg = '/profile.png';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p 
                        className="greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Hi, I'm
                    </motion.p>
                    <motion.h1 
                        className="glitch"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    >
                        Sathvik Kunuru
                    </motion.h1>
                    <motion.h2 
                        className="subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        Embedded <span className="highlight">&</span> AI Engineer
                    </motion.h2>
                    <motion.p 
                        className="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        Bridging the gap between hardware and intelligent software. 
                        I build distributed embedded systems, implement deep learning on the edge, 
                        and optimize intelligent automation solutions.
                    </motion.p>
                    <motion.div 
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        <a href="https://github.com/SathvikKunuru" target="_blank" rel="noreferrer" className="btn-icon github">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/sathvik-kunuru" target="_blank" rel="noreferrer" className="btn-icon linkedin">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.youtube.com/@sathvik_kunuru" target="_blank" rel="noreferrer" className="btn-icon youtube">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/sathvik_kunuru/" target="_blank" rel="noreferrer" className="btn-icon instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/917569438573?text=hellooo+Sathvik%2C+here+from+your+Planet%21&utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="btn-icon whatsapp">
                            <FaWhatsapp />
                        </a>
                        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=thekunurusathvik@gmail.com" target="_blank" rel="noreferrer" className="btn-icon gmail">
                            <SiGmail />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                >
                    <Tilt 
                        className="tilt-container"
                        tiltMaxAngleX={10} 
                        tiltMaxAngleY={10} 
                        perspective={1000} 
                        transitionSpeed={2000} 
                        scale={1.05}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        glareColor="var(--accent-cyan)"
                        glarePosition="all"
                    >
                        <div className="profile-image-container">
                            <img src={profileImg} alt="Sathvik Kunuru" className="profile-image" />
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
