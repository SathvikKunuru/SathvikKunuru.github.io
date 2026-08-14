"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaBug, FaUserCheck, FaRobot, FaTrain, FaGlobe, FaMicrochip, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const projectsData = [
    {
        title: "RDPMS Railway",
        category: "Embedded",
        icon: <FaTrain />,
        description: "Real-time train monitoring & predictive-maintenance system for Indian Railways. Integrating LiDAR+IMU for pose & motion estimation.",
        tech: ["IoT", "SCADA", "LiDAR", "IMU"]
    },
    {
        title: "Face Detection (Edge-AI)",
        category: "AI",
        icon: <FaUserCheck />,
        description: "Low-power, offline face-recognition attendance system. Developed with deep learning-based anti-spoofing; benchmarking SCRFD model.",
        tech: ["OpenCV", "Edge AI", "SCRFD", "Jetson Nano"]
    },
    {
        title: "Trainer Kits",
        category: "Embedded",
        icon: <FaMicrochip />,
        description: "Educational embedded-learning kits (microcontroller + sensors + workbook) for schools and colleges.",
        tech: ["PCB Design", "Microcontrollers", "Sensors"]
    },
    {
        title: "WeDevs Website",
        category: "Web Apps",
        icon: <FaGlobe />,
        description: "Corporate site showcasing projects, services, and grant readiness. Features a 23-route architecture.",
        tech: ["Next.js 15", "Tailwind CSS", "React"]
    },
    {
        title: "Smart Irrigation App",
        category: "Apps",
        icon: <FaMobileAlt />,
        description: "A responsive cross-platform mobile application to monitor soil moisture and control water pumps remotely.",
        tech: ["React Native", "Node.js", "MongoDB"]
    },
    {
        title: "Chlorophyll Estimation",
        category: "AI",
        icon: <FaLeaf />,
        description: "Low-cost ML-based device for real-time chlorophyll estimation, achieving 89% accuracy with XGBoost for precise crop health monitoring.",
        tech: ["Python", "XGBoost", "Precision Ag"]
    },
    {
        title: "Bee Frame Analyzer",
        category: "AI",
        icon: <FaBug />,
        description: "Edge-based deep learning pipeline for honeybee frame analysis. Achieved 93% accuracy using YOLO and custom CNNs.",
        tech: ["YOLO", "Raspberry Pi", "Linux"]
    },
    {
        title: "Domain-Specific LLM",
        category: "AI",
        icon: <FaRobot />,
        description: "Fine-tuned Llama 2 and Gemma:2B. Integrated vector embeddings and RAG, achieving 95% accuracy in context retention.",
        tech: ["Transformers", "RAG", "PyTorch"]
    },
    {
        title: "Yantrion Outreach",
        category: "Other",
        icon: <FaRocket />,
        description: "Network of 125+ contacts across academia, industry, and government for collaboration and deep-tech technology transfer.",
        tech: ["Networking", "Tech Transfer", "Strategy"]
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

    const filterTabs = ['All', 'AI', 'Embedded', 'Apps', 'Web Apps', 'Other'];

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
                    <h2 className="animated-heading">Masterpiece Projects</h2>
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
                                                        <FiExternalLink />
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
