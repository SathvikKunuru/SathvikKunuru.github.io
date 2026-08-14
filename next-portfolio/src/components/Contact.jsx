"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const fullText = "> STATUS: System online.\n> LISTENING: Embedded systems, AI integrations, or new opportunities.\n> AWAITING_INPUT...";

    const handleTransmit = (e) => {
        e.preventDefault();
        if (!message.trim()) {
            alert("SYSTEM ERROR: Cannot transmit empty signal. Please type a message.");
            return;
        }
        
        const subject = "comm init from sathvik planet";
        const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=thekunurusathvik@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            const clipboardText = `To: thekunurusathvik@gmail.com\nSubject: ${subject}\n\n${message}`;
            navigator.clipboard.writeText(clipboardText).then(() => {
                alert("POPUP BLOCKED: Gmail tab couldn't open.\n\nSIGNAL COPIED TO CLIPBOARD! Please paste this into your email client and send to: thekunurusathvik@gmail.com");
            }).catch(err => {
                alert("SYSTEM ERROR: Failed to route. Please manually email: thekunurusathvik@gmail.com");
            });
        }
        
        setMessage('');
    };

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    className="terminal-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="close"></span>
                            <span className="minimize"></span>
                            <span className="maximize"></span>
                        </div>
                        <div className="terminal-title">secure_comms.exe</div>
                    </div>

                    <div className="terminal-body">
                        <h2 className="glitch-text" data-text="[ INITIATE CONNECTION ]">[ INITIATE CONNECTION ]</h2>

                        <div className="terminal-logs">
                            {text.split('\n').map((line, i) => (
                                <p key={i} className="typewriter-text">{line}</p>
                            ))}
                            <span className="cursor">_</span>
                        </div>

                        <div className="terminal-input-area">
                            <div className="input-prompt">
                                <span className="prompt-user">guest@sathvik</span>
                                <span className="prompt-colon">:</span>
                                <span className="prompt-path">~/message</span>
                                <span className="prompt-char">$</span>
                            </div>
                            <textarea 
                                className="terminal-textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your transmission here..."
                                spellCheck="false"
                            />
                        </div>

                        <div className="terminal-endpoints">
                            <div className="endpoints-label">// DETECTED_NODES:</div>
                            <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                                <a href="https://github.com/SathvikKunuru" target="_blank" rel="noreferrer" className="btn-icon github" style={{ fontSize: '1.5rem' }}>
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/in/sathvik-kunuru" target="_blank" rel="noreferrer" className="btn-icon linkedin" style={{ fontSize: '1.5rem' }}>
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://www.youtube.com/@sathvik_kunuru" target="_blank" rel="noreferrer" className="btn-icon youtube" style={{ fontSize: '1.5rem' }}>
                                    <FaYoutube />
                                </a>
                                <a href="https://www.instagram.com/sathvik_kunuru/" target="_blank" rel="noreferrer" className="btn-icon instagram" style={{ fontSize: '1.5rem' }}>
                                    <FaInstagram />
                                </a>
                                <a href="https://wa.me/917569438573?text=hellooo+Sathvik%2C+here+from+your+Planet%21&utm_source=chatgpt.com" target="_blank" rel="noreferrer" className="btn-icon whatsapp" style={{ fontSize: '1.5rem' }}>
                                    <FaWhatsapp />
                                </a>
                                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=thekunurusathvik@gmail.com" target="_blank" rel="noreferrer" className="btn-icon gmail" style={{ fontSize: '1.5rem' }}>
                                    <SiGmail />
                                </a>
                            </div>
                        </div>

                        <div className="terminal-action">
                            <motion.button 
                                onClick={handleTransmit}
                                className="btn-primary glitch-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                TRANSMIT_SIGNAL()
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
