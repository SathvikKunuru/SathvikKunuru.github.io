"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaBug, FaUserCheck, FaRobot, FaTrain, FaGlobe, FaMicrochip, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

export const projectsData = [
    {
        title: "Agentic AI Pipelines",
        category: "AI/ML",
        icon: <FaRobot />,
        description: "Development of autonomous, multi-agent AI pipelines and workflows utilizing Hermes and OpenClaw models.",
        tech: ["Agentic AI", "Hermes", "OpenClaw"]
    },
    {
        title: "Lernnova",
        category: "Web Apps",
        icon: <FaGlobe />,
        description: "AI-powered career guidance platform featuring social profile analysis, a smart chatbot, and dynamic learning roadmaps.",
        tech: ["Next.js", "AI", "Tailwind CSS"],
        githubLink: "https://github.com/Projects-s/Lernnova"
    },
    {
        title: "Edumate-AI",
        category: "Web Apps",
        icon: <FaGlobe />,
        description: "An AI-driven educational platform built with Next.js, designed to enhance the modern learning and teaching experience.",
        tech: ["Next.js", "AI", "Web Development"],
        githubLink: "https://github.com/Projects-s/Edumate-AI"
    },
    {
        title: "Micro SaaS Apps",
        category: "Web Apps",
        icon: <FaGlobe />,
        description: "A collection of scalable, niche Micro SaaS applications tailored to specific business logic and utility needs.",
        tech: ["Next.js", "SaaS", "Full-Stack"]
    },
    {
        title: "Weight Measurement App",
        category: "Other",
        icon: <FaMobileAlt />,
        description: "Desktop app for Windows that reads weight measurements from a serial-connected device, displays live data, and generates PDF reports.",
        tech: ["Python", "Tkinter", "RS-232"],
        githubLink: "https://github.com/SathvikKunuru/weight-measurment-app"
    },
    {
        title: "Dataset Creator RPi",
        category: "Embedded",
        icon: <FaMicrochip />,
        description: "Raspberry Pi project that automates image capture with a webcam and manages data transfer to USB devices.",
        tech: ["Python", "Raspberry Pi", "Automation"],
        githubLink: "https://github.com/SathvikKunuru/Dataset-Creator-RPi"
    },
    {
        title: "Zephyr Custom DTS",
        category: "Embedded",
        icon: <FaMicrochip />,
        description: "Custom Device Tree Source (DTS) configuration for STM32U575VIT6Q for Zephyr OS.",
        tech: ["CMake", "Zephyr OS", "DTS"],
        githubLink: "https://github.com/SathvikKunuru/zephyr-U575VIT6Q"
    },
    {
        title: "Music Alarm (ESP)",
        category: "Embedded",
        icon: <FaRobot />,
        description: "An alarm project that plays songs based on triggered events using an ESP microcontroller.",
        tech: ["Python", "ESP", "IoT"],
        githubLink: "https://github.com/SathvikKunuru/music-alarm"
    },
    {
        title: "UWB Tests (DWM1000)",
        category: "Embedded",
        icon: <FaGlobe />,
        description: "Test files and implementation for Ultra-Wideband (UWB) communication using DWM1000 modules.",
        tech: ["C++", "DWM1000", "UWB"],
        githubLink: "https://github.com/SathvikKunuru/UWB-Tests"
    },
    {
        title: "IBR117 Ethernet (Qt)",
        category: "Other",
        icon: <FaGlobe />,
        description: "Application made to test IBR117 board's Ethernet using Qt Libraries.",
        tech: ["Makefile", "Qt", "Ethernet"],
        githubLink: "https://github.com/SathvikKunuru/IBR117-Ethernet-Qt"
    },
    {
        title: "IBR117 Ethernet (C++)",
        category: "Embedded",
        icon: <FaGlobe />,
        description: "Application made in Qt to test the 'IBR117' boards Ethernet (LAN) - cpp version.",
        tech: ["Makefile", "C++", "Qt"],
        githubLink: "https://github.com/SathvikKunuru/IBR117-Ethernet"
    },
    {
        title: "IBR117 I2C Test",
        category: "Embedded",
        icon: <FaMicrochip />,
        description: "Test application using Qt for performing I2C operations on IBR117.",
        tech: ["Makefile", "I2C", "Qt"],
        githubLink: "https://github.com/SathvikKunuru/IBR117-I2C"
    },
    {
        title: "IBR117 Linux Headers",
        category: "Embedded",
        icon: <FaMicrochip />,
        description: "Custom header files for the IBR117 Linux board.",
        tech: ["C++", "Linux Headers"],
        githubLink: "https://github.com/SathvikKunuru/IBR117-Linux-Header-files"
    },
    {
        title: "Robots Collection",
        category: "Embedded",
        icon: <FaRobot />,
        description: "A repository collecting some of the small robotics projects I have made.",
        tech: ["Python", "Robotics"],
        githubLink: "https://github.com/SathvikKunuru/Robots"
    },
    {
        title: "RDPMS Railway",
        category: "Embedded",
        icon: <FaTrain />,
        description: "Real‑time train monitoring & predictive‑maintenance system for Indian Railways. Integrating LiDAR+IMU for pose & motion estimation.",
        tech: ["IoT", "SCADA", "LiDAR", "IMU"]
    },
    {
        title: "Face Detection (Edge-AI)",
        category: "AI/ML",
        icon: <FaUserCheck />,
        description: "Low‑power, offline face‑recognition attendance system. Developed with deep learning‑based anti-spoofing; benchmarking SCRFD model.",
        tech: ["Edge AI", "SCRFD", "Jetson Nano"]
    },
    {
        title: "Chlorophyll Estimation",
        category: "Embedded",
        icon: <FaLeaf />,
        description: "Optical bench setup and calibration for precise crop health monitoring and chlorophyll estimation.",
        tech: ["Optics", "Sensors", "Agriculture"]
    },
    {
        title: "Health Band",
        category: "Embedded",
        icon: <FaMobileAlt />,
        description: "Wearable health band focused on sensor validation for accuracy, drift, and environmental tolerance.",
        tech: ["Sensors", "Wearables", "Health"]
    },
    {
        title: "PLC Tracker",
        category: "Embedded",
        icon: <FaMicrochip />,
        description: "Robust PLC‑to‑field‑device communication testing using the ST7540 evaluation board.",
        tech: ["PLC", "ST7540", "Communication"]
    },
    {
        title: "Llama-7B-Chacha300",
        category: "AI/ML",
        icon: <FaRobot />,
        description: "Fine-tuned Llama 7B model hosted on Hugging Face.",
        tech: ["LLM", "Llama 7B", "Hugging Face"],
        githubLink: "https://huggingface.co/Sathvik-24/llama-7b-chacha300"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateX: -20 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateX: 0,
        transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 12 
        }
    },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
};

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projectsData.filter(project => {
        if (filter === 'All') return true;
        if (project.category === filter) return true;
        return false;
    });

    const filterTabs = ['All', 'AI/ML', 'Embedded', 'Web Apps', 'Other'];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <h2 className="animated-heading">Featured Builds</h2>
                    <div className="line"></div>
                </motion.div>

                <motion.div 
                    className="filter-tabs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    {filterTabs.map(tab => (
                        <button 
                            key={tab}
                            className={`filter-btn ${filter === tab ? 'active' : ''}`}
                            onClick={() => setFilter(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                <motion.div 
                    layout 
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div 
                                key={project.title}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                custom={idx}
                                style={{ height: '100%' }}
                            >
                                {/* Adding a continuous subtle float animation */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: idx * 0.2 
                                    }}
                                    style={{ height: '100%' }}
                                >
                                    <Tilt 
                                        className="tilt-container"
                                        tiltMaxAngleX={15} 
                                        tiltMaxAngleY={15} 
                                        perspective={1000} 
                                        transitionSpeed={1000} 
                                        scale={1.05}
                                        glareEnable={true}
                                        glareMaxOpacity={0.4}
                                        glareColor="var(--accent-cyan)"
                                        glarePosition="all"
                                        style={{ height: '100%' }}
                                    >
                                        <div className="project-card glass-card super-glow">
                                            <div className="project-content">
                                                <div className="project-top">
                                                    <div className="project-icon">{project.icon}</div>
                                                    <div className="project-links">
                                                        {project.githubLink && (
                                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                                                <FiExternalLink />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                                <ul className="project-tech">
                                                    {project.tech.map((t, i) => (
                                                        <li key={i}>{t}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Tilt>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
