`"use client`";
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        date: "04/2025 – Present",
        title: "Embedded Engineer",
        company: "Smarttrak AI",
        points: [
            "Implemented and distributed solar tracker firmware (STM32, Zephyr RTOS, ESP32, RAK) with MQTT, UART, LoRa for seamless remote control.",
            "Engineered intelligent motor and sensor systems using I²C, SPI, UART enabling automated mode switching."
        ]
    },
    {
        date: "06/2024 – 01/2025",
        title: "R&D Engineer",
        company: "Visor Technologies",
        points: [
            "Engineered embedded systems (I2C, Ethernet, UWB, Qt, CAN, RS485) for 50% faster industrial automation.",
            "Implemented deep learning models for DRDO/BHEL, increasing efficiency/reliability by 90%."
        ]
    },
    {
        date: "06/2023 – 08/2023",
        title: "Intern",
        company: "NIT Warangal",
        points: [
            "Refined deep learning models (R-CNN, Detectron2, U-Net) for seed germination and salt tolerance.",
            "Deployed models on Raspberry Pi and Jetson Nano, achieving efficient operation at <2.5W."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2>Work Experience</h2>
                    <div className="line"></div>
                </motion.div>
                
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            className="timeline-item" 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <span className="date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <ul>
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
