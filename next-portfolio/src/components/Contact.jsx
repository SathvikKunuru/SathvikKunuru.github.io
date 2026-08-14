"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div 
                    className="contact-box glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Let's build something incredible.</h2>
                    <p>I'm always open to discussing embedded systems, AI integrations, or new opportunities.</p>
                    
                    <div className="contact-info">
                        <a href="mailto:kunurusathvik4@gmail.com" className="contact-item">
                            <FaEnvelope />
                            <span>kunurusathvik4@gmail.com</span>
                        </a>
                        <div className="contact-item">
                            <FaPhone />
                            <span>+91 7569438573</span>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <span>Hyderabad, India</span>
                        </div>
                    </div>
                    
                    <motion.a 
                        href="mailto:kunurusathvik4@gmail.com" 
                        className="btn-primary mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Say Hello
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
